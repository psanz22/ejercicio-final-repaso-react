// ESTO NO ES UN COMPONENTE, ES UNA FUNCIÓN, por eso lo ponemos en CamelCase y no en PascalCase
const getUsersFromAPI = () => {
  // SI AQUÍ QUISIÉSEMOS HACER UN POST HABRÍA QUE AÑADIR , {} y parámetro de POST, al ser get por defecto no hay que añadir nada.
  return fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => {
      const parsedUsers = data.results.map((user) => {
        return {
          id: user.login.uuid,
          name: user.name.first + " " + user.name.last,
          picture: user.picture.medium,
          age: user.dob.age,
          city: user.location.city,
          country: user.location.country,
          gender: user.gender,
        };
      });
      return parsedUsers; // MUY IMPORTANTE ESTE RETURN PARA QUE NOS DEVUELVA EL NUEVO ARRAY, recuerda que el primer return de antes del fetch es porque el fetch está dentro de una función, de ahí que necesitemos los 3 return
    });
};
export default getUsersFromAPI;
