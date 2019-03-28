'use strict';



export async function getUser(req, res) {
  try {
    const { name, email } = req.body;
    console.log({name,email})
    return res.send({
        ok: true,
        user: {
          name: name,
          email: email
        },
    });
  } catch(e){
    return res.status(500).json({error: 'There is a problem in the server'});
  }
}
