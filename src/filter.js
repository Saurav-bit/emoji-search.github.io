import ls from "./List.js";

const filter=(txt)=>{
    return ls.filter(para =>{
        if(para.keywords.toLowerCase().includes(txt.toLowerCase()))
        {
            return true;
        }

        return false;
    }).slice(0,20)

}

export default filter;