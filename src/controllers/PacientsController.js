const mongoose = require('mongoose');
const { validationResult, matchedData } = require('express-validator');

const Pacients = require('../models/Pacients');

module.exports = {
  getPacients: async (req, res) => {
    const pacients = await Pacients.find();
    res.json({pacients});
  },
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({error: errors.mapped()});
      return;
    }

    const data = matchedData(req);

    //Verify pacient exists
    const pacient = await Pacients.findOne({
      name: data.name
    });
    if (pacient) {
      res.json({
        error: {pacient: {msg: 'Paciente já existe'}}
      });
      return;
    };



    const newPacient = new Pacients({
      name: data.name,
      plan: data.plan,
      dateReceipt: data.dateReceipt,
      birthDate: data.birthDate,
      cpf: data.cpf,
      isDelete: data.isDelete,
      isPending: data.isPending,
    });
    await newPacient.save();
    //Saved

    res.json({message: {msg: `Paciente adicionado com sucesso!`}});
  }
};