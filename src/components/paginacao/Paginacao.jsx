import { Button } from "@mui/material";

export default function Paginacao({ addMore }) {

	return (
		<div className="paginacao">
			<Button variant="contained" color="success" sx={{ width: 250 }}>
				Página anterior
			</Button>
			<div>1 / X</div>
			<Button onClick={addMore} variant="contained" color="success" sx={{ width: 250 }}>
				Próxima pagina
			</Button>
		</div>
	)
}