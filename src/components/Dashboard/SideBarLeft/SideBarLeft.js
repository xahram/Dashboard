import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './SideBar.module.css'
import Logo from '../../../assets/480px-6zavod.svg.png'
const sideBarLeft = (props) => {
    return (<div className={classes.leftBar}>
        <div><img src={Logo} alt='logo' /></div>
        <NavigationItems />
        <div></div>
    </div>)
}

export default sideBarLeft