import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';
import Character from './components/Character';
import Pokemon from './components/Pokemon';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const rickChar = useFetchCharacters(urlRick);
  const pokeChar = useFetchCharacters(urlPokemon);

  return (
    <>
      <Character props={rickChar.character} />
      <Pokemon props={pokeChar.character} />
    </>
  );
}

export default App;
