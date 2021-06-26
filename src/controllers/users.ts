import {Request, Response} from "express";
import Joi, {ValidationError} from 'joi';
import {promiseWrapper as ActiveDirectory} from "activedirectory2";
import {ldapConfig} from "../../config";

const AD = new ActiveDirectory({
    url: ldapConfig.url,
    baseDN: ldapConfig.baseDN,
    username: ldapConfig.username,
    password: ldapConfig.password
})

export const login = async function(req: Request, res: Response) {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(32)
            .regex(/[a-zA-Z0-9]/)
            .required(),
        password: Joi.string()
            .min(15)
            .max(64)
            .required()
    });

    try {
        const {username, password} = await schema.validateAsync(req.body);

        const authenticated = await AD.authenticate(username, password);
        if(!authenticated) {
            return res.status(403).send({message: 'Invalid username or password'});
        }

        // TODO Add session or JWT
        return res.status(200).send({message: 'Authenticated'});

    }
    catch(err) {
        if (err.isJoi) {
            return res.status(400).send({message: (err as ValidationError).message});
        }
        // LDAP incorrect login error
        if(err.lde_message.startsWith('80090308:')) {
            console.log('err');
            return res.status(403).send({message: 'Invalid username or password'});
        }
        console.error(err);
        return res.status(500).send({message: 'An error has occurred on the server.'})
    }
}