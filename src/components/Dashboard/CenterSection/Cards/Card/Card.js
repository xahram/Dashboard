import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './Card.Styles'
import Icon from '../../../../../assets/icons8-folder.svg'
import localClasses from './Card.module.css'
const card = (props) => {
    const { classes } = props;
    return (<Paper disableUnderline className={classes.card}>
        <div className={localClasses.ImageDiv}>
            <img src={Icon} alt='icon'></img>
            <div >
                <img src={props.pictures[0]} alt='person'></img>
                <img src={props.pictures[1]} alt='person'></img>
            </div>
        </div>
        <h4>{props.name}</h4>
        <p>Created - {new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()}</p>
    </Paper>)
}

export default withStyles(styles)(card)