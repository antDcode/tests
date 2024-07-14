import {data} from "./useDataID.jsx"
import useChoiceVariants from "./useChoiseVariants.jsx";

export default function ShowTest({ID,setID,randomID}) {
    console.log("Show Test")
    const currentTest=data[data.findIndex(obj=>obj.id===ID)]
    const newVariants=useChoiceVariants(currentTest.variant,currentTest.answer)
    return(
        <>
            <div className="id">
                ID Test - {currentTest.id}
            </div>
            <div className="questions">
                {currentTest.question}
            </div>

            <div className="variants">
                {newVariants.map((variant,index)=>(
                    <button key={index} onClick={
                        ()=>(setID(randomID()))
                    }>{variant}</button>
                ))}
            </div>
        </>
    )
}