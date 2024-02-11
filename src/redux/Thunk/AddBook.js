import { addBook } from "../BookStore/action";

const addBookThunk = input => {
    return async (dispath,getState)=> {
        try {
            const nextIdMaker = state => state.reduce((maxId,item)=> Math.max(item,maxId) - 1) + 1;

            const nextId = nextIdMaker(getState())
            const response = await fetch('http://localhost:9000/books', {
                method: 'POST',
                body: JSON.stringify({...input,id:nextId}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            const book = response.json();
          dispath(addBook(book))


        }
        catch (error){
            console.log(error)
        }
    }
}


export default  addBookThunk;