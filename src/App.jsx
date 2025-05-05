// import "./style.css";
// import Image from "./assets/heaven.webp";
// import Greetings from "./components/Greetings"; //default export
// import { Card, Card2 } from "./components/card"; //named export

// const App = () => {
//   const firstname = "Gunna";

//   const people = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 28,
//       occupation: "Software Engineer",
//       city: "San Francisco",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 32,
//       occupation: "Product Manager",
//       city: "New York",
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       age: 25,
//       occupation: "UX Designer",
//       city: "Seattle",
//     },
//     {
//       id: 4,
//       name: "Sarah Williams",
//       age: 30,
//       occupation: "Data Scientist",
//       city: "Boston",
//     },
//     {
//       id: 5,
//       name: "Alex Brown",
//       age: 35,
//       occupation: "Marketing Director",
//       city: "Chicago",
//     },
//   ];

//   const handleAlert = (name) => {
//     alert(`Hello ${name}`);
//   };

//   return (
//     <div className="text h-screen w-screen bg-black flex flex-col justify-center items-centergap-5">
//       <p>hello {firstname}</p>
//       <img style={{ height: 100, width:100 }} src={Image} alt="" />
//       <Card />
//       <Card2 />

//       <div className="flex flex-col gap-5 justify-center items-center ">
//         {people.map((person) => (
//           <Greetings
//             key={person?.id}
//             personData={person}
//             handleAlert={handleAlert}
//           />
//         ))}
//         <div>
//           <Wrapper>
            
//           </Wrapper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import Welcome from './components/Welcome';
import WelcomeHook from './components/WelcomeHook';
import Counter from './components/counter';
import UseEffects from './components/UseEffects';
import Countries from './components/Countries';


const App = () => {
  return (
    <div className='text h-screen w-screen bg-gray-500 flex flex-col justify-center items-center gap-5'>
      <Welcome/>
      <hr />
      <WelcomeHook/>
      <hr />
      <Counter/>
      <hr />
      <UseEffects/>
      <hr />
      <Countries/>
    </div>
    
  );
};

export default App;
