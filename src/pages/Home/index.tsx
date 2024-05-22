import { useGetPokemonByName } from "@/lib/utils"
import { Pokemon } from "@/types/pokemon"
import { PokemonApiResponse } from "@/types/pokemonApiResponse"

import SearchBar from "@/components/SearchBar"
import PokemonDetail from "@/components/PokemonDetail"
import PokemonDetailLoading from "@/components/PokemonDetail/loading"
import Feedback from "@/components/Feedback"
import { useState } from "react"

const Home = () => {
  const [pokemonName, setPokemonName] = useState("")
  const handlePokemonName = (name: string) => {
    setPokemonName(name)
  }
  const { data, isLoading, error } = useGetPokemonByName<PokemonApiResponse<Pokemon>>(pokemonName)
  const showFeedback = (!data && !isLoading)
  const feedbackProps = {
    text: !error ? "Type pokemon's name and click enter to search." : "No result found",
    icon: !error ? "arrow-up" : "frown"
  }
  
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-8 ml-4 mb-6">
          Pokedex
        </h1>
      <div className="flex flex-col items-center justify-center h-auto">
        <header className="w-[24rem]">
          <SearchBar isLoading={isLoading} sendPokemonName={handlePokemonName}/>
        </header>
        <main>
          {showFeedback && 
            <Feedback text={feedbackProps.text} icon={feedbackProps.icon} />
          }
          {isLoading &&
            <PokemonDetailLoading />
          }
          {data && 
            <div className="mt-6">
              <PokemonDetail 
                name={data?.data?.name} 
                id={data?.data?.id} type={data?.data?.type} 
                stats={data?.data?.stats} 
                imageUrl={data?.data?.imageUrl} 
              />
            </div>
          }
        </main>
      </div>
    </>
  )
}

export default Home