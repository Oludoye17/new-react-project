import PropTypes from 'prop-types';
const Greetings = ({ personData, handleAlert }) => {
  console.log(typeof handleAlert);
  return (
    <h1 className="bg-purple-600 p-4 text-center text-lg text-shadow">
      Hello, world! My name {personData?.name} and i am {personData?.age} years
      old
      <button className="bg-blue-500 text-white p-2 rounded font-bold"  onClick={() => handleAlert(personData?.name)}>alert</button>
    </h1>
  );
};
Greetings.PropTypes={}

export default Greetings;
