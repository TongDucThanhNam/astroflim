import {Select, SelectItem} from "@nextui-org/select";
import {danhMuc, namPhatHanh, quocGia, theLoai} from "@/config/site.ts";
import {useRef} from "react";
import { useStore } from '@nanostores/react';
import { page, apiLink, currentSelected } from '@/store/movieStore';

export default function SelectSection() {
    const MovieRef = useRef(null)

    const $page = useStore(page)
    const $apiLink = useStore(apiLink)
    const $currentSelected = useStore(currentSelected)


    //MovieRef function
    const handleScroll = () => {
        //scroll to MovieRef
        if (MovieRef.current) {
            setTimeout(() => {
                // @ts-ignore
                MovieRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
            }, 100) // Small delay to ensure the video has rendered
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
                size="sm"
                label="Thể loại"
                className="max-w-full"
                onSelectionChange={(value) => {
                    const item = theLoai.find((item) => item.typeName === value.currentKey)
                    if (item) {
                        // setApiLink(item.apiLink)
                        // setCurrentSelected(item.typeName)
                        // setCurrentPage(1)
                        apiLink.set(item.apiLink)
                        currentSelected.set(item.typeName)
                        page.set(1)
                        handleScroll()
                    }
                }}
            >
                {theLoai.map((item) => (
                    <SelectItem key={item.typeName} value={item.typeName}>
                        {item.typeName}
                    </SelectItem>
                ))}
            </Select>

            <Select
                size="sm"
                label="Danh mục"
                className="max-w-full"
                onSelectionChange={(value) => {
                    const item = danhMuc.find((item) => item.danhMucName === value.currentKey)
                    if (item) {
                        apiLink.set(item.apiLink)
                        currentSelected.set(item.danhMucName)
                        page.set(1)

                        //move to the top of the movie
                        handleScroll()
                    }
                }}
            >
                {danhMuc.map((item) => (
                    <SelectItem key={item.danhMucName} value={item.danhMucName}>
                        {item.danhMucName}
                    </SelectItem>
                ))}
            </Select>

            <Select
                size="sm"
                label="Quốc gia"
                className="max-w-full"
                onSelectionChange={(value) => {
                    const item = quocGia.find((item) => item.quocGiaName === value.currentKey)
                    if (item) {
                        apiLink.set(item.apiLink)
                        currentSelected.set(item.quocGiaName)
                        page.set(1)
                        handleScroll()

                    }
                }}
            >
                {quocGia.map((item) => (
                    <SelectItem key={item.quocGiaName} value={item.quocGiaName}>
                        {item.quocGiaName}
                    </SelectItem>
                ))}
            </Select>

            <Select
                size="sm"
                label="Năm phát hành"
                className="max-w-full"
                onSelectionChange={(value) => {
                    const item = namPhatHanh.find((item) => item.namPhatHanhName === value.currentKey)
                    if (item) {
                        apiLink.set(item.apiLink)
                        currentSelected.set(item.namPhatHanhName)
                        page.set(1)
                        handleScroll()
                    }
                }}
            >
                {namPhatHanh.map((item) => (
                    <SelectItem key={item.namPhatHanhName} value={item.namPhatHanhName}>
                        {item.namPhatHanhName}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}