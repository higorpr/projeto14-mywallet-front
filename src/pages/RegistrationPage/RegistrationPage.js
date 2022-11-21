import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUpUrl } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function RegistrationPage() {
    const [localUser, setLocalUser] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState("");
    const navigate = useNavigate();

    async function signUp(event) {
        event.preventDefault();
        setLoading(true);

        if (passwordCheck === localUser.password) {
            const userObj = {
                name: localUser.name,
                email: localUser.email,
                password: localUser.password,
            };
            try {
                await axios.post(signUpUrl, userObj);
                navigate("/");
            } catch (err) {
                console.log(err);
                alert(err.response.data);
                setLoading(false);
            }
        } else {
            alert("As senhas devem ser iguais.");
            setLoading(false);
        }
    }

    return (
        <StyledPage>
            <StyledHeader>MyWallet</StyledHeader>
            <StyledForm>
                <input
                    type="text"
                    placeholder="Nome"
                    value={localUser.name}
                    onChange={(e) => {
                        setLocalUser({ ...localUser, name: e.target.value });
                    }}
                    required
                />
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
                        setLocalUser({ ...localUser, password: e.target.value });
                    }}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={(e) => {
                        setPasswordCheck(e.target.value);
                    }}
                    required
                />
                {loading === false ? (
                    <button type="submit" disabled={loading} onClick={signUp}>
                        Cadastrar
                    </button>
                ) : (
                    <button type="submit" disabled={loading} onClick={signUp}>
                        <ThreeDots color="#FFFFFF" />
                    </button>
                    
                )}
            </StyledForm>
            <Link to={"/"}>
                <StyledParagraph>
                    Já tem uma conta? Entre agora!
                </StyledParagraph>
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
