import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pagination from "../redux/paginacao/reducer";

const usePokemonData = () => {
  const dispatch = useDispatch();
  const { limit, offset } = useSelector((rootReducer) => rootReducer.pagination);

  useEffect( async () => {
    try {
      var endpoints = [];
      for (var i = offset; i < limit; i++) {
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