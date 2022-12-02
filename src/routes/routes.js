
const express = require ('express')
const router = express.Router()
const paymentTemplateCopy = require ('../models/Paymodels')

router.post('/pay', (request, response) =>{
    const paymentUser = new paymentTemplateCopy ({
        email:request.body.email,
        amount:request.body.amount,
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        department:request.body.department
    })
      paymentUser.save()
      .then(data =>{
        response.json(data)
      })
      .catch(error =>{
        response.json(error)
      })
})
 

module.exports = router