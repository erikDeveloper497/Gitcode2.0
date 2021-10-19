const Cliente = require('../models/cliente.model');

// POST a Cliente
exports.create = (req, res) => {

    const cliente = new Cliente({
        codigoCliente: req.body.codigoCliente,
        razonSocial: req.body.razonSocial,
        ruc: req.body.ruc,
        direccion: req.body.direccion,
        obsCliente: req.body.obsCliente
    });

    cliente.save().then(data => {
        res.status(200).json({
            message: "Upload Successfully a Cliente to MongoDB with id = " + data.id,
            cliente: data,
        });
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

// FETCH all Clientes
exports.findall = (req, res) => {
    Cliente.find().select('-__v').populate('proformas').then(clienteInfos => {
        res.status(200).json({
            message: "Get all Cliente' Infos Successfully!",
            numberOfClientes: clienteInfos.length,
            cliente: clienteInfos
        });
    }).catch(error => {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

