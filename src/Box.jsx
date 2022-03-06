import { useState } from "react";
import "./Box.css";

function Box() {
   const [lightened, setLightened] = useState(false);

   return (
      <div
         className={`box ${lightened ? "light" : ""}`}
         onClick={() =>
            setInterval(() => {
               console.log("running");
               setLightened((currentLight) => !currentLight);
            }, 2000)
         }
      />
   );
}

export default Box;
