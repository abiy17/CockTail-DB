import { Link } from "react-router-dom";

function CocktailsNav() {
    return ( 
        <div className="cocktails-nav">
            <h2>The CockTail DB</h2>
            <ul>
                <li><Link id="about-link" to="about">About</Link></li>
            </ul>
        </div>
     );
}

export default CocktailsNav;