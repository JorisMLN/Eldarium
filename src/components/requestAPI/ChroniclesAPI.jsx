import { useEffect } from "react";
import { useState } from 'react'

export function ChroniclesAPI() {
  // const URL = 'http://localhost:5000/chronicle/';
  const URL = 'https://telperion-2021.web.app/chronicles/' ;
  const [eldarId, updateEldarId] = useState(null)

  useEffect(() => {
    const chroniclesRequest = async () => {
      try {
        const response = await fetch(`${URL}${eldarId ? eldarId : ''}`);
        const jsonRes = await response.json();
        console.log(jsonRes);
      } catch {
        console.error();
      }
    }
    chroniclesRequest();
  }, [eldarId]);

  return (
    <div>
      <div>Chronicles Request</div>
      <button onClick={() => updateEldarId(eldarId + 1)}> Chapter + 1 </button>
      <button onClick={() => updateEldarId(eldarId - 1)}> Chapter - 1 </button>
      <div>le chapitre: {eldarId}</div>
    </div>
  ) ;
}