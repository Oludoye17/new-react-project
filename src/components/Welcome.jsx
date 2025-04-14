import React from "react";

class Welcome extends React.Component {
  state = {
    name: "Sara!",
    age: 27,
    occupation: "field enginer",
    address: "74 ikeja, lagos",
    hobbies: ["reading", "gaming"],
  };


 changeName =() =>{
    return this.setState({name: "olumide"})
}


  render() {
    return (
      <h1>
        hello {this.state.name} you are {this.state.age} year old. you work as a 
         {this.state.occupation}. your address is {this.state.address} your
        hobbies include{this.state.hobbies.join(", ")}.
        <button onClick={this.changeName} className="bg-amber-900 rounded-2xl p-2 font-bold">change name</button>
      </h1>
      
    );
  }
}
export default Welcome;
// import React from "react";
