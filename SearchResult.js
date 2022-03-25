import React from 'react'
import './SearchResult.css'

function SearchResult({ img, location, title,description, star, price, total}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
    
            
            <svg className="searchResult_heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>								 
         
         <div className='searchResult_info'>
             <div className="searchResult_infoTop">
             <p>{location}</p>
                 <h3>{title}</h3>
                 <p>___</p>
                 <p>{description}</p>
             </div>

             <div className="searchResult_infoBottom">
              <svg className="searchResult_star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> 
             <p>
             <strong>{star}</strong>
             </p>
             </div>
             <div className="searchResult_price">
               <h2>{price}</h2>
               <p>{total}</p>
             </div>
         </div>
         </div>
        
            
    )
}

export default SearchResult
