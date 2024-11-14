import type {MovieItem} from "@/types/types.ts";
import MovieCard from "@/components/MovieCard.tsx";

interface MovieGridComponentProps {
    items: MovieItem[]
}

export default function MovieGridComponent(
    {items}: MovieGridComponentProps
) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map((item: MovieItem, index:number) => (
                <MovieCard item={item} index={index}/>
            ))}
        </div>
    )
}