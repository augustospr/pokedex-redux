import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

export default function Paginacao() {

	const dispatch = useDispatch();
	const { limit, offset } = useSelector((rootReducer) => rootReducer.pagination);

	const nextPage = () => {
		dispatch({ type: 'set/pagination', payload: { limit: limit + 25, offset: offset + 25 } })
	}

	const previousPage = () => {
		if (limit > 1) {
			dispatch({ type: 'set/pagination', payload: { limit: limit - 24, offset: offset - 24 } })
		}
	}

	return (
		<div className="paginacao">
			<Button onClick={previousPage} variant="contained" color="success" sx={{ width: 250 }}>
				Página anterior
			</Button>
			<div>1 / 20</div>
			<Button onClick={nextPage} variant="contained" color="success" sx={{ width: 250 }}>
				Próxima pagina
			</Button>
		</div>
	)
}