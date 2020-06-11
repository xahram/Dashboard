import React from 'react'
import classes from './RightSection.module.css'
import Chart from '../../Chart'
const rightSection = (props) => {
    return (<div className={classes.rightSection}>
            <Chart />
    </div>)
}

export default rightSection