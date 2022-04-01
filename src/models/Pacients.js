const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  name: String,
  plan: String,
  dateReceipt: String,
  birthDate: String,
  cpf: String,
  isDelete: Boolean,
  isPending: Boolean,
});

const modelName = 'Pacients';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName];
} else {
  module.exports = mongoose.model(modelName, modelSchema);
}