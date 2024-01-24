import React from 'react';

const Card = ({ title, description, url, imageUrl }) => (

  <div className="col-md-3 mb-4">
  <div className="card" style={{ width: '18rem', height:'300px',overflow:'auto'  }}>
    {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={url} className="btn btn-danger">
        Read More
      </a>
    </div>
  </div>
  </div>
);

export default Card;