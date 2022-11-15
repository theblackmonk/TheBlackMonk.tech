//destructuring
import React from 'react';

const Photo = (props) => {
    //console.log(props.alt_description)
    return(
        <article className='photo'>
            <img src={props.urls.regular} alt={props.alt_description}/>
            <div className="photo-info">
                <div>
                    <h4>{props.user.name}</h4>
                    <p>{props.likes}</p>
                </div>
                <a href={props.user.portfolio_url}>
                    <img src={props.user.profile_image.medium} className="user-img"/>
                </a>

            </div>
        </article>
    ) 
  }
  
export default Photo