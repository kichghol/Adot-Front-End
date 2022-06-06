import { useState, useEffect } from "react";


const useLocalStorage = () => {
    const [save, setSave] = useState(
        JSON.parse(localStorage.getItem('save')||'[]' )|| []);
    
        useEffect(() => {
            localStorage.setItem('save', JSON.stringify(save));
          }, [save]);

          return [save,setSave]
}

export default useLocalStorage;