import { Header } from './components/Header'
import { ListaPersonajes } from './components/ListaPersonajes'
import './App.css'

function App() {

  const url = 'https://thesimpsonsapi.com/api/characters';

  return (
    <>
      <Header />
      <ListaPersonajes url={url}/>
    </>
  )
}

export default App
