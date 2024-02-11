import { ADD_BOOK, LOADED_BOOK, REMOVE_BOOK, UPDATE_BOOK } from "./ActionTypes";

const initialState = [
    {
      name: "Slow Horses (Deluxe Edition)",
      author: "Mick Herron",
      thumbnail: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
      price: 14,
      rating: 3,
      featured: false,
      id: 1
    },
    {
      name: "The Last Thing He Told Me: A Novel",
      author: "Laura Dave",
      thumbnail: "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
      price: 13.99,
      rating: 4,
      featured: false,
      id: 2
    }
  ]

const bookStoreReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case LOADED_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [...state, { ...payload }];
    case REMOVE_BOOK:
      return copiedState.filter((item) => item.id !== payload);
    case UPDATE_BOOK:
      return copiedState.map((item) =>
        item.id === payload.id ? { ...payload } : item
      );
    default:
      return state;
  }
};

export default bookStoreReducer;
