import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/UseFetch'
import Pagination from './Pagination'

function Single() {
    const {id}= useParams()
    const url = `https://api.unsplash.com/photos/${id}?client_id=mnED95ShF_EQtiCaBZJ_VImwe9412iSeQcYIn6L0_x0`
    const {data} = useFetch(url)
    console.log(data)
  return (
   <div className='w-fit container'>
    {data&& <div className="card w-fit h-[800px] bg-base-100 shadow-xl mt-40">
  <figure><img src={data.urls.regular} alt={data.alt_description} /></figure>
  <div className="card-body">
    <h2 className="card-title">
       {data.user.name}'s photo  
      <div className="badge w-fit h-auto badge-primary">Created at: {data.created_at}</div>
    </h2>
    <Link to='/'><h3 className='text-sky-500'>Back home</h3></Link>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Views {data.views}</div> 
      <div className="badge badge-outline">Likes {data.likes}</div>
    </div>
  </div>
</div>}
<Pagination/>
   </div>
  )
}

export default Single