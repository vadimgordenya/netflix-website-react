import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from "styled-media-query";

export default function LoginFooter() {
    const [toggle, setToggle] = useState(false);
    const [language, setLanguage] = useState('English');

    function handleToggle() {
        setToggle((prevState) => !prevState);
    }

    function handleLanguage(language) {
        setLanguage(language);
        setToggle(false);

    }

    return (
        <FooterContainer>
            <span style={{marginLeft: "10%", color: "#999"}}>
                Questions? <Link>Call 1-877-742-1335</Link>
            </span>
            <div className="footer-columns">
                <ul>
                    <li>
                        <Link>Gift Card Terms</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link>Terms of Use</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link>Privacy Statement</Link>
                    </li>
                </ul>
            </div>
            <div
                className="lang-btn"
                onClick={handleToggle}
            >
                <Icon icon={iosWorld} size={20} />
                &nbsp;&nbsp;{language}&nbsp;&nbsp;
                <Icon icon={arrowSortedDown} />
            </div>
            {
                toggle && (
                    <div className="lang-toggle">
                        <ul>
                            <li onClick={() => handleLanguage('English')}>
                                English
                            </li>
                            <li  onClick={() => handleLanguage('French')}>
                                French
                            </li>
                        </ul>
                    </div>
                )
            }
        </FooterContainer>
    );
};

// Media
const customMedia = generateMedia({
    tablet: "740px",
});

const FooterContainer = styled.footer`
    justify-content: center;
    background: rgba(0,0,0,0.8);
    padding-top: 3rem;
    padding-bottom: 6rem;
    margin-top: 6rem;
    position: relative;
    z-index: 5;
    
    .footer-columns {
        width: 80%;
        margin: 1rem auto 0;
        color: #999;
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customMedia.lessThan("tablet")`
            grid-template-columns: repeat(2, 1fr);
        `}
    }
    
    ul li {
        list-style: none;
        line-height: 2.5;
    }
    
    a {
        color: #999;
        font-size: 0.9rem;
    }
    
    p {
        text-decoration: underline;
        cursor: pointer;
    }
    
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    
    // Language Button
    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-left: 10%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: #999;
        cursor: pointer;
    }
    
    .lang-toggle {
        margin-left: 10%;
        position: absolute;
        margin-top: -2rem;
    }
    
    .lang-toggle ul {
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        text-align: center;
    }
    .lang-toggle ul li:hover {
        background: #0085ff;
        color: #fff;
    }
`;