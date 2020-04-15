import React from 'react';
import { Button } from '../styled_components/Button';
import styled from 'styled-components';
import ImgTv from '../assets/images/tab-tv.png';
import ImgTablet from '../assets/images/tab-tablet.png';
import ImgMackbook from '../assets/images/tab-macbook.png';

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
    }
    
    span {
        grid-column: 1 / 8;
    }
    
    .btn {
        margin-top: 0 1.25rem 1.rem;
        grid-column: 10 / 12;
    }
    
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        tesxt-align: center;
        martgin-top: 2rem;
    }
    
    h3 {
        margin: 0.5rem 0;
    }
    
    p {
        color: var(--main-grey);
    }
`;