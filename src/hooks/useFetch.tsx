import { useEffect, useState } from "react"

interface FetchData {
    url: string;
}

export const useFetch = ({url}: FetchData) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data.results);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    },[url])

    

  return data;
}
