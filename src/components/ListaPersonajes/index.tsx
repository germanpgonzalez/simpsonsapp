import { Personaje } from "../Personaje"
import { useFetch } from "../../hooks/useFetch"

interface ListaPersonajesProps {
    url: string;
}

export const ListaPersonajes = (url : ListaPersonajesProps) => {
    const data = useFetch(url);
    console.log("Desde ListaPersonajes: " + data);

  return (
      <>
        <div>Lista Personajes</div>
        <Personaje />
      </>
  )
}
