const styles = theme => ({
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacingUnit * 3,
        marginRight: theme.spacingUnit * 3,
        [theme.breakpoints.up("md")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit*2}px ${theme.spacing.unit*3}px ${theme.spacing.unit*3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
})

export default styles