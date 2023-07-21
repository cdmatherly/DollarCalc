const NumPad = (props) => {
    const { set, num, setShow } = props

    const handleSet = (newNum) => {
        if (num == 0){
            set(newNum)
        } else {
        set(num.concat(newNum));
        }
    }

    return (
        <div className="mx-auto grid grid-cols-3 grid-rows-3">
            <p onClick={() => handleSet('1') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">1</p>
            <p onClick={() => handleSet('2') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">2</p>
            <p onClick={() => handleSet('3') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">3</p>
            <p onClick={() => handleSet('4') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">4</p>
            <p onClick={() => handleSet('5') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">5</p>
            <p onClick={() => handleSet('6') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">6</p>
            <p onClick={() => handleSet('7') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">7</p>
            <p onClick={() => handleSet('8') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">8</p>
            <p onClick={() => handleSet('9') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">9</p>
            <p onClick={() => set(0)} className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">Clear</p>
            <p onClick={() => handleSet('0') } className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">0</p>
            <p onClick={() => setShow(false)} className="p-10 bg-gray-300 border border-gray-500 hover:scale-95">v</p>
        </div>
    )
}
export default NumPad