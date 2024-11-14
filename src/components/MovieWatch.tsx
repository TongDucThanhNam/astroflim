import {Tab, Tabs} from "@nextui-org/tabs";
import type {PhimDetailItem} from "@/types/types.ts";
import {Fragment, useRef, useState} from "react";
import {cn} from "@/lib/utils.ts";
import {RadioGroup} from "@nextui-org/radio";
import SizeRadioItem from "@/components/CustomRadio.tsx";

interface MoviePageProps {
    movie: PhimDetailItem
}

export default function MovieWatch(
    {movie}: MoviePageProps
) {
    const [selectedEpisode, setSelectedEpisode] = useState<string>()
    const videoSectionRef = useRef(null)

    const handleEpisodeChange = (value: string) => {
        setSelectedEpisode(value)

        // Scroll to the video section
        if (videoSectionRef.current) {
            setTimeout(() => {
                // @ts-ignore
                videoSectionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
            }, 100) // Small delay to ensure the video has rendered
        }
    }

    return (
        <Fragment>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Episode">
                    {movie.episodes.map((episode) => (
                        <Tab key={episode.server_name} title={episode.server_name}>
                            <RadioGroup
                                classNames={{
                                    base: cn("", "max-w-fit"),
                                    wrapper: cn("", "gap-3"),
                                }}
                                defaultValue="1"
                                orientation="horizontal"
                                size="lg"
                                value={selectedEpisode}
                                onValueChange={handleEpisodeChange}
                            >
                                {episode.items.map((item, index) => (
                                    <SizeRadioItem key={item.slug} value={item.embed} label={item.name}/>
                                ))}
                            </RadioGroup>
                        </Tab>
                    ))}
                </Tabs>
            </div>

            <div ref={videoSectionRef} className="mt-8">

                {selectedEpisode && (
                    <div className="mt-8">
                        <div className="aspect-video">
                            <iframe
                                src={selectedEpisode}
                                allowFullScreen

                                className="w-full h-full rounded-lg"
                                title={`Xem ${movie.name}}`}
                            />
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
}