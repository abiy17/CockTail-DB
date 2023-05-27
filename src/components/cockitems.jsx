import { useContext } from "react";
import { Link } from "react-router-dom";
import { mycontext } from "../context";
function Cockitems({strDrink,strDrinkThumb,strAlcoholic,strCategory,idDrink}) {
    const {cocktailsArray,loading,newArray,setnewarray} = useContext(mycontext)
    const HandleClick=(ID)=>{
        let FilterdArray = cocktailsArray.filter(item=>item.idDrink === ID)
        setnewarray(FilterdArray)
    }
    return (
        <div className="cockitems">
            <img src={strDrinkThumb} alt="" />
            <h3>{strDrink}</h3>
            <p>{strAlcoholic}</p>
            <p>Catagorie: {strCategory}</p>
            <li onClick={()=>HandleClick(idDrink)}><Link id="link" to="/detailpage">Details</Link></li>
        </div>
      );
}

export default Cockitems;
