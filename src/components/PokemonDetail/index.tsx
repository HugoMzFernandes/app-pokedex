import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Pokemon } from "@/types/pokemon"

const PokemonDetail = ({name, id, type, stats, imageUrl}: Pokemon) => {
  return (  
    <Card className={cn("w-[380px]")}>
      <CardHeader className="grid grid-cols-1 gap-4 px-4 py-4">
        <div className="w-[346px] h-[123px] flex items-center justify-center m bg-gray-200 rounded-xl overflow-hidden shadow-lg">
          <img
            className="w-36 h-36 object-fill"
            src={`${imageUrl}`}
          />
        </div>
        <div className="w-full grid-rows-2">
          <CardTitle className="h-10 flex items-center justify-center text-xl font-bold tracking-tight lg:text-2xl">
            #{id} - <span className="capitalize">&nbsp;{name}</span>
          </CardTitle>
          <CardDescription className="h-10 flex items-center justify-center gap-4">
            { type.map((type) => (
              <Badge key={type.typeName} className="w-1/2 inline-flex items-center justify-center" variant="secondary">{type.typeName}</Badge>
            ))}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full sm:grid-cols-4 grid grid-cols-2 gap-4 py-2">
        { stats.map((stat) => (
          <Card key={stat.name} className="w-full rounded-md col-span-2">
            <CardHeader className="p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {stat.name}
                </span>
                <Badge key={stat.name} variant={"secondary"} className="text-sm">
                  {stat.baseStat}
                </Badge>
              </div>
            </CardHeader>
            <CardDescription className="space-y-3">
              <div className="w-full h-2 bg-gray-200 rounded-r-none rounded-l-none">
                <div
                  className={"h-2 bg-green-400 rounded-r-sm rounded-l-sm justify-left"}
                  style={{
                    width: `${stat.baseStat > 100 ? 100 : stat.baseStat}%`,
                  }}
                  
                />
              </div>
            </CardDescription>
          </Card>
        )) }
      </CardContent>
    </Card>
  )
}

export default PokemonDetail