import { useState } from "react"

const Counter = (props) => {
    const {count, setCount} = props

    return (
        <div className={"p-10 "  }>
            <p>{count}</p>
        </div>
    )
}
export default Counter