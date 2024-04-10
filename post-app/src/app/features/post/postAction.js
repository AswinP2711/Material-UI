import { nanoid } from "@reduxjs/toolkit";

export function postAdded(name,gender,age,title,content){
    let payload = {
        id:nanoid(),
        name,
        gender,
        age,
        title,
        content
    }
    return{
        type:'POSTADDED',
        payload
    }
}