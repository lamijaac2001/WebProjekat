const { check } = require('express-validator')

exports.categoryCreateValidator = [
  check('name').notEmpty().withMessage('Ime kategorije je uključeno')
    .isLength({ max: 255 })
    .withMessage("Kategorija može imati maksimalno ")
]