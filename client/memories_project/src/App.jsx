import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.jpg';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { getPosts as fetchPosts } from './actions/posts'; // Rename the imported function

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }),[dispatch]

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.images} src={memories} alt='memories' height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify-content= "space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App