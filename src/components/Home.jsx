import React, { useState } from "react";
import { useFetch } from "../../hooks/UseFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
function Home() {

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerpage]= useState(5)
  const [data, setData] = useState(null);
  const [query, setQuery] = useState();
  const [url, setUrl] = useState(
    "https://api.unsplash.com/search/photos?client_id=mnED95ShF_EQtiCaBZJ_VImwe9412iSeQcYIn6L0_x0&page=1&query=features"
  );
  const { data: foto } = useFetch(url);
  useEffect(() => {
    if (foto) {
      setData(foto.results);
    }
  }, [foto]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(
      `https://api.unsplash.com/search/photos?client_id=mnED95ShF_EQtiCaBZJ_VImwe9412iSeQcYIn6L0_x0&page=1&query=${query}`
    );
  };

  const indexOflastPost= currentPage*postsPerpage
  const indexOfFirstPost = indexOflastPost - postsPerpage
  if(data){
     

  }
 const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <h1 className="text-3xl my-5">Search any image</h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-6 w-full mx-auto text-center my-5"
      >
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-neutral">Search</button>
      </form>
      <ul className="w-fit grid  lg:grid-cols-3 sm:grid-cols-1 gap-2 max-w-7xl mx-auto">
        {data &&
          data.slice(indexOfFirstPost, indexOflastPost).map((d) => {
            const {id} = d
            return (
              <li key={d.id}>
               <Link to={`single/${id}`}>
               <img
                  src={d.urls.regular}
                  alt=""
                  className="w-[400px] h-[400px] object-cover"
                />
               </Link>
              </li>
            );
          })}
      </ul>
      <Pagination postsPerpage={postsPerpage} totalPosts={data&&data.length} paginate={paginate}/>
    </div>
  );
}

export default Home;
