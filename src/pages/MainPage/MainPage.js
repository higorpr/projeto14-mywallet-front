import { useContext } from "react";
import styled from "styled-components";
import Wallet from "../../components/Wallet/Wallet";
import ProjectContext from "../../constants/Context";


export default function MainPage() {
	const { user } = useContext(ProjectContext);

	return (
		<StyledPage>
			<StyledTop>
				<StyledHeader>Olá, Fulano</StyledHeader>
			</StyledTop>
            <Wallet />
		</StyledPage>
	);
}

const StyledPage = styled.div`
	margin: 25px 25px 16px 25px;
`;

const StyledTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
`

const StyledHeader = styled.h1`
	font-weight: 700;
	color: #ffffff;
    font-size: 26px;
    line-height: 30.5px;
`;
