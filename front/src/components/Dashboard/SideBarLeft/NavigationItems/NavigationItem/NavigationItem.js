import React from 'react'
import classes from './NavigationItem.module.css'
import HomeIcon from '@material-ui/icons/Home';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const navigationItem = (props) => {
    let item = null;
    switch (props.type) {
        case "home":
             item = (<HomeIcon></HomeIcon>)
            break;
        case "folderOpen":
             item = (<FolderOpenIcon></FolderOpenIcon>)
            break;
        case "fileCopy":
             item = (<FileCopyIcon></FileCopyIcon>)
            break;
        case "folderShared":
            item = (<FolderSharedIcon></FolderSharedIcon>)
            break;
        case "deleteOutline":
             item = (<DeleteOutlineIcon></DeleteOutlineIcon>)
            break;
    }
    console.log(item)
return (<li className={classes.navigationItem}>{item} <a href='/'>{props.name}</a></li>)
}

export default navigationItem