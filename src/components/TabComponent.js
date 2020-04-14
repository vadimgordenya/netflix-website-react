import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabIcon from './tabs_nav/TabIcon';
import '../css/TabsNav.css';

class TabComponent extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab><TabIcon icon="door" /></Tab>
                        <Tab><TabIcon icon="devices" /></Tab>
                        <Tab><TabIcon icon="price" /></Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default TabComponent;