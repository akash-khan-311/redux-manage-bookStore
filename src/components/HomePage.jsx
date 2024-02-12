import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import InputForm from "./InputForm";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";
import loadedBooks from "../redux/Thunk/LoadedBooks";

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isUpdate,setIsUpdate] = useState(false)

  

  // Load Books
  useEffect(() => {
    dispatch(loadedBooks);
  }, [dispatch]);

  // Feature filter
  const featureFilterHanlder = (item) => {
    if (filterFeatured) {
      return item.featured;
    } else {
      return true;
    }
  };

  //   Serarch Filter
  const searchFilterHandler = (item) => {
    if (searchText) {
      return item.name.toLowerCase().includes(searchText?.toLocaleLowerCase());
    } else {
      return true;
    }
  };
  return (
    <div>
      <Header setSearchText={setSearchText} />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setFilterFeatured(false)}
                  className={`filter-btn duration-500 ${!filterFeatured && 'active-filter'}`}
                  id="lws-filterAll"
                >
                  All
                </button>
                <button
                  onClick={() => setFilterFeatured(true)}
                  className={`filter-btn duration-500 ${filterFeatured && 'active-filter'}`}
                  id="lws-filterFeatured"
                >
                  Featured
                </button>
              </div>
            </div>
            <div className="lws-bookContainer">
              {/* Card 1 */}
              {books.length >= 1
                ? books
                    .filter(searchFilterHandler)
                    .filter(featureFilterHanlder)
                    .map((book) => <SingleBook key={book.id} setIsUpdate={setIsUpdate} book={book} />)
                : "No Book Found"}
            </div>
          </div>
          {/* Input Form */}
          <InputForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
