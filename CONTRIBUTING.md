# Guía para contribuir

¡Gracias por tu interés en contribuir a este proyecto de videoconferencias escalable!

## Cómo empezar

1. Haz un fork del repositorio.
2. Crea una rama con tu funcionalidad o corrección:  
   `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commits descriptivos:  
   `git commit -m "Agrega X funcionalidad"`
4. Haz push a tu fork:  
   `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request detallando tus cambios.

## Recomendaciones

- Usa buenas prácticas de código.
- Comenta tu código cuando sea necesario.
- Asegúrate de que tu cambio no rompe funcionalidades existentes.
- Si agregas nuevas dependencias, justifica su uso.

## Instalación local

```bash
cd server
npm install
npm start

cd ../client
npm install
npm start
