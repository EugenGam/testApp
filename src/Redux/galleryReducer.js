import axios from "axios";
import { startLoading, finishLoading } from "./loadingReducer";

export const galleryReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PHOTOS":
      return [...action.payload];
    default:
      return state;
  }
};

export const setPhotos = (payload) => {
  return { type: "SET_PHOTOS", payload };
};

export const getPhotos = () => (dispatch) => {
  dispatch(startLoading());
  axios
    .get(
      "http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
    )
    .then((response) => {
      let photos = response.data.map((el) => {
        const { alt_description, id, user, urls } = el;
        return {
          desc: alt_description,
          id,
          img: urls.small,
          author: user.username,
        };
      });
      return photos;
    })
    .then((data) => dispatch(setPhotos(data)))
    .catch((e) => console.log(e))
    .finally(() => dispatch(finishLoading()));
};
