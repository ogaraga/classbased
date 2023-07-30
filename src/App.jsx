import React from "react";
import './App.css';
class App extends React.Component {

  state = {
    name: "",
    bio: "",
    profession: "",
    imgsrc: '',
  
  };


 handleClick=()=>this.setState({  name: "NAME: Raymond Ogaraga",
 bio: "BIODATA: Mr Raymond is a student of Gomycode. He is in group wizard. Wizard group is headed by mr Daniel, a wizard in backend and frontend engineering! ",
 profession: "PROFESSION: Software Developer(full-stack)",
 imgsrc: "",
});

timer = setInterval(() => {
  this.state;
}, 1000);

  render() {
    return(
      <div className = "App">
         <img src = "/src/pix6.jpeg" alt = "raypic" width = "50" height ="50" />
           <p>{this.state.name}</p>
           <p>{this.state.bio}</p>
           <p>{this.state.profession}</p>
      <button type="button" onClick={this.handleClick}>Show</button>
      <p style={{color: "blue"}}>Timer: {this.timer}</p>
    </div>
    )
  }


 
 }
 export default App;
 
