import React from 'react';

const Catagories = ({id, title}) => {
  return (
    <div key = {id}>
      {title}
    </div>
  )
};

export default Catagories;