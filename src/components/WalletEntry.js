import styled from "styled-components";

export default function WalletEntry({ entry }) {
	let color = entry.value > 0 ? "#03AC00" : "#C70000";

    function deleteEntry() {
        
    }
	return (
		<StyledLi>
			<StyledLeft>
				<StyledDate>{entry.date.slice(0, 5)}</StyledDate>
				<StyledName>{entry.name}</StyledName>
			</StyledLeft>
			<StyledRight>
				<StyledValue color={color}>
					{entry.value.toFixed(2)}
				</StyledValue>
                <DeleteIcon onClick={deleteEntry}>
                    x
                </DeleteIcon>
			</StyledRight>
		</StyledLi>
	);
}

const StyledLi = styled.li`
	margin-bottom: 15px;
	display: flex;
	justify-content: space-between;
`;

const StyledLeft = styled.div`
	display: flex;
	text-align: left;
	justify-content: center;
`;

const StyledDate = styled.p`
	color: #c6c6c6;
	font-size: 16px;
	line-height: 19px;
	margin-right: 6px;
`;

const StyledName = styled.p`
	color: black;
	font-size: 16px;
	line-height: 19px;
	margin-right: 6px;
`;

const StyledRight = styled.div`
    display: flex;

`

const StyledValue = styled.p`
	color: ${(p) => p.color};
	font-size: 16px;
	line-height: 19px;
`;

const DeleteIcon = styled.p`
	color: #c6c6c6;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
    margin-left: 6px;
`;
