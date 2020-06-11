const styles = (theme) => {
    return {
        file: {
            width: '100%',
            height: "26%",
            paddingLeft: theme.spacing(0.8),
            paddingRight: theme.spacing(0.8),
            boxSizing:"border-box",
            marginTop:"1%",
            marginBottom:"1%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& img": {
                width: "34px",
                height: "34px"
            },
            "& h4": {
               padding:0,
               margin:0
            },
            "& span:nth-child(4)": {
                color: "#aaaaaa"
            },
        }
    }
}

export default styles