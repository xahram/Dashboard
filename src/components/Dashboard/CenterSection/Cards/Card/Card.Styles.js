const style = (theme)=>{
    return {
        card : {
            width: "26%",
            height: "100%",
            display:"flex",
            flexDirection:'column',
            boxSizing:'border-box',
            justifyContent:'space-evenly',
            padding:theme.spacing(1.5),
            boxShadow: "1px 2px 2px 2px #cccccc",
            "& p": {
                color : "#aaaaaa",
                margin:0,
                padding:0,
                fontSize:'14px'
            },
            "& h4": {
             
                margin:0,
                padding:0

            },
            // "& img ": {
                // width:"48px",
                // height:"48px",
                // display:'inline-block'

            // },
        },

    }
}

export default style