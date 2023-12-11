import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const usePokemonData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      var endpoints = [];
      for (var i = 1; i < 24; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
      dispatch({ type: 'api/data', payload: response })
    } catch (err) {
      console.log(err);
    }
  }, [])
}

export default usePokemonData;