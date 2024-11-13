import {
    Carousel,
    CarouselIndicator,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    CarouselThumbsContainer,
    SliderMainItem,
} from "@/components/extension/carousel";
import type {MovieItem} from "@/types/types.ts";
import {Image} from "@nextui-org/image";

interface CarouselIndicatorExampleProps {
    movies: MovieItem[];
}

const CarouselIndicatorExample = (
    {movies}: CarouselIndicatorExampleProps
) => {
    return (
        <Carousel>
            <CarouselNext/>
            <CarouselPrevious/>
            <div className="relative px-2 lg:px-36">
                <CarouselMainContainer className="">
                    {
                        movies.map((movie: MovieItem) => (
                            <SliderMainItem key={movie.slug} className="bg-transparent md:basis-1/2 lg:basis-1/3 my-4">
                                <div
                                    className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                                    <Image
                                        width={356}
                                        height={200}
                                        src={`//wsrv.nl/?url=${movie.poster_url}&w=356&h=200&output=webp`}
                                        alt={movie.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </SliderMainItem>
                        ))
                    }
                </CarouselMainContainer>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <CarouselThumbsContainer className="gap-x-1 ">
                        {
                            movies.map((movie: MovieItem, index: number) => (
                                <CarouselIndicator key={movie.slug} index={index}/>
                            ))
                        }
                    </CarouselThumbsContainer>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselIndicatorExample;