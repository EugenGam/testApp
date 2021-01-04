import axios from "axios";
import { startLoading, finishLoading } from "./loadingReducer";

export const photoPageReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PHOTO":
      return { ...action.payload };
    default:
      return state;
  }
};

export const setPhoto = (payload) => {
  return { type: "SET_PHOTO", payload };
};

export const getPhoto = (photoId) => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(
      `http://api.unsplash.com//photos/${photoId}/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`
    )
    .then((response) => {
      const {
        alt_description,
        downloads,
        likes,
        user,
        views,
        urls,
      } = response.data;
      return {
        desc: alt_description,
        img: urls.regular,
        author: user.name,
        likes,
        downloads,
        views,
      };
    })
    .then((data) => dispatch(setPhoto(data)))
    .catch((e) => console.log(e))
    .finally(() => dispatch(finishLoading()));
};
