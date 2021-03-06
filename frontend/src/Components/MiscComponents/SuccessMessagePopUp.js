import React, {useState} from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function SuccessMessage(props){

    const [open, setOpen] = useState(true)

    function Alert(props){
        return <MuiAlert elevation={6} variant="filled" {...props}/>
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setOpen(false)
    }

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}>
                <Alert severity="success" onClose={handleClose}>
                    <Typography style={{fontWeight: 650}}>{props.message}</Typography>
                </Alert>
            </Snackbar>
        </div>
    )
}