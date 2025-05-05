import React, { useEffect, useState } from "react";

const Countries = () => {
  const [Countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);
  return (
    <div>
      Countries
      <h1 className="text-2xl font-bold">Countries</h1>
      <div className="grid grid-cols-3 gap-4">
        {Countries.map((country) => (
          <div key={country.cca3} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{country.name.common}</h2>
            <img
              src={country.flag.png}
              alt={`flag of ${country.name.common}`} 
            />
            <p></p>
            <p></p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
