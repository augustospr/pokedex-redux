import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const usePokemonData = async () => {
  const dispatch = useDispatch();
  try {
    var endpoints = [];
    for (var i = 1; i < 24; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    dispatch({type: 'api/data', payload: response})
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

export default usePokemonData;