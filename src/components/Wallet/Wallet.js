import styled from "styled-components"

export default function Wallet() {
    const exempleWallet = [{"Almoço mãe":-39.9},{"Mercado":-542.54},{"Salário":3000}]
    return (
        <StyledWallet>
            <StyledP>
                Não há registros de entrada ou saída
            </StyledP>
        </StyledWallet>
    )
}

const StyledWallet = styled.div`
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 5px;

`

const StyledP = styled.p`
    font-size:20px;
    line-height: 23.5px;
    margin:auto 73px;
    text-align: center;
    color: #868686;

`
