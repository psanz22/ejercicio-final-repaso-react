import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterByCity from "./FilterByCity";

function Filters({
  onChangeName,
  onChangeGender,
  valueName,
  valueGender,
  cities,
  onChangeCity,
}) {
  return (
    <form>
      <h3> Filtros </h3>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
      <FilterByGender
        onChangeGender={onChangeGender}
        valueGender={valueGender}
      />
      <FilterByCity cities={cities} onChangeCity={onChangeCity} />
    </form>
  );
}

export default Filters;
