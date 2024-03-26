function FilterByCity({ cities, onChangeCity }) {
  const handleChange = (event) => {
    onChangeCity(event.target.value);
  };
  return (
    <div>
      <h4>Filtra por ciudad</h4>
      {cities.map((city, index) => {
        return (
          <label htmlFor={city} key={index}>
            {city}
            <input
              id={city}
              type="checkbox"
              value={city}
              onChange={handleChange}
            />
          </label>
        );
      })}
    </div>
  );
}

export default FilterByCity;
