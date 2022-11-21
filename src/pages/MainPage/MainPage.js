import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import EntryButton from "../../components/EntryButton";
import Wallet from "../../components/Wallet";
import ProjectContext from "../../constants/Context";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getWalletUrl } from "../../constants/urls";

export default function MainPage() {
    const { user, setUser, setOperation } = useContext(ProjectContext);
    const [nReloads, setNReloads] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const res = await axios.get(getWalletUrl, config);
            const userWallet = res.data
            setUser({ ...user, wallet: userWallet });
        };

        fetchData();
		
    }, [nReloads]);

    function logOut() {
        setUser({ name: "", email: "", wallet: [] });
        navigate("/");
    }

    return (
        <StyledPage>
            <StyledTop>
                <StyledHeader>Olá, {user.name}</StyledHeader>
                <div>
                    <IconContext.Provider
                        value={{ color: "white", size: "24px" }}
                    >
                        <RiLogoutBoxRLine onClick={logOut} />
                    </IconContext.Provider>
                </div>
            </StyledTop>
            <Wallet nReloads={nReloads} setNReloads={setNReloads}/>
            <StyledBottom>
                <StyledLink to={"/entry"}>
                    <EntryButton
                        type={"in"}
                        setOperation={setOperation}
                        nReloads={nReloads}
                        setNReloads={setNReloads}
                    />
                </StyledLink>
                <StyledLink to={"/entry"}>
                    <EntryButton
                        type={"out"}
                        setOperation={setOperation}
                        nReloads={nReloads}
                        setNReloads={setNReloads}
                    />
                </StyledLink>
            </StyledBottom>
        </StyledPage>
    );
}

const StyledPage = styled.div`
    margin: 25px 25px 16px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    width: 326px;
    margin: 0 24px 22px 24px;
`;

const StyledHeader = styled.h1`
    font-weight: 700;
    color: #ffffff;
    font-size: 26px;
    line-height: 30.5px;
`;

const StyledBottom = styled.div`
    display: flex;
    margin-top: 13px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
