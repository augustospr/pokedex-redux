import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const limit = 25;

const usePokemonData = () => {
  const dispatch = useDispatch();

  useEffect( async () => {
    try {
      var endpoints = [];
      for (var i = 1; i < limit; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      var response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
      dispatch({ type: 'api/data', payload: response })
    } catch (err) {
      console.log(err);
    }
  }, []);

}

export default usePokemonData;