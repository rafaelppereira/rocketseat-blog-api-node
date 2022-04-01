const { checkSchema } = require('express-validator');

module.exports = {
  pacient: checkSchema({
    name: {
      trim: true,
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    dateReceipt: {
      trim: true,
      isLength: {
        options: { min: 8 }
      },
      errorMessage: 'Data da receita precisa ter pelo menos 8 caracteres'
    },
    birthDate: {
      trim: true,
      isLength: {
        options: { min: 8 }
      },
      errorMessage: 'Data de nascimento precisa ter pelo menos 8 caracteres'
    },
    cpf: {
      trim: true,
      isLength: {
        options: { min: 11 }
      },
      errorMessage: 'CPF precisa ter pelo menos 11 caracteres'
    },
    isDelete: {
      trim: true,
    },
    isPending: {
      trim: true,
    }
  })
}