import SearchBar from "@/components/SearchBar"
import PokemonDetail from "@/components/PokemonDetail"
import Feedback from "@/components/Feedback"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <header className="w-[24rem]">
        <SearchBar />
      </header>
      <main>
        <Feedback text={"Type pokemon's name and click enter to search."} icon={"arrow-up"} />
        <PokemonDetail />
      </main>
    </div>
  )
}

export default Home