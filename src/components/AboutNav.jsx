import { Link, useNavigate } from "react-router-dom";

function AboutNav() {
    const Navigate = useNavigate()
    return (
        <div className="aboutnav">
            <h1>About Page</h1>
            <li><Link id="Link" onClick={()=>Navigate(-1)}>Back To Home</Link></li>
        </div>
      );
}

export default AboutNav;