import { loadedBook } from "../BookStore/action"

const loadedBooks = async (dispatch)=> {
    try {
        const response = await fetch('http://localhost:9000/books');
        const books = await response.json();
        dispatch(loadedBook(books))
    } catch (error) {
        console.log(error)
    }
}

export default loadedBooks;