import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './SideBar.module.css'
const sideBarLeft = (props) => {
    return (<div className={classes.leftBar}>
        <NavigationItems  data={[]} />
    </div>)
}

export default sideBarLeft