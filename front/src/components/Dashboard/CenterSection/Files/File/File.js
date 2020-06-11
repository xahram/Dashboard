import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './File.styles'
const file = (props) => {
    const { classes } = props
    return (<Paper elevation={1} variant="outlined" className={classes.file}>
        <img src={props.img} alt='Icon' />
        <h4>{props.title}</h4>
        <span>{props.members} members</span>
        <span>{new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear().toString()}</span>
    </Paper>)
}

export default withStyles(styles)(file)