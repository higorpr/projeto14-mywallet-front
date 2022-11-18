import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectContext from "../../constants/Context";


export default function RegistrationPage() {
	const { user, setUser} = useContext(ProjectContext);
	const [loading, setLoading] = useState(false)
	let passwordCheck = '';
	const navigate = useNavigate()

	function signUp(event) {
		event.preventDefault()

	}

	return (
		<StyledPage>
			<StyledHeader>MyWallet</StyledHeader>
			<StyledForm>
			<input
					type="text"
					placeholder="Nome"
					value={user.name}
					onChange={(e) => {
						setUser({ ...user, name: e.target.value });
					}}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					value={user.email}
					onChange={(e) => {
						setUser({ ...user, email: e.target.value });
					}}
					required
				/>
				<input
					type="password"
					placeholder="Senha"
					value={user.password}
					onChange={(e) => {
						setUser({ ...user, password: e.target.value });
					}}
					required
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					onChange={(e) => {
						passwordCheck = e.target.value
					}}
					required
				/>
				<button type="submit" disabled={loading} onClick={signUp}>
					Cadastrar
				</button>
			</StyledForm>
			<Link to={"/"}>
				<StyledParagraph>Já tem uma conta? Entre agora!</StyledParagraph>
			</Link>
		</StyledPage>
	);
}

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledHeader = styled.h1`
	color: #ffffff;
	margin: 95px 0 24px 0;
	font-size: 32px;
	line-height: 50px;
	font-family: "Saira Stencil One", cursive;
	font-weight: 400;
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

const StyledParagraph = styled.p`
	color: #ffffff;
	font-weight: 700;
	font-size: 15px;
	line-height: 17px;
	margin-top: 36px;
`;
