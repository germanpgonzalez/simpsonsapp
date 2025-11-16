import { useState, useEffect } from "react";

interface FetchProps {
    url: string;
}

interface PersonajeType {
    id: number;
    name: string;
    image: string;
    phrases: string;
    status: string;
}

export const useFetch = ({url}: FetchProps) => {

  const [data, setData] = useState<PersonajeType[]>([]);

  useEffect(() => { 

    const fetchData = async () => {

        try {

            const response = await fetch(url);
            const json = await response.json();

            console.log("JSON recibido:", json);
            
            const filtered = json.results.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    image: item.portrait_path
                    ? `https://thesimpsonsapi.com${item.portrait_path}`
                    : "",
                    phrases: item.phrases?.[0] ?? "Sin frase",
                    status: item.status,
            }});

            setData(filtered);
        } catch (error) {
            console.log("Error en el fetch: ", error);
        }

    };

    fetchData();

 },[url]);



 return data;
}   

