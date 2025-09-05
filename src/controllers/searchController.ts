import type { Request, Response } from 'express';

import {createMenu} from '../heplers/createMenu.ts';
import {Pet} from '../models/pet.ts'

export const search=(req:Request, res:Response)=>{
    let query:string=req.query.q as string;

    let list=Pet.getFromName(query);

    if(!query){
        res.redirect('/');
        return;
    }

    res.render('pages/page',{
        nemu:createMenu(''),
        list,query
    });
}