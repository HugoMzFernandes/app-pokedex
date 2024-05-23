import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

const PokemonDetailLoading = () => {
  return (
    <div className={cn("w-[380px]", "loading" )}>
      <div className="px-4 py-4">
        <Skeleton className="w-[346px] h-[123px] rounded-xl" />
        <div className="w-full grid-rows-2 mt-4">
          <Skeleton className="h-20" />
        </div>
        <div className="w-full grid-rows-6 mt-4">
          <Skeleton className="h-40" />
        </div>
      </div>
    </div>
  )
} 

export default PokemonDetailLoading