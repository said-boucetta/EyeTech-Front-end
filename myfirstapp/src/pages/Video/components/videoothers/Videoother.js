import React from 'react';
import "./Videoother.css";
import { Link, useRouteMatch } from "react-router-dom";

export default function Videoother() {
    let { url } = useRouteMatch();
    return (
<div className="videoothers">

    <div className ="videolevels" >

        <div className="videolevel1"> 
            <Link to={`${url}level`} > <h1>Niveau 1</h1>  </Link>
        </div>

        <div className="videolevel2">
        <Link to={`${url}level2`} > <h1>Niveau 2</h1>  </Link>
        </div>

        <div className="videolevel3">
        <h1>Niveau 3</h1> 
        </div>
</div>

        <div className="videotitlevideo">
            <h2>Titre Video :</h2>
        </div>

        <div className="videocontainervideo">
            <h2>Video</h2>
        </div>

</div>
    )
};
