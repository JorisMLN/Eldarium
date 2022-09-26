import React from 'react';
import './header.scss';


interface ComponentsProps {
  name: string
}

const Header : React.FC<ComponentsProps> = ({name}) => {

  return(
    <>
      <div className='header'>
        {name}
      </div> 
    </>
  )
}

export default Header;