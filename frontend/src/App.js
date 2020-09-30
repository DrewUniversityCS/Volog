import React from 'react';
import {render} from "react-dom";
import PrototypeDashboard from "./pages/PrototypeDashboard";
import NavBar from "./components/navbar/NavBar";

const App = () => {

    return (
        <div>
            <NavBar />

            <PrototypeDashboard />
        </div>
    )
};



const container = document.getElementById("app");
render(<App/>, container);

export default App;