import { Pagination } from "react-bootstrap"
import React, { useState, useEffect } from "react"

export default function ({ pageSize, onChange, current, total }) {

    const [item, setItem] = useState([])
    const pageNumbers = Math.ceil(total / pageSize)

    useEffect(() => {
        function loadPage() {
            let newItem = []
            if(current=1 && pageNumbers>=6){ // start 3
                return setItem([1,2,3])
            }
            if(current=1 && pageNumbers<6){ // start 5
                for (let i = 1; i <= pageNumbers; i++) {  i >= 1 && newItem.push(i) }
                return setItem(newItem)
            }
            if(current+4>=pageNumbers){
                if(item[0] == current || item[2] == current) {
                    for (let i = current-1; i <= current+1; i++) {  i >= 1 && newItem.push(i) }
                    return setItem(newItem)
                }
            }
            if(current+3<=pageNumbers){ // end 5
                for (let i = current - 1; i <= pageNumbers; i++) {  i >= 1 && newItem.push(i) }
                return setItem(newItem)
            }
           /*  if (item.length == 0 && pageNumbers > 5 || current == 1) {
                console.log('1')
                current < pageNumbers && newItem.push(current)
                current + 1 < pageNumbers && newItem.push(current + 1)
                current + 2 < pageNumbers && newItem.push(current + 2)
                return setItem(newItem)
            }
            if (pageNumbers > 5 && item[0] == current || item.at(-1) == current && item[0] + 3 < pageNumbers) { // 3 so
                console.log('2')
                for (let i = current - 1; i <= pageNumbers; i++) {
                    i >= 1 && newItem.push(i)
                    if (newItem.length == 3) {
                        return setItem(newItem)
                    }
                }
            }
            if (pageNumbers > 5 && current <= pageNumbers - 4 && current != 1) {
                console.log('3')
                current < pageNumbers && newItem.push(current)
                current + 1 < pageNumbers && newItem.push(current + 1)
                current + 2 < pageNumbers && newItem.push(current + 2)
                current + 3 < pageNumbers && newItem.push(current + 3)
                current + 4 <= pageNumbers && newItem.push(current + 4)
                return setItem(newItem)
            } else if(!(item[0] + 4==pageNumbers)) {
                console.log('4')
                current < pageNumbers && newItem.push(current)
                current + 1 < pageNumbers && newItem.push(current + 1)
                current + 2 < pageNumbers && newItem.push(current + 2)
                current + 3 < pageNumbers && newItem.push(current + 3)
                current + 4 <= pageNumbers && newItem.push(current + 4)
                return setItem(newItem)
            } */
        }
        loadPage()
    }, [current])

    return (
        <Pagination size="sm">
            <Pagination.Prev onClick={() => onChange(current - 1)} disabled={current <= 1}>Previous</Pagination.Prev>
            {item.map((value, index) =>
                <Pagination.Item
                    key={index}
                    onClick={(e) => onChange(value)}
                    active={value === current}>
                    {value}</Pagination.Item>
            )}
            {pageNumbers > 5 && item[0] + 4 < pageNumbers &&
                <>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={(e) => onChange(pageNumbers)} >{pageNumbers}</Pagination.Item>
                </>
            }
            <Pagination.Next onClick={() => onChange(current + 1)} disabled={pageNumbers <= current}>Next</Pagination.Next>
        </Pagination>
    )
}