import React from 'react';
import {render} from "react-dom";
import PrototypeDashboard from "./pages/PrototypeDashboard";
import NavBar from "./components/elements/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';

const App = () => {

    return (
        <div className="box">
            <NavBar/>

            <PrototypeDashboard/>
        </div>
    )
};


const container = document.getElementById("app");
render(<App/>, container);