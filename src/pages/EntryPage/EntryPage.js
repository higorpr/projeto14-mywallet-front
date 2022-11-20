import { useContext, useState } from "react";
import styled from "styled-components";
import ProjectContext from "../../constants/Context";

export default function EntryPage() {
	const { operation } = useContext(ProjectContext);
	const [entry, setEntry] = useState({ entryName: "", entryValue: undefined });
	const [loading, setLoading] = useState(false);

	function sendEntry(event) {
		event.preventDefault();
        setLoading(true)
	}

	return (
		<StyledPage>
			{operation === "in" ? (
				<StyledP> Nova Entrada </StyledP>
			) : (
				<StyledP> Nova Saída</StyledP>
			)}
			<StyledForm>
				<input
					type="number"
					placeholder="Valor"
					value={entry.entryValue}
					onChange={(e) => {
						setEntry({ ...entry, entryValue: e.target.value });
					}}
					required
				/>
				<input
					type="text"
					placeholder="Descrição"
					value={entry.entryName}
					onChange={(e) => {
						setEntry({ ...entry, entryName: e.target.value });
					}}
					required
				/>
				<button type="submit" disabled={loading} onClick={sendEntry}>
					{(operation === 'in') ? "Salvar Entrada" : "Salvar Saída"}
				</button>
			</StyledForm>
		</StyledPage>
	);
}

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	margin: 25px;
`;

const StyledP = styled.p`
	color: white;
	font-weight: 700;
	font-size: 26px;
    margin-bottom: 40px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;

	input {
		width: 326px;
		height: 58px;
		border-radius: 5px;
		margin-bottom: 13px;
		text-indent: 15px;
		font-size: 20px;
		line-height: 23.5px;
		color: #000000;

		&::placeholder {
			color: #000000;
		}
	}

	button {
		color: #ffffff;
		background-color: #a328d6;
		width: 326px;
		height: 46px;
		border-radius: 5px;
		font-size: 20px;
		font-weight: 700;
	}
`;
