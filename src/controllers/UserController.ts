import { Request, Response } from 'express';
import knex from '@database/connection';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, hashPassword, whatsapp } = req.body;
      const user = await knex('users').insert({name, email, hashPassword, whatsapp});

      return res.json(user);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new UserController();
