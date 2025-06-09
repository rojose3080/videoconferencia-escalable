
import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  let peerConnection;
  const config = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
        socket.emit('join');

        socket.on('offer', async (offer) => {
          peerConnection = new RTCPeerConnection(config);
          stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
          await peerConnection.setRemoteDescription(offer);
          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(answer);
          socket.emit('answer', answer);
          peerConnection.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
          };
        });

        socket.on('answer', async (answer) => {
          await peerConnection.setRemoteDescription(answer);
        });

        socket.on('candidate', (candidate) => {
          peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        });

        peerConnection = new RTCPeerConnection(config);
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit('candidate', event.candidate);
          }
        };

        peerConnection.ontrack = (event) => {
          remoteVideoRef.current.srcObject = event.streams[0];
        };

        peerConnection.createOffer()
          .then(offer => peerConnection.setLocalDescription(offer))
          .then(() => socket.emit('offer', peerConnection.localDescription));
      });
  }, []);

  return (
    <div>
      <h1>Sistema de Videoconferencia</h1>
      <video ref={localVideoRef} autoPlay playsInline muted></video>
      <video ref={remoteVideoRef} autoPlay playsInline></video>
    </div>
  );
}

export default App;
