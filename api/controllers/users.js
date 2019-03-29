'use strict';


const User = require('../models/user');

export async function getUsers(req, res) {
  try {

    const users = await User.find({}, 'nombre email role ');

    if (!users) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error',
      });
    }

    res.status(200).json({
      ok: true,
      usuarios: users,
    });
  } catch(e){
    console.log(e);

    return res.status(500).json({error: 'There is a problem in the server'});
  }
}

export async function createUser(req, res) {
  try {
    const { name, email, password, role } = req.body;

    let user = new User({
      name: name,
      email: email,
      password: password,
      role: role
    });

    user.save((err, userSave) => {

      if (err) {
          return res.status(400).json({
              ok: false,
              mensaje: 'Error al crear usuario',
              errors: err
          });
      }

      res.status(201).json({
          ok: true,
          usuario: userSave,
      });
  });
  } catch(e){
    return res.status(500).json({error: 'There is a problem in the server'});
  }
}
