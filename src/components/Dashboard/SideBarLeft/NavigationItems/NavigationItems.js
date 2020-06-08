import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
    return (<nav>
        <ul>
            {props.data.map((key) => {
                return <NavigationItem />
            })}
        </ul>
    </nav>)
}

export default navigationItems