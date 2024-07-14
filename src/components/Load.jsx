import ShowTest from "./ShowTest.jsx";
import {useState} from "preact/hooks";
import {dataID, setDataID} from "./useDataID.jsx";

export default function LoadTest() {
    console.log("Load Test")
    function randomID() {
        const number = Math.floor(Math.random() * dataID.length)
        return dataID[number];
    }
    const [ID, setID] = useState(randomID());
    if (dataID.length) {
        setDataID(ID)
        return (
            <>
                <ShowTest ID={ID} setID={setID} randomID={randomID}/>
            </>
        )
    } else {
        return (
            <>
                Not Found
            </>
        )
    }



}