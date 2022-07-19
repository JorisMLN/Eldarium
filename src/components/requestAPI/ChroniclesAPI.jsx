import { useEffect } from "react";
import { useState } from 'react' ;

import styles from './Chronicle.module.css' ;

export function ChroniclesAPI() {
  // const URL = 'http://localhost:5000/chronicle/';
  const URL = 'https://telperion-2021.web.app/chronicles/' ;

  // PAGINATION OR JUST ALL ?
  const [eldarId, updateEldarId] = useState(0) ;
  const [chronicles, setChronicles] = useState([]) ;

  const chroniclesRequest = async () => {
    try {
      // const response = await fetch(`${URL}${eldarId ? eldarId : ''}`);
      const response = await fetch(`${URL}`);
      const jsonRes = await response.json();
      console.log(jsonRes);
      setChronicles(jsonRes) ;
    } catch (error) {
      console.error(error);
    }
  } ;

  useEffect(() => {
    chroniclesRequest()
  // }, [chronicles, eldarId]);
}, []);

  return (
    <div>
      <button className={styles['previous-chapter-button']} onClick={() => updateEldarId(eldarId - 1)}> Chapter - 1 </button>
      <button className={styles['next-chapter-button']} onClick={() => updateEldarId(eldarId + 1)}> Chapter + 1 </button>
      <div>le chapitre: {eldarId}</div>
      {chronicles.map((item, index) =>
        <div key={item.id} className={index % 2 === 0 ? styles['story-left'] : styles['story-right']}>
          <h2>{item.id} - {item.data.Chapitre}</h2>
          <h3>{item.data.Nom}</h3>
          <p>{item.data.Texte}</p>
        </div>
      )}
    </div>
  ) ;
}