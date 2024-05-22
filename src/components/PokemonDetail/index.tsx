import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import PokemonDetailLoading from "./loading"

const PokemonDetail = () => {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader className="grid grid-cols-1 gap-4 px-4 py-4">
        <div className="w-[346px] h-[123px] flex items-center justify-center m bg-gray-200 rounded-xl overflow-hidden shadow-lg">
          <img
            className="w-36 h-36 object-fill"
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
          />
        </div>
        <div className="w-full grid-rows-2">
          <CardTitle className="h-10 flex items-center justify-center text-xl font-bold tracking-tight lg:text-2xl">
            #93 Haunter
          </CardTitle>
          <CardDescription className="h-10 flex items-center justify-center gap-4">
            <Badge className="w-1/2 inline-flex items-center justify-center" variant="secondary">Ghost</Badge>
            <Badge className="w-1/2 inline-flex items-center justify-center" variant="secondary">Poison</Badge>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full sm:grid-cols-4 grid grid-cols-2 gap-4 py-2">
        <Card
          className="w-full rounded-md col-span-2"
        >
          <CardHeader className="p-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                HP
              </span>

              <Badge variant={"secondary"} className="text-sm">
                60
              </Badge>
            </div>
          </CardHeader>
          <CardDescription className="space-y-3">
            <div className="w-full h-2 bg-gray-200 rounded-r-none rounded-l-none">
              <div
                className={"h-2 bg-green-400 rounded-r-sm rounded-l-sm justify-left"}
                style={{
                  width: "60%",
                }}
              />
            </div>
          </CardDescription>
        </Card>
        <Card
          className="w-full rounded-md col-span-2"
        >
          <CardHeader className="p-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Attack
              </span>

              <Badge variant={"secondary"} className="text-sm">
                80
              </Badge>
            </div>
          </CardHeader>
          <CardDescription className="space-y-3">
            <div className="w-full h-2 bg-gray-200 rounded-r-none rounded-l-none">
              <div
                className={"h-2 bg-green-400 rounded-r-sm rounded-l-sm justify-left"}
                style={{
                  width: "80%",
                }}
              />
            </div>
          </CardDescription>
        </Card>
      </CardContent>
    </Card>
  )
}

export default PokemonDetail