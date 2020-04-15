import React from 'react';
import { Button } from '../styled_components/Button';
import styled from 'styled-components';
import ImgTv from '../assets/images/tab-tv.png';
import ImgTablet from '../assets/images/tab-tablet.png';
import ImgMackbook from '../assets/images/tab-macbook.png';
import { generateMedia } from "styled-media-query";

export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: "1.5rem"}}>
                        Watch TV shows and movies amytime, anywhere - personalized for you.
                    </span>
                    <Button className="btn">try it now</Button>
                </div>
                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                    <div>
                        <img
                            src={ImgTv}
                            alt=""
                            style={{width: "18.75rem"}}
                        />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chrome</p>
                    </div>

                    <div>
                        <img
                            src={ImgTablet}
                            alt=""
                            style={{width: "18.75rem", paddingTop: "0.625rem"}}
                        />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chrome</p>
                    </div>

                    <div>
                        <img
                            src={ImgMackbook}
                            alt=""
                            style={{width: "18.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem"}}
                        />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chrome</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

// Media
const customMedia = generateMedia({
    smDesktop: "1440px",
    tablet: "900px",
});

// Main Tab Content
const TabContainer = styled.div`
    background: var(--main-deep-dark);
    
    .tab-content {
        margin: 0 15%;
    }
    
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan("smDesktop")`
           grid-template-columns: repeat(2, 1fr); 
        `};
        ${customMedia.lessThan("tablet")`
           grid-template-columns: 1fr;
           text-align: center;
           row-gap: 1.5rem;
        `};
    }
    
    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan("tablet")`
           grid-column: 1 / -1;
           font-size: 1.5rem;
        `};
    }
    
    .btn {
        margin: 0 1.25rem 1rem;
        grid-column: 10 / 12;
        ${customMedia.lessThan("tablet")`
           grid-column: 1 / -1;
           margin-left: 30%;
           margin-right: 30%;
        `};
    }
    
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        tesxt-align: center;
        martgin-top: 2rem;
        ${customMedia.lessThan("tablet")`
           grid-template-columns: 1fr;
        `};
    }
    
    h3 {
        margin: 0.5rem 0;
    }
    
    p {
        color: var(--main-grey);
    }
`;