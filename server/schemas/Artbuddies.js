const Joi = require(`joi`);

const schema = {

  userId: {
    type: Number,
    required: true,
    validation: Joi.number()
  },
  rating: {
    type: Object,
    required: true,
    validation: Joi.object()
  }

};

module.exports = {schema};
