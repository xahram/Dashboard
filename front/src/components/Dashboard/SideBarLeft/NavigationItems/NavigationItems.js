import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
const NavigationItems = (props) => {
    const [state, setState] = React.useState([
        { type: 'home' ,name: 'home' },
        { type: 'folderOpen' , name: 'my Files'},
        { type: 'fileCopy' ,name: 'recent Files'},
        { type: 'folderShared' ,name:'shared Files'},
        { type: 'deleteOutline' , name : 'trash'}])
  
    let items = state.map((item) => {
        return <NavigationItem type={item.type} name={item.name}/>
    })
    // console.log(items)
    return (<nav className={classes.navigationItems}>
        <ul>
            {items}
        </ul>
    </nav>)
}

export default NavigationItems