var freqModel = require("../models/freqModel");

function armazenar(req, res) {
    var usuario = req.body.usuarioServer;
    var presenca = req.body.presencaServer;
    var falta = req.body.faltaServer;
  
    freqModel.armazenar(usuario,falta,presenca).then((resultado) => {
      if (resultado.ok){
        res.status(200)
      }
    });
  }


module.exports = {
    armazenar
}
