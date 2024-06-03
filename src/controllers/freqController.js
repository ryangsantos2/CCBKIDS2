var freqModel = require("../models/freqModel");

function armazenar(req, res) {
    var nomeFilho = req.body.idFilhoServer;
    var presenca = req.body.presencaServer;
    var falta = req.body.faltaServer;
  
    freqModel.armazenar(nomeFilho,falta,presenca).then((resultado) => {
      if (resultado.ok){
        res.status(200)
      }
    });
  }


module.exports = {
    armazenar
}
