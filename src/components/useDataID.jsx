import data from "../data.json";

let dataID= data.map(item=>item.id);
let setDataID=(ID)=>{
    dataID=dataID.filter(p=>p!==ID)
}

export {dataID,setDataID,data};