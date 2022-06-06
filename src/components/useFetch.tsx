import { useState, useEffect } from "react";


const useFetch = (url:string) =>{
    const [data, setdata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      fetch(url)
        .then(res =>{
          if(!res.ok){
            throw Error ('Some thing wrong happend !!!')
          }
          return res.json();
        })
        .then(data =>{
          setIsLoading(false);
          setdata(data);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        })
    },[url])

    
    
    return {data, isLoading, error}
};

export default useFetch;