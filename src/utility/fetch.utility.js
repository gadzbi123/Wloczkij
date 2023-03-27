import { API } from "../static/variables";
export const getData = async (url) => {
  const promise = await fetch(API + url);
  return await promise.json();
};
