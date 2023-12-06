import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const getPokemonData = async () => {
  try {
    var endpoints = [];
    for (var i = 1; i < 24; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => console.log(res))
  } catch (err) {
    console.log(err);
  }
}

// ###### Redux ######
// const dispatch = useDispatch();
// const { posts } = useSelector((rootReducer) => rootReducer.dataFromApi);

// const showPokemonStatus = () => {
//   dispatch({
//     type: "api/data",
//   });
// }

export default getPokemonData;