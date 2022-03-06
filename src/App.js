import React, { Component } from "react";
import "./App.css";
import Box from "./Box.jsx";

class App extends Component {
   state = {
      numberOfBoxes: 0,
   };
   inputRef = React.createRef();

   onCreate = () => {
      this.setState({
         numberOfBoxes: this.inputRef.current.valueAsNumber,
      });
   };

   componentDidMount() {
      console.log("component created");
   }

   componentDidUpdate() {
      console.log("component updated");
   }

   render() {
      return (
         <div>
            <div>
               <input type="number" ref={this.inputRef} />
               <button onClick={this.onCreate}>create</button>
            </div>

            {[...Array(this.state.numberOfBoxes)].map((_, i) => (
               <Box key={i} />
            ))}
         </div>
      );
   }
}

export default App;
