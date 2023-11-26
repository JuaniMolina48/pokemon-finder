import React from 'react';
import {obtenerBackgroundColor} from "@/lib/pokemonAPI";



export default function PokemonType({ type }: {type:string}) {
  // Mapea los tipos de Pokémon a colores
 
  return (
    <div style={{ backgroundColor: obtenerBackgroundColor(type), padding: '10px', borderRadius: '5px', margin: '10px', textAlign: 'center' }}>
      <h3>{type.toUpperCase()}</h3>
    </div>
  );
};

