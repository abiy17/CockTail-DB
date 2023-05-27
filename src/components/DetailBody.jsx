import { useContext } from "react";
import { mycontext } from "../context";

function DetailBody() {
    const {newArray} = useContext(mycontext)
    console.log(newArray)
    return (
        <>
            {newArray.map(item=>{
                return <div className="detailbody">
                <div className="cont-image">
                    <img src={item.strDrinkThumb} alt="" />
                </div>
                <div className="cont">
                    <div className="container">
                        <li>Drink Name: </li><h1>{item.strDrink}</h1>
                    </div>
                    <div className="container">
                        <li>Id: </li><p>{item.idDrink}</p>
                    </div>
                    <div className="container">
                        <li>info: </li><p>{item.strInstructionsIT}</p>
                    </div>
                    <div className="container">
                        <li>Instructions: </li><p>{item.strInstructions}</p>
                    </div>
                    <div className="container">
                        <li>description: </li><p>{item.strInstructionsDE}</p>
                    </div>
                    <div className="container">
                        <li>Glass</li><p>{item.strGlass}</p>
                    </div>
                </div>
            </div>
            })}
        </>
      );
}

export default DetailBody;