import { Search, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
const SearchBar = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="search" />
      <Button type="submit">
        <Search />
        {/* <LoaderCircle className="animate-spin"/> */}
      </Button>
    </div>
  )
}

export default SearchBar

