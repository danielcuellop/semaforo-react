import React, { useState } from "react";

const Home = () => {

    const [light, setLight] = useState(" ");
   
    


    return ( 
		
        <div className="principal">

            <div className="semaforo">

                <div onClick={() => setLight("red")}
                    className={"light red" + ((light === "red")  ? " glow-animation" : " ")}> </div>

                <div onClick={() => setLight("yellow")}
                    className={"light yellow" + ((light === "yellow") ? " glow-animation" : "")}> </div>

                <div onClick={() => setLight("green")}
                    className={"light green" + ((light === "green") ? " glow-animation" : "")}> </div>
                <br></br>

            </div>
        </div>
    );
};
export default Home;
