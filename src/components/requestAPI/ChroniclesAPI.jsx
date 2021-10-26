import { useEffect } from "react";
import { useState } from 'react'

export function ChroniclesAPI() {
  const URL = 'http://localhost:5000/chronicle/';
  const [box, updateBox] = useState(0)

  useEffect(() => {
    const chroniclesRequest = async () => {
      try {
        const response = await fetch(URL + box);
        const jsonRes = await response.json();
        console.log(jsonRes);
      } catch {
        console.error();
      }
    }
    chroniclesRequest();
  }, [box]);

  return (
    <div>
      <div>Chronicles Request</div>
      <button onClick={() => updateBox(box + 1)}> Chapter + 1 </button>
      <button onClick={() => updateBox(box - 1)}> Chapter - 1 </button>
      <div>le chapitre: {box}</div>
    </div>
  ) ;
}