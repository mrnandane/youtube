import React from 'react';
import ThumbnailDisplay from '../../components/ThumbnailDisplay/ThumbnailDisplay';

const ThumbnailsList = () => {

  return (
    <div className="col-md-9">
      <div className="row mx-0">
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
        <ThumbnailDisplay/>
      </div>
    </div>
  );
}

export default ThumbnailsList;
