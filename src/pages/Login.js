import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import logo from '../assets/svg/logo.svg';
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";

export default function Login() {
    return(
        <div className="main-login-container">
            <div className="header-top">
                <Logo src={logo} alt="logo" className="logo"/>
            </div>
            <LoginForm />
            <LoginFooter />
        </div>
    );
}

// Media
const customMedia = generateMedia({
    tablet: "640px",
    lgTablet: "740px"
});

const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan("tablet")`
        top: 45%;
        left: 23%;
    `}
`;