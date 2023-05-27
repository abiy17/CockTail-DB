import { useContext } from "react";
import CocktailFooter from "../components/cocktailFooter";
import CocktailBody from "../components/cocktailbody";
import CocktailsNav from "../components/cocktailsNav";
import { mycontext } from "../context";
import Loading from "../components/Loading";
function Home() {
    const{loading} = useContext(mycontext)
    return ( 
        <div className="home">
            <CocktailsNav />
            {loading ? <Loading /> : <CocktailBody />}
            <CocktailFooter />
        </div>
     );
}

export default Home;