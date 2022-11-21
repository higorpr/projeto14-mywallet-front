import axios from "axios";
import styled from "styled-components";
import { modifyWalletUrl } from "../constants/urls";
import { useContext } from "react";
import ProjectContext from "../constants/Context";

export default function WalletEntry({ idx, entry, nReloads, setNReloads }) {
    const { user } = useContext(ProjectContext);
    let color = entry.value > 0 ? "#03AC00" : "#C70000";

    const date = new Date(entry.date);
    const day = date.getUTCDate();
    const month = date.getMonth() + 1;
    const dateString = `${day}/${month}`;
    const entryValue = parseFloat(entry.value).toFixed(2);
    const valueString = entryValue.toString().replace(".", ",");

    async function deleteEntry() {
        if (window.confirm("Tem certeza que quer deletar esta linha?")) {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                const url = `${modifyWalletUrl}/${idx}`;
                await axios.delete(url, config);
                setNReloads(nReloads + 1);
            } catch (err) {
                // alert(err.response.data);
                console.log(err);
            }
        }
    }
    return (
        <StyledLi>
            <StyledLeft>
                <StyledDate>{dateString}</StyledDate>
                <StyledName>{entry.name}</StyledName>
            </StyledLeft>
            <StyledRight>
                <StyledValue color={color}>{valueString}</StyledValue>
                <DeleteIcon onClick={deleteEntry}>x</DeleteIcon>
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
    word-break: break-all;
`;

const StyledRight = styled.div`
    display: flex;
`;

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
