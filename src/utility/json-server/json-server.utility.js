import { API } from "../../static/variables";
import { addCollectionAndDocuments } from "../firebase.utility";
export const getData = async (url) => {
  const promise = await fetch(API + url);
  return await promise.json();
};
export const getDataAndPushToFirebase = async (collection) => {
  const data = await getData(collection);
  await addCollectionAndDocuments(collection, data);
};
