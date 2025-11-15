import { Header } from './components/Header'
import { ListaPersonajes } from './components/ListaPersonajes'
import './App.css'

function App() {
  const url = 'https://rickandmortyapi.com/api/character';

  return (
    <>
      <Header />
      <ListaPersonajes url={url}/>
    </>
  )
}

export default App
