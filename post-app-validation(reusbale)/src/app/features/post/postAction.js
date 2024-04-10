import { nanoid } from "@reduxjs/toolkit";

export function postAdded(formValues) {
  let payload = {
    id: nanoid(),
    name:formValues.fullname,
    gender:formValues.gender,
    age:formValues.age,
    title:formValues.posttitle,
    content:formValues.post,
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