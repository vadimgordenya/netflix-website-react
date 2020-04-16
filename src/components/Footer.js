import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from "styled-media-query";

export default function Footer() {
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
            <span style={{marginLeft: "15%", fontSize: "1.125rem"}}>
                Questions? <Link to="/">Call 1-877-742-1335</Link>
            </span>
            <div className="footer-columns">
                <ul>
                    <li>
                        <Link to="/">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/">Investor Relations</Link>
                    </li>
                    <li>
                        <Link to="/">Ways to Watch</Link>
                    </li>
                    <li>
                        <Link to="/">Corporate Information</Link>
                    </li>
                    <li>
                        <Link to="/">Netflix oroginals</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/">Help Center</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/">Account</Link>
                    </li>
                    <li>
                        <Link to="/">Redeem Gift Cards</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                    <li>
                        <Link to="/">Speed Test</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/">Media Center</Link>
                    </li>
                    <li>
                        <Link to="/">Buy Gift Carts</Link>
                    </li>
                    <li>
                        <Link to="/">Cookie Preferences</Link>
                    </li>
                    <li>
                        <Link to="/">Legal Notices</Link>
                    </li>
                </ul>
                <div
                    className="lang-btn"
                    onClick={handleToggle}
                >
                    <Icon icon={iosWorld} size={20} />
                    &nbsp;&nbsp;{language}&nbsp;&nbsp;
                    <Icon icon={arrowSortedDown} />
                </div>
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
            <span style={{marginLeft: "15%", fontSize: "0.9rem"}}>Netflix Canada</span>
        </FooterContainer>
    );
};

// Media
const customMedia = generateMedia({
    tablet: "740px",
});

const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;
    
    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
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
        margin: 2rem 0 2rem;
        cursor: pointer;
    }
    
    .lang-toggle {
        margin-left: 15%;
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