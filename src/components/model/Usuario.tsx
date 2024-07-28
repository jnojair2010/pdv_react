import React from "react";
import Person from './Person'

export default class Usuario{

    static professionActivityAdmin:boolean=false;
    static login:string;
    static password:string;
    static status:string;

    static usuario:Person ={
        firstName:'',
        lastName:'',
        birthBaye:'',
        profession:''
    }
    
}