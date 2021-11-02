import React, { Fragment, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';

const { TabPane } = Tabs;



const HomeMenu = (props) => {

    const [state, setState] = useState({
        tabPosition: 'left',
    })

    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };

    const { tabPosition } = state;
    return (
        <Fragment className="flex justify-center">
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<img src="https://picsum.photos/200" width="50" className="rounded-full" />} key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab={<img src="https://picsum.photos/200" width="50" className="rounded-full" />} key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab={<img src="https://picsum.photos/200" width="50" className="rounded-full" />} key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </Fragment>
    )
}

export default HomeMenu
