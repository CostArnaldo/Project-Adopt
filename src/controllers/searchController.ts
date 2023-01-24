import { Request, Response } from "express";
import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/CreateMenuObjects";

export const search = (req: Request, res: Response)=>{
    let query: string = req.query.q as string;
    let list= Pet.getFromName(query);

   /* if(!query){
        res.redirect("/");
        return;*/ 
//campo de pesquisa só sera ativado caso digite algo.
    
    res.render("pages/page", {
        menu: createMenuObject(""),
        list
       
    
    });
}