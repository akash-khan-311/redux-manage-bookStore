import { updateBook } from "../BookStore/action";

const updateBookThunk = (inputBookObj) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:9000/books/${inputBookObj.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(inputBookObj),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const updatedBook = await response.json();
      dispatch(updateBook(updatedBook));
    } catch (error) {
      console.log(error);
    }
  };
};

export default updateBookThunk