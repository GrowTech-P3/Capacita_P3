const Estados = require('../models').Estado

exports.listAll = (req, res) => {
    Estados.findAll ().then(estados => {
        res.send(estados) 
    }).catch(err => {
        res.send(err)
    })
}
