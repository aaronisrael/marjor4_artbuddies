const Joi = require(`joi`);

const schema = {

  userId: {
    type: Number,
    required: true,
    validation: Joi.number()
  }

};

module.exports = {schema};
