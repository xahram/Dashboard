import React from 'react'
import classes from './CenterSection.module.css'
import { Input } from '@material-ui/core'
import Cards from './Cards/Cards'
import Files from './Files/Files'
const centerSection = (props) => {
    return (<div className={classes.centerSectionBack}>
        <div className={classes.centerSectionFront}>
            <input
                value=''
                placeholder='Search....'

                fullWidth
                type='text'
                id='search'
                name='search' ></input>
            <section>
                <h3>Recently Used</h3>
                <Cards />
            </section>
            <section>
                <h3>Recent Files</h3>
                <Files />
            </section>
            <section>
                <h3>Share with me</h3>
                <Cards />
            </section>



        </div>

    </div>)
}

export default centerSection