const Joi = require('@hapi/joi')

const summarySchema = Joi.object({
  id: Joi.string().required() 
});

module.exports = {
  summarySchema  
}