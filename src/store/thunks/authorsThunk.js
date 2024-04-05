import { createAuthor, getAuthors } from "../../services";
import { setAuthors, saveAuthor } from "../slices/authorsSlice";

export const createAuthorThunk = (data, token) => {
  return async function (dispatch) {
    const result = await createAuthor(data, token);

    dispatch(saveAuthor(result.result));
  };
};

export const getAuthorsThunk = () => {
  return async function (dispatch) {
    const response = await getAuthors();

    dispatch(setAuthors(response.result));
  };
};
