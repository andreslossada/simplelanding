import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    // ...theme.mixins.gutters(),
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#999',
  },
  footer: {
    backgroundColor: '#999',
    marginTop: theme.spacing(1),
    padding: `${theme.spacing(2)}px 0`,
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='h5' component='h3'>
          Creado por Andres Lossada
        </Typography>
        <Typography component='p'>@2022 All rights reserved</Typography>
      </Paper>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
