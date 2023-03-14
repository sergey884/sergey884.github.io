import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Search from './components/Search';
import FilterBlock from './components/FilterBlock';
import ResourceList from './components/ResourceList';
import Container from '@mui/material/Container';
import { AppProvider } from './AppContext';

export const App = () => {
  return (
    <AppProvider>
      <Paper style={{ minHeight: '100vh', height: '100%', width: '100%', display: 'inline-block' }}>
        <Container component="main" maxWidth={false} style={{ width: '70%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper elevation={5} style={{ marginTop: '50px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper style={{ marginLeft: '50px', marginRight: '50px' }}>
                      <Search />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FilterBlock />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs sm md lg>
              <Paper
                elevation={5}
                style={{
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                }}
              >
                <ResourceList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </AppProvider>
  );
};

export default App;
