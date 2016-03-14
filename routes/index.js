var express = require('express');
var router = express.Router();
var validate = require('validate.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var constraints = {
    fornavn: {
      presence: {
        message : "må være fylt ut."
      }
    },
    etternavn: {
      presence: {
        message : "må være fylt ut."
      }
    },
    adresse: {
      presence: {
        message: "må være fylt ut."
      }
    },
    epost: {
      presence: {
        message: "må være fylt ut."
      },
      email : {
        message :"er ikke riktig epostformat."
      }
    },
    postnr: {
      presence: {
        message: "må være fylt ut."
      },
      numericality: {
        onlyInteger: true,
        message : "må være et nummer."
      },
      length : {
        is : 4,
        message : "har feil lengde, må være 4."
      }
    }
  }
  console.log(req.body);
  console.log(validate(req.body, constraints));
  res.render('result', { title: 'Express' });
});

module.exports = router;
