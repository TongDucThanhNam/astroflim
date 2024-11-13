import {Card, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import type {MovieItem} from "@/types/types.ts";

interface MovieProps {
    item: MovieItem
    isLoading?: boolean
    index: number
}

export default function MovieCard(
    {item, index, isLoading}: MovieProps
) {
    return (
        <Card
            as={"a"}
            href={`/phim/${item.slug}`}
            isPressable
            key={item.slug}
            isFooterBlurred
            radius="lg"
            className="border-none h-[500px] w-[333px] sm:h-[400px] sm:w-[267px] md:h-[350px] md:w-[233px] lg:h-[300px] lg:w-[200px]"
        >
            <div className="relative w-full h-full">
                {isLoading ? (
                    <img
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "low"}
                        src={"/loading.webp"}
                        alt={"loading"}
                        className="w-full h-full object-cover"/>
                ) : (
                    <Image
                        loading={index === 0 ? "eager" : "lazy"}
                        src={`//wsrv.nl/?url=${item.thumb_url}&w=200&h=300&output=webp`}
                        removeWrapper={true}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        fallbackSrc={"/loading.webp"}
                    />
                )}

            </div>
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full">
                <div className="flex flex-grow gap-2 items-center w-full">
                    <div className="flex flex-col items-center w-full">
                        <p className="text-center text-xs font-bold text-white">{item.name}</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}