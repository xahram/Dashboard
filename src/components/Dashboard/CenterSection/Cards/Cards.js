import React from 'react'
import Card from './Card/Card'
import classes from './Cards.module.css'
import userProfile1 from '../../../../assets/47.jpg'
import userProfile2 from '../../../../assets/76.jpg'
const Cards = (props) => {
    const [state, setstate] = React.useState([{ name: "App Project", userPro: [userProfile1, userProfile2] }, { name: "Project", userPro: [userProfile1, userProfile2] }, { name: "Client Documents", userPro: [userProfile1, userProfile2] }])
    const values = state.map((card) => {
        return <Card name={card.name} pictures={card.userPro}/>
    })
    return (
        <div className={classes.cards}>
            {values}
        </div>)
}

export default Cards