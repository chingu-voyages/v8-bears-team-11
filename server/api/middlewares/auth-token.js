
import { verify } from 'jsonwebtoken';

const SEED = require('../config/config').SEED;


export async function authToken(req, res ,next) {
    try{

        const token = req.query.token;

        verify(token, SEED, (err, decoded) => {

            if (err) {
                return res.status(401).json({
                    ok: false,
                    message: 'invalid token',
                    error: err
                });
            }
            req.user = decoded.user;
            return  next();
        });
    }catch(e){
        return res.status(500).json({error: 'There is a problem in the server'})
    }
}
