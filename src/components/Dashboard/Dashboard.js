import React from 'react'
import classes from './Dashboard.module.css'
import SideBarLeft from './SideBarLeft/SideBarLeft'
import CenterSection from './CenterSection/CenterSection'
import RightSection from './RightSection/RightSection'

const dashboard = (props) => {
    return (<div className={classes.container}>
        <SideBarLeft />
        <CenterSection />
        <RightSection />
    </div>)
}

export default dashboard