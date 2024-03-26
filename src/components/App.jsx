import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import "../scss/App.scss";
import "../scss/core/reset.scss";
import getUsersFromAPI from "../services/getUsersFromAPI";
import UsersList from "./UsersList";
import Filters from "./filters/Filters";
import UserDetail from "./UserDetail";

/*
    Listado de tareas:

    - Leer muy muy bien el enunciado
    - Crear repositorio
    - Dibujar árbol de componentes
    - Mirar la API, investigar la documentación
    - Crear la estructura del proyecto (React)
    - Commit inicial
    - Desarrollar:
      - Pintar la lista de personas:
        * Crear los componentes
        * Hacer la petición al servidor ( fetch) y una vez tenga los datos, pintar todas las personas que me devuelva la respuesta (UsersList, User)

      - Filtrar:
        * Crear componentes filters
      Por nombre:
        * Cuando el usuario escriba en el filtro necesito una variable de estado para almacenar lo que escriba el usuario, luego hago la lógica (includes), y ya pintar los elementos filtrados

      - Mostrar Vista detalle de la persona

      - recuerda hacer proptypes
*/

function App() {
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterCities, setFilterCities] = useState([]);

  const onChangeName = (value) => {
    setFilterName(value);
  };

  const onChangeGender = (value) => {
    setFilterGender(value);
  };

  const handleChangeCity = (value) => {
    setFilterCities([...filterCities, value]);
  };

  const filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((user) => {
      return filterGender ? filterGender === user.gender : true; // esta locurilla dice basically que si existe filterGender (es decir si el usuario ha clickado en este filtro) entonces me filtre según el género, Y SI NO quiero que me devuelva el objeto entero, por eso le fuerzo un true al final, para que siempre "haya" un filterGender
    })
    .filter((user) => {
      if (filterCities.length === 0) {
        return true;
      } else {
        return filterCities.includes(user.city);
      }
    });

  useEffect(() => {
    getUsersFromAPI().then((usersData) => {
      setUsers(usersData);
    }); // array vacío significa que se ejecuta una sola vez la función que pasamos por primer parámetro, cuando se carga la página
  }, []); // Este .then es porque lo que nos devuelve getUsersFromAPI es una promesa. Y es con .then con lo que recogemos las promesas.

  /*
      Enrutado:
      Coger el id de la ruta y buscar entre todos mis usuarios el usuario que tenga el id. Para así pasarle ese ususario al componente UserDetail...
          1. Saber si estoy en la ruta dinámica /user/:idUser
          2. Sacar el id de la ruta (el id del usuario)
          3. Puedo coger el objeto del array que tenga ese id. Buscarlo.
        
  */

  //Coger el id de la ruta:
  const { pathname } = useLocation();
  console.log("pathname", pathname); // pathname es la home, la /
  const userDetailRoute = matchPath("/user/:idUser", pathname); //los dos puntos indican que es una parte dinámica de la ruta, el primer parámetro es la ruta que quero buscar y el pathname es la ruta actual en la que estoy
  console.log(userDetailRoute);

  const idUser = userDetailRoute ? userDetailRoute.params.idUser : null; // solo puedo acceder a params cuando estoy en la ruta, que es cuando me devuelve la info, en home me devuelve matchpath null, por eso necesito estar en userDetailRoute, y encierro ese id en idUser
  const userDetailData = users.find((user) => {
    return user.id === idUser; // userDetailData me devuelve la info del usuario clickado
  });

  const cities = users.map((user) => user.city);
  console.log(cities);

  return (
    <>
      <header>
        <h1>Lista de personas</h1>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  valueName={filterName}
                  valueGender={filterGender}
                  onChangeName={onChangeName}
                  onChangeGender={onChangeGender}
                  cities={cities}
                  onChangeCity={handleChangeCity}
                />
                <UsersList users={filteredUsers} />
              </>
            }
          />

          {/* la barra en el path significa que esta es la homepage. en elements metemos lo que queremos que aparezca en la home*/}

          <Route
            path="/user/:idUser"
            element={<UserDetail user={userDetailData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
