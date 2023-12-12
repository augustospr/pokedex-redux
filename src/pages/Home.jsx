import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
import Paginacao from "../components/paginacao/Paginacao";
import usePokemonData from "../api/api";

import { Container, Grid } from "@mui/material";

export default function Home() {

  const [filtrado, setFiltrado] = useState("");

  const filtraPokemon = (nome) => {
    setFiltrado(nome);
  }

  // ###### Redux ######

  usePokemonData();

  const { currentStatus } = useSelector((rootReducer) => rootReducer.statusReducer);
  const { posts } = useSelector((rootReducer) => rootReducer.dataFromApi);
  const dispatch = useDispatch();

  console.log({ posts });

  return (
    <>
      <Container sx={{ paddingBottom: 5 }}>
        <Grid container spacing={2}>
          <Cabecalho />
          <PesquisaPokemon filtraPokemon={filtraPokemon} />

          {posts.filter(pokemon => pokemon.data.name.includes(filtrado)).map((pokemon) => (
            <Grid item key={pokemon.data.id} xs={12} sm={4} md={2}>
              <CardPokemon nome={pokemon.data.name} imagem={pokemon.data.sprites.front_default} tipo={pokemon.data.types} />
            </Grid>
          ))}

          <Grid item xs={12} textAlign="center">
            <Paginacao />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}   
