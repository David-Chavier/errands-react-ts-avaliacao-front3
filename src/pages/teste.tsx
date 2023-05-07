import React from 'react';

interface ComponetNameProps {
  property: string;
}

const ComponetName: React.FC<ComponetNameProps> = ({ property }) => {
  return (
    <React.Fragment>
      <h1>Growdev</h1>
      <p>{property}</p>
    </React.Fragment>
  );
};

export default ComponetName;
