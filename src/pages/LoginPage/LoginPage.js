import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectContext from "../../constants/Context";
import { ThreeDots } from "react-loader-spinner";
import { loginUrl } from "../../constants/urls";

export default function LoginPage() {
    const { setUser } = useContext(ProjectContext);
    const [localUser, setLocalUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        setLoading(true);

        try {
            const body = {
                email: localUser.email,
                password: localUser.password,
            };
            const res = await axios.post(loginUrl, body);
            const serverUser = {name:res.data.name, token:res.data.token, wallet:res.data.wallet};
            setUser(serverUser);
            setLoading(false);
            navigate("/main");
        } catch (err) {
            console.log(err);
            alert(err.response.data);
            setLoading(false);
        }
    }
    return (
        <StyledPage>
            <StyledHeader>MyWallet</StyledHeader>
            <StyledForm>
                <input
                    type="email"
                    placeholder="Email"
                    value={localUser.email}
                    onChange={(e) => {
                        setLocalUser({ ...localUser, email: e.target.value });
                    }}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={localUser.password}
                    onChange={(e) => {
                        setLocalUser({
                            ...localUser,
                            password: e.target.value,
                        });
                    }}
                    required
                />
                {loading === false ? (
                    <button type="submit" disabled={loading} onClick={login}>
                        Entrar
                    </button>
                ) : (
                    <button type="submit" disabled={loading} onClick={login}>
                        <ThreeDots color="#FFFFFF" width="60px" />
                    </button>
                )}
            </StyledForm>
            <Link to={"/registration"}>
                <StyledParagraph>Primeira vez? Cadastre-se!</StyledParagraph>
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
    margin: 159px 0 24px 0;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const StyledParagraph = styled.p`
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    margin-top: 36px;
`;
