import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabIcon from './tabs_nav/TabIcon';
// Tabs Content components
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import '../css/TabsNav.css';

export default function TabComponent() {
    const [tabIndex, setTabIntex] = useState(0);

    return (
        <div>
            <Tabs
                className="tabs"
                selectedIndex={tabIndex}
                onSelect={tabIndex => setTabIntex(tabIndex)}
            >
                <TabList className="tab-nav-container">
                    <Tab
                        className={`${tabIndex === 0 ? 'tab-selected active' : null}`}
                    >
                        <TabIcon icon="door" />
                        <p style={{marginBottom: "1.875rem"}} className="lgScreen">
                            <strong>No commitments<br/>Cancel online at anytime</strong>
                        </p>
                        <br/>
                        <span className="mdScreen" style={{marginTop: "0.4rem"}}>Cancel</span>
                    </Tab>
                    <Tab
                        className={`${tabIndex === 1 ? 'tab-selected active' : null}`}
                    >
                        <TabIcon icon="devices" />
                        <p style={{marginTop: "-5.3125rem"}} className="lgScreen">
                            <strong>Watch anywhere</strong>
                        </p>
                        <span className="mdScreen" style={{marginTop: "-5.3125rem"}}>Devices</span>
                    </Tab>
                    <Tab
                        className={`${tabIndex === 2 ? 'tab-selected active' : null}`}
                    >
                        <TabIcon icon="price" />
                        <p className="lgScreen">
                            <strong>Pick your price</strong>
                        </p>
                        <br/>
                        <span className="mdScreen">Prices</span>
                    </Tab>
                </TabList>

                <TabPanel>
                    <TabContentOne />
                </TabPanel>
                <TabPanel>
                    <TabContentTwo />
                </TabPanel>
                <TabPanel>
                    <TabContentThree />
                </TabPanel>
            </Tabs>
        </div>
    );
}