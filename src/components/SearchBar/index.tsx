import { Search, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface searchBarProps {
  isLoading: boolean,
  sendPokemonName: any
}
 
const SearchBar = ({isLoading, sendPokemonName}: searchBarProps) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleClick = () => {
    sendPokemonName(pokemonName)
  }

  const handleKeyPress = (event: { charCode?: number; keyCode?: number }) => {
    if (event.charCode == 13 || event.keyCode == 13) {
      handleClick();
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input 
        value={pokemonName}
        onChange={(event) => setPokemonName(event.target.value.toLowerCase())}
        onKeyDown={handleKeyPress}
        disabled={isLoading} 
        type="text" 
        placeholder="search"
      />
      <Button disabled={isLoading} type="submit" onClick={handleClick} >
        {!isLoading ? <Search /> : <LoaderCircle className="animate-spin"/>}
      </Button>
    </div>
  )
}

export default SearchBar

