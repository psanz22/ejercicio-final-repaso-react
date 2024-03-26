function FilterByGender({ onChangeGender, valueGender }) {
  const handleChange = (ev) => {
    onChangeGender(ev.target.value);
  };
  return (
    <div>
      <label> Género </label>
      <label htmlFor="female"> Mujer </label>
      <input
        type="radio"
        value="female"
        name="gender"
        id="female"
        onChange={handleChange}
        checked={valueGender === "female"}
      />
      <label htmlFor="male"> Hombre </label>
      <input
        type="radio"
        value="male"
        name="gender"
        id="male"
        onChange={handleChange}
        checked={valueGender === "male"}
      />
    </div>
  );
}

export default FilterByGender;
