import { useEffect } from "react";

export function ChroniclesAPI() {
  const Id = "2";
  const URL = 'http://localhost:5000/chronicle/';

  useEffect(() => {
    const chroniclesRequest = async () => {
      try {
        const response = await fetch(URL + Id);
        const jsonRes = await response.json();
        console.log(jsonRes);
      } catch {
        console.error();
      }
    }
    chroniclesRequest();
  }, []);

  return (
      <div>Chronicles Request</div>
  ) ;
}