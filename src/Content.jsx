import React from 'react';

const Content = () => {
  return (
    <>
      <p>Daniel Gonzalez</p>
      <p>Do you want: </p>
      <div className="btn-container btn-wrapper">
        <button className="btn-pagination">modify</button>
        <button className="btn-pagination">delete</button>
      </div>
    </>
  );
};

export default Content;
