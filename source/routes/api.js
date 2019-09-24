const router = require('express').Router();
const handlers = require('../handlers/api-handlers');
const schemas = require('../handlers/validation-schemas');
const validator = require('express-joi-validation').createValidator({ passError: true })

router.get('/summary', validator.query(schemas.summarySchema), handlers.summary);

module.exports = router;