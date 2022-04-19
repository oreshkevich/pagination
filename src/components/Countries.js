import React from 'react';

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="list-group mb-2">
      {countries.map((country, i) => (
        <li key={i} className="list-group-item">
          {country.name.common}
          <img
            src={country.flags.png}
            alt="flag"
            className="ml-2"
            style={{ width: 25 }}
          />
        </li>
      ))}
    </div>
  );
};

export default Countries;
