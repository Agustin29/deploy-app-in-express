<p align="center">
    <img src="https://logowik.com/content/uploads/images/nodejs.jpg" height="200" width="250" alt="Node.JS">
    <img src="https://upload.wikimedia.org/wikipedia/commons/archive/6/64/20170429090804%21Expressjs.png" alt="Express.JS">
    <img src="https://pm2.keymetrics.io/assets/pm2-logo-1.png" alt="PM2">
</p>

## SERVIDOR BASE PARA HACER DEPLOY DE UNA APP USANDO EXPRESS.JS

Esta base funciona para hacer deploy de alguna aplicación hecha con las tecnologias: 

- Angular.ts
- React.jsx
- Vue.js 

## USO

- Ejecute el comando 
````````````
npm install
````````````
para instalar los paquetes requeridos por el archivo "package.json".

- Copie en el root del servidor la carpeta "dist" generada. 

- Una vez realizado esto puede hacer el 
despliegue del servidor utilizando PM2. 

## OBSERVACION

El archivo requerido por PM2 para el deploy seria "ecosystem.config.js"

[refenencia de pm2](https://pm2.keymetrics.io/docs/usage/deployment/)