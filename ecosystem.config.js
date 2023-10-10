module.exports = {
  apps: [
    {
      name: "NOMBRE_DE_APLICACION", //NOMBRE QUE LE DARA A LA APLICACION EN PM2
      script: "./server.js", //ARCHIVO SERVIDOR CREADO CON EXPRESS.JS
      watch: true,
    },
  ],

  //OTROS ARCHIVOS UTILIZADOS POR PM2, PARA MAS DETALLES LEA LA DOCUMENTACION DE PM2.
  /* deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  }, */
};
