import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';



export const Modal = ({ close, signUp, open, title, email, username, password, onChange, children }) => (
    <Dialog onClose={close} open={open}>
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
            <Button onClick={close} color="primary">
                Cancel
            </Button>
            <Button onClick={signUp} color="primary">
                Register
            </Button>
        </DialogActions>
    </Dialog >
)