import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  return <article className='single-tour'>
    <img src={image} alt={name} className='img'/>
    <span className='tour-price'>{price}</span>
    <h5>{name}</h5>
    <div className='tour-info'>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button type='button' className='btn' onClick={() => {setReadMore(!readMore)}}>
          {readMore ? 'Show less' : 'Read more'}
        </button>
      </p>
    </div>
    <button type='button' className='delete-btn btn' onClick={() => removeTour(id)}>
      Not interested
    </button>
  </article>;
};

export default Tour;
