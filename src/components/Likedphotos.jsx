import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
function Likedphotos() {
    const {likedPhotos, addlikePhotos} = useSelector((st)=>st.unsplash)
  return <>
    <ul className="container w-fit grid  lg:grid-cols-3 sm:grid-cols-1 gap-2  mx-auto">
    {likedPhotos.map((d) => {
        const {id} = d
        return (
          <li key={d.id}>
           <Link to={`/single/${id}`}>
           <img
              src={d.urls.regular}
              alt=""
              className="w-[330px] h-[400px] object-cover"
            />
           </Link>
           <button onClick={()=>dispatch(addlikePhotos(d))} className="btn btn-sm btn-primary mt-3">Like</button>
          </li>
        );
      })}
  </ul>
      {likedPhotos.length==0&& <h1 className="text-4xl text-center">You do not have any liked photos</h1>}
  </>
}

export default Likedphotos