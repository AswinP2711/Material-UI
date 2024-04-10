import { nanoid } from "@reduxjs/toolkit";

export function postAdded(name, gender, age, title, content) {
  let payload = {
    id: nanoid(),
    name,
    gender,
    age,
    title,
    content,
  };
  return {
    type: "POSTADDED",
    payload,
  };
}

export function postUpdated(action) {
  return {
    type: "POSTUPDATED",
    action,
  };
}

export function postDelete(postId){
    return{
        type:"POSTDELETED",
        postId
    }
}