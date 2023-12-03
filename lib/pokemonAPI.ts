
const POKEMON_API = "https://pokeapi.co/api/v2/";


export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=1293&offset=0")
    const data = await response.json();
    return data.results;
}

export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json();
    return data;
}

export function obtenerBackgroundColor(type: string): string {
    const typeColors: Record<string, string> = {
      /*fire: 'orange',
      water: 'blue',
      grass: 'green',
      ground: 'brown',
      flying: 'DodgerBlue',*/
      normal: '#A8A878',
      fire: '#F08030', 
      water: '#6890F0', 
      electric: '#F8D030', 
      grass: '#78C850',
      ice: '#98D8D8', 
      fighting: '#C03028', 
      poison: '#A040A0',
      ground: '#E0C068', 
      flying: '#A890F0', 
      psychic: '#F85888',
      bug: '#A8B820', 
      rock: '#B8A038',
      ghost: '#705898', 
      dragon: '#7038F8',
      dark: '#705848', 
      steel: '#B8B8D0', 
      fairy: '#EE99AC', 
      // Agrega más tipos según sea necesario
    };
  
    // Establece un color predeterminado si el tipo no coincide
    const backgroundColor: string = typeColors[type] || 'gray';
  
    // Haces algo con el backgroundColor, por ejemplo, lo retornas o lo usas de alguna manera
    return backgroundColor;
  }