import React from 'react'
import { useState } from 'react'
function Pagination({postsPerpage, totalPosts, paginate}) {
    const pageNumbers=[]

    for (let i=1; i <= Math.ceil(totalPosts / postsPerpage); i++){
        pageNumbers.push(i)
    }
    const [activePage, setActivePage]= useState(1)
    const handlePageClick=(number)=>{
        setActivePage(number)
    }
  return (
    <div >
        <nav className='container w-fit my-9 '>
            <ul className='container join join-item text-2xl'> 
                {pageNumbers.map((number)=>{
                    return <li key={number}>
                        <button className='btn' onClick={()=>{
                            handlePageClick(number)
                            paginate(number)
                        } }>{number}</button>
                    </li>
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination