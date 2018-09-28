import React from 'react';
import './Searchbox.css';

export const Searchbox = ({searchChange}) => {
  return (
    <div className="col-md-7 searchBoxWrapper">
      <input className={'searchBox'}
             type={'text'}
             placeholder={'Search'}
             onChange={searchChange} />
      <button className="searchButton">
        <i className="fa fa-search"></i>
      </button>
    </div>
  )
}