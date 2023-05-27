import { useState } from "react";
import { mycontext } from "../context";
import Cockitems from "./cockitems";
import { useContext } from "react";
function CocktailBody() {
    const {cocktailsArray} = useContext(mycontext)
    const [value,setvalue] = useState("")
    return (
        <div className="cocktailbody">
            <div className="cont-search">
                <h2>Search Your Favorite CockTail</h2>
                <input onChange={(e)=>{setvalue(e.target.value)}} type="text" placeholder="Search here..."/>
            </div>
            <div className="cont-body">
                <h1>CockTails</h1>
                <div className="cont-grid">
                   {cocktailsArray.filter((item)=>{
                        if(value === ""){
                            return item
                        }
                        else{
                            return item.strDrink.includes(value)
                        }
                   }).map((item)=>{
                        return <Cockitems 
                        key={item.idDrink}
                        {...item}/>
                   })}
                </div>
            </div>
        </div>
      );
}

export default CocktailBody;