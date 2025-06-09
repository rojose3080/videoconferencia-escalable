# Sistema de Videoconferencias Escalable

Sistema de videoconferencias en tiempo real construido con React, Node.js, WebRTC y Socket.io.  
Permite conexiones P2P entre navegadores con señalización vía Socket.io, pensado para ser escalable y base para sistemas más complejos con salas múltiples, autenticación y funciones colaborativas.

---

## Tecnologías

- **React** - Frontend moderno y reactivo  
- **Node.js & Express** - Backend y servidor de señalización  
- **WebRTC** - Comunicación P2P en tiempo real para video y audio  
- **Socket.io** - Señalización y gestión de eventos en tiempo real

---

## Instalación

1. Clonar el repositorio

   ```bash
   git clone https://github.com/rojose3080/videoconferencia-escalable.git
   cd videoconferencia-escalable

Instalar dependencias del cliente

cd client
npm install

Instalar dependencias del servidor

cd ../server
npm install

Ejecutar el servidor

npm start

Ejecutar la aplicación cliente (en otra terminal)

cd client
npm start

Abrir en navegador http://localhost:3000

Características

Videollamadas P2P usando WebRTC

Señalización en tiempo real con Socket.io

Soporte básico para múltiples usuarios

Escalable para futuras mejoras (salas, chat, autenticación)

Cómo contribuir

Haz un fork de este repositorio

Crea una rama para tu feature (git checkout -b feature/nombre-feature)

Realiza tus cambios y haz commit (git commit -m "Agrega nueva funcionalidad")

Haz push a tu rama (git push origin feature/nombre-feature)

Abre un Pull Request en GitHub

Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por visitar y contribuir! 🚀