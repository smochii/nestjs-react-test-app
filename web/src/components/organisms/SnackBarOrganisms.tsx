import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useRecoilState, useRecoilValue } from 'recoil';
import { snackBarOpenState, snackBarMessageState, snackBarSeverityState } from '../../states/SnackBarState';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarOrganisms: React.FC = () => {
  const [open, setOpen] = useRecoilState(snackBarOpenState);
  const message = useRecoilValue(snackBarMessageState);
  const severity = useRecoilValue(snackBarSeverityState);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarOrganisms;