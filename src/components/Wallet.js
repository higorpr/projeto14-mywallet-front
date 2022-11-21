import { useContext } from "react";
import styled from "styled-components";
import ProjectContext from "../constants/Context";
import WalletEntry from "./WalletEntry";

export default function Wallet() {
    const { user } = useContext(ProjectContext);

    let total = 0;
    user.wallet.forEach((entry) => (total += parseFloat(entry.value)));

    return (
        <>
            {user.wallet.length > 0 ? (
                <StyledWallet>
                    <StyledInnerWallet>
                        <StyledList>
                            {user.wallet.map((entry, idx) => (
                                <WalletEntry key={idx} entry={entry} />
                            ))}
                        </StyledList>
                        <StyledBottomText
                            color={total > 0 ? "#03AC00" : "#C70000"}
                        >
                            <p>SALDO</p>
                            {total.toFixed(2).toString().replace(".", ",")}
                        </StyledBottomText>
                    </StyledInnerWallet>
                </StyledWallet>
            ) : (
                <StyledWallet>
                    <StyledP>Não há registros de entrada ou saída</StyledP>
                </StyledWallet>
            )}
        </>
    );
}

const StyledWallet = styled.div`
    width: 326px;
    height: 446px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    /* background-color: blue; */
`;

const StyledInnerWallet = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 23px 11px 10px 12px;
    box-sizing: border-box;
    /* background-color: red; */
`;

const StyledList = styled.ul`
    overflow: scroll;
`;

const StyledBottomText = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 3px;
    color: ${(p) => p.color};
    p {
        color: black;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`;

const StyledP = styled.p`
    font-size: 20px;
    line-height: 23.5px;
    margin: auto 73px;
    text-align: center;
    color: #868686;
`;
