import {Pagination} from "@nextui-org/pagination";
import {page} from "@/store/movieStore.ts";
import {useStore} from "@nanostores/react";

export default function PaginationComponent() {
    const $page = useStore(page)

    return (
        <div className={"flex flex-col items-center"}>
            <Pagination
                page={$page}
                total={100}
                onChange={(newPage) => {
                    page.set(newPage)
                }}
            />
        </div>
    )
}