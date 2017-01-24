import React from 'react';

import Loader from './Loader';

function withLoader(Component){
  return ({ ...props, isLoading }) => {
    if(isLoading){
      return <Loader />;
    }
    return <Component {...props} />;
  };
}

export default withLoader;