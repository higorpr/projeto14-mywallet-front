import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function EntryButton({ type, setOperation }) {
	let marginLeft = type === "in" ? "0" : "7.5px";
	let marginRight = type === "in" ? "7.5px" : "0";

	return (
		<StyledButton
			marginLeft={marginLeft}
			marginRight={marginRight}
			onClick={() => {
				setOperation(type);
			}}
		>
			<div>
				{type === "in" ? (
					<IconContext.Provider
						value={{ size: "25px", color: "white" }}
					>
						<AiOutlinePlusCircle />
					</IconContext.Provider>
				) : (
					<IconContext.Provider
						value={{ size: "25px", color: "white" }}
					>
						<AiOutlineMinusCircle />
					</IconContext.Provider>
				)}
			</div>

			{type === "in" ? (
				<StyledP> Nova Entrada </StyledP>
			) : (
				<StyledP> Nova Saída</StyledP>
			)}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	width: 155px;
	height: 114px;
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};
	background-color: #a328d6;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 9px 8px;
	box-sizing: border-box;
`;

const StyledP = styled.p`
	color: white;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    width: 64px;
    text-align: left;
`;
