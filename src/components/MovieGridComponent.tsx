import type {MovieItem} from "@/types/types.ts";
import MovieCard from "@/components/MovieCard.tsx";
import {useStore} from "@nanostores/react";
import {apiLink, page} from "@/store/movieStore.ts";
import {useEffect, useState} from "react";


export default function MovieGridComponent() {
    const $page = useStore(page)
    const $apiLink = useStore(apiLink)
    const [items, setItems] = useState<MovieItem[]>([])

    useEffect(() => {
        console.log($apiLink)
        fetch(`https://phim.nguonc.com/${$apiLink}?page=${$page}`)
            .then((res) => res.json())
            .then((data: any) => {
                setItems(data.items)
            })
    }, [$apiLink, $page])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map((item: MovieItem, index:number) => (
                <MovieCard item={item} index={index}/>
            ))}
        </div>
    )
}