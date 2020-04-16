import React, {useState} from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Link } from "react-router-dom";
import FBlogo from "../../assets/images/fb-logo.png";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    const [checked, setChecked] = useState(true);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        let emailError,
            passwordError;

        if(!email) {
            emailError = <span style={{color: "#db7302"}}>Please enter a valid email!</span>;
            setEmailError(emailError);
        } else if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            emailError = <span style={{color: "var(--main-red)"}}>Your email adress is not valid!</span>;
            setEmailError(emailError);
        } else {
            setEmailError(null);
        }

        if(!password) {
            passwordError = <span style={{color: "#db7302"}}>Your password must contain between 6 and 60 characters</span>;
            setPasswordError(passwordError);
        } else if(password.length < 6) {
            passwordError = <span style={{color: "var(--main-red)"}}>Your password contains less then 6 characters </span>;
            setPasswordError(passwordError);
        } else {
            setPasswordError(null);
        }

        if(!emailError && !passwordError) {
            setEmail('');
            setPassword('');
        }
    }

    function handlerCheckbox (e) {
        setChecked(e.target.checked);
    }

    return (
        <FormContainer>
            <div className="form-container">
                <form action="" onSubmit={onSubmit}>
                    <h1>Sign In</h1>
                    <div className="input-container">
                        <input
                            type="text"
                            className={
                                emailError
                                    ? "input-empty input-error"
                                    : "input-empty"
                            }
                            onChange={handleEmailChange}
                            value={email}
                        />
                        <label htmlFor="">Email or Phone Number</label>
                        {emailError}

                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            className={
                                passwordError
                                    ? "input-empty input-error"
                                    : "input-empty"
                            }
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <label htmlFor="">Password</label>
                        {passwordError}
                    </div>
                    <div className="input-container">
                        <Button type="submit">Sign In</Button>
                    </div>
                    <label className="checkbox-container">
                        Remember me
                        <input type="checkbox" defaultChecked={checked} onChange={handlerCheckbox} />
                        <span className="checkmark"></span>
                    </label>
                    <Link to="/" className="need-help">Need help?</Link>
                    <div className="bottom-form">
                        <img src={FBlogo} alt="facebook"/>
                        <Link to="/" className="login-fb-text">Login with Facebook</Link>
                        <br/>
                        <br/>
                        <span style={{color: "#999"}}>New to Netflix?</span>&nbsp;
                        <Link to="/" className="sign-up-text">Sign up now</Link>
                    </div>
                </form>
            </div>
        </FormContainer>
    );
}

// Media
const customMedia = generateMedia({
    tablet: "640px"
});

// Form Container
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;
    ${customMedia.lessThan("tablet")`
        border-bottom: 0.9px solid #999;
    `}
    
    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
        ${customMedia.lessThan("tablet")`
            padding: 0.6rem;
            height: 35rem;
        `}
    }
    
    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }
    
    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }
    
    form div label {
        position: absolute;
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }
    
    form div {
        position: relative;
    }
    
    input:focus ~ label {
        top: 0.4375rem;
        font-size: 0.7rem;
    }
    
    input:focus {
        outline: none;
    }
    
    .input-error {
        border-bottom: 1px solid #db7302;
    }
    
    // Checkbox
    .checkbox-container {
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        font-size: 0.9rem;
        color: #999;
        cursor: pointer;
    }
    
    .checkbox-container input {
        display: none;
    }
    
    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;
    }
    .checkbox-container input:checked + .checkmark:after {
        content: "";
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }
    
    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 6.6rem;
        font-size: 0.9rem;
        &:hover {
            text-decoration: underline;
        }
        ${customMedia.lessThan("tablet")`
            margin-left: 13rem;
        `}
    }
    
    // Bottom form
    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }
    
    .login-fb-text {
        color: #828282;
        font-size: 0.9rem;
    }
    
    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }
    
    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
`;

// Button
const Button = styled.button`
    color: #fff;
    background: rgb(229,9,20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity .2s easy-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
    
`;