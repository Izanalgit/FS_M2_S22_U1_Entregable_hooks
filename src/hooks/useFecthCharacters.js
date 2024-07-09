import { useState , useEffect } from "react";
import axios from "axios";

const useFetchCharacters = (url) => {
    
    const [character, setCharacter] = useState({});

    const getCharacter = async () => {
        let res;

        try { res = await axios.get(url)}
        catch {console.log}
        
        if(res) setCharacter(res.data);
    }
    
    useEffect(()=>{
        getCharacter();
    },[])


    return {character};

}

export default useFetchCharacters;