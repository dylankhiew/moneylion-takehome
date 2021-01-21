import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #41b48e 30%, #338a6d 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(65, 180, 142, .3)',
    margin: '10px',
    width: '200px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default StyledButton