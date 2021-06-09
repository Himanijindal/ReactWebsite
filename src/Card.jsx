import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from '../src/images/s1.jpg';

const Card = (props) => {
    return (
        <>
       
<div className="col-md-4 col-10 mx-auto">
<div className="card hover" style={{ width: '25rem',marginTop:"20px" }}>
  <img src={props.imgsrc} class="card-img-top " style={{ width: '25rem',height:'287px' }} alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href={props.link} target="_blank" className="btn btn-primary">Explore Now</a>
  </div>
</div>
</div>

        </>
    )
}
export default Card;