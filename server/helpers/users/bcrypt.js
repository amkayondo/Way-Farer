const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');


const userBcrypt = (password) => {
  bcrypt.hash(password, 10,
    (err, hash) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      } else {
        // sdfsd
      }
    });
};
