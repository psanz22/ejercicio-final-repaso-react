function FilterByName({ onChangeName, valueName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
  };
  return (
    <div>
      <label>Filtra por nombre</label>
      <input type="text" onChange={handleChange} value={valueName} />
    </div>
  );
}

export default FilterByName;
