import React from 'react';
import './Error.css'
const ErrorPage = () => {
 
  return (
    <div className='errorDesign'>
    <div className="errorPage">
      <h1>Error: Incorrect City Name</h1>
      <p>Please enter a correct city, place, or state name.</p>
      <button onClick={()=>window.location.reload()}>Refresh Page</button>
    </div>
    </div>
  );
};

export default ErrorPage;