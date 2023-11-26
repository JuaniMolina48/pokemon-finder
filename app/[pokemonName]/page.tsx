import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PokemonType from "@/components/pokemon-type";
import {obtenerBackgroundColor} from "@/lib/pokemonAPI";





export default async function PokemonPage({ params } : {params: { pokemonName: string }}) {
    const {pokemonName} = params;

    const pokemonObject = await getPokemon(pokemonName);
    const pokemonColor =  obtenerBackgroundColor(pokemonObject.types[0].type.name);
    
    return (
        <Card className="lg:max-w-md w-full" >
            <CardHeader className="text-4xl text-bold pt-4 text-center" style={{backgroundColor: pokemonColor}}>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} </CardHeader>
            <CardContent className="flex flex-col justify-center">
            <div className="m-0 w-full" style ={{position: 'sticky', width: '400px', height: '400px' }}   >
                <PokemonImage 
                    image ={pokemonObject.sprites.other['official-artwork'].front_default}
                    name = {pokemonName}   
                    key = {pokemonName + "Image"} />                  
            </div>
                    

            <div className="flex flex-wrap	 w-full justify-center ">
            {pokemonObject.types.map((typeObject : any) => {
            const typeName = typeObject.type.name;
            return (
                <PokemonType type={typeName} key={typeName + "Type"}/>)})}
            </div>
            
            <div className="flex-col">
                {pokemonObject.stats.map((statObject : any) => {
                    const statName = statObject.stat.name;
                    const statValue = statObject.base_stat;

                    return (
                        <div className="flex items-stretch" style={{width: 'auto'}} key={statName}>
                            <h3 className="p-3 w-2/4">{statName}: {statValue}</h3>
                            <Progress className="w-2/4 m-auto" value={statValue}/>
                        </div>
                        )
                })}
            </div>
            </CardContent>
            
            
        </Card>


    )
}