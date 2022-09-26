import React from 'react';
import './contentCapsule.scss';
import Header from '../header/Header';

interface ComponentsProps {
  child: any
  name: string
}

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //
const ContentCapsule : React.FC<ComponentsProps> = ({ child, name }) => {
  return (
    <>
      <div className='contentCapsule'>
        <Header name={name} />
        {child}
      </div>
    </>
  );
}

export default ContentCapsule;