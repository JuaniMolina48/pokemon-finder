import { PokemonCard } from '@/components/pokemon-card'
import { PokemonGrid } from '@/components/pokemon-grid'
import Image from 'next/image'
import { getPokemonList } from '@/lib/pokemonAPI'

export default async function Home() {
  // Load the Data
  const pokemonList = await getPokemonList();
   // Text input: filter the pokemon cards under it


  // Pass the Data


  return (
      <PokemonGrid pokemonList={pokemonList}/>
  )
}
