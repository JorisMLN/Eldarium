import { useEffect } from "react";

export function ChroniclesAPI() {
  const URL = 'http://loacalhost:5000/Chronicles';

  useEffect(() => {
    async function chroniclesRequest(){
      try {
        const response = await fetch(URL);
        const jsonRes = await response.json();
        console.log(jsonRes);
      } catch {
        console.log(err);
      }
    }
    chroniclesRequest();
  });

  return (
      <div>Chronicles Request</div>
  ) ;
}