import React from 'react';
import { useDispatch } from "react-redux";
import { setKart } from '../../store';
import './kart.scss';

const Kart : React.FC = () => {
  const dispatch = useDispatch();

  const closeKart = () => {
    dispatch(setKart(false))
  }
  
  return(
    <>
      <div className='kart'>
        K A R T
        <button onClick={closeKart}> close kart </button>
      </div>
    </>
  )
}

export default Kart;