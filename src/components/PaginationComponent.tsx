import {Pagination} from "@nextui-org/pagination";

interface PaginationComponentProps {
    page: number
}

export default function PaginationComponent({page}: PaginationComponentProps) {
    function handlePagination(page: any) {
        // Lấy URL hiện tại
        const currentUrl = new URL(window.location.href)

        // Thêm hoặc cập nhật query parameter
        currentUrl.searchParams.set("page", page)

        // Cập nhật URL mà không reload trang
        window.history.pushState({}, '', currentUrl)

        //reload trang

        window.location.href = currentUrl.toString()
    }

    return (
        <div className={"flex flex-col items-center"}>
            <Pagination
                page={page}
                total={100}
                onChange={(newPage) => {
                    handlePagination(newPage)
                }}
            />
        </div>
    )
}