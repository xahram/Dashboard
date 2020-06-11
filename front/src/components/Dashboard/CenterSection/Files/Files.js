import React from 'react'
import Folder from '../../../../assets/Folder-05.svg'
import Folder2 from '../../../../assets/Folder-02.svg'
import Folder3 from '../../../../assets/icons8-folder.svg'
import classes from './Files.module.css'
import File from './File/File'
const Files = (props) => {
    const [state, setState] = React.useState([
        { img: Folder, title: 'Travel Landing Page', members: 8 },
        { img: Folder3, title: 'Dashboard Structure', members: 10 },
        { img: Folder, title: 'Character Illustration', members: 19 }])
    const values = state.map((file) => {
        return <File img={file.img} title={file.title} members={file.members} />
    })
    return (<div className={classes.Files}>
        <div>
            <span>Files</span>
            <span>Title</span>
            <span>Members</span>
            <span>Date Modified</span>
        </div>
        {values}
    </div>)
}

export default Files