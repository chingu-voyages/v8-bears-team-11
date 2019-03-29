'use strict';
import bcrypt from 'bcrypt';
import User from '../models/user';

export async function getUsers(req, res) {
  try {

    const users = await User.find({}, '_id name email surname img role');

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
    const { name, surname, email, password, role } = req.body;

    let user = new User({
      surname: surname,
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
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
      userSave.password = ':)'
      res.status(201).json({
          ok: true,
          usuario: userSave,
      });
  });
  } catch(e){
    return res.status(500).json({error: 'There is a problem in the server'});
  }
}

export async function updateUser(req, res) {
  try{
    const { name, email, role } = req.body;
    const { id } = req.params;

    const user = await User.findById( id )

    if (!user) {
      return res.status(400).json({
          ok: false,
          mensaje: 'The user with' + id + ' dosent exits',
          errors: { message: 'there is not user with that id' }
      });
    }

    user.name = name;
    user.email = email;
    user.role = role;

    user.save((err, saveUser) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          message: 'Error updating the user',
          error: err
        });
      }

      saveUser.password = ':)';

      res.status(200).json({
      ok: true,
      user: saveUser
      });
    })
  }catch(err){
    return res.status(500).json({error: 'There is a problem in the server'});
  }
};

export async function deleteUser(req, res) {
  try{

    const user = await User.findByIdAndRemove({_id: req.params.userId });

    if (!user) {
      return res.status(400).json({
        ok: false,
        mensaje: 'There is no user for that id',
        errors: { message: 'Sorry we dont have that user' }
      });
    }

    res.status(200).json({
      ok: true,
      usuario: user
    });

  }catch(e){
    return res.status(500).json({error: 'There is a problem in the server'});
  }
};
