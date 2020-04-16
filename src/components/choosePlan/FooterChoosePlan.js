import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

export default function FooterChoosePlan() {

    return (
        <FooterContainer>
            <div className="footer-wrapper">
                <span style={{marginLeft: "10%", color: "#999"}}>
                    Questions? <Link to="/">Call 1-877-742-1335</Link>
                </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link to="/">FAQ</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/">Help Center</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/">Terms of Use</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/">Privacy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </FooterContainer>
    );
};

// Media
const customMedia = generateMedia({
    tablet: "740px",
});

const FooterContainer = styled.footer`
    justify-content: center;
    background: #f3f3f3;
    padding: 1.875rem 0;
    margin-top: 10rem;
    position: relative;
    border-top: 1px solid #e6e6e6;
    z-index: 5;
    
    .footer-columns {
        width: 80%;
        margin: 1rem auto 0 auto;
        color: #999;
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: repeat(4, 15.625rem);
        grid-gap: 0.3rem;
        ${customMedia.lessThan("tablet")`
            grid-template-columns: repeat(2, 1fr);
        `}
    }
    
    .footer-wrapper {
        margin: 0 auto;
        padding: 1.25rem;
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