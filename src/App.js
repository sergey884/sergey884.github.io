// import { useContext } from 'react';
import "./App.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Search from "./components/Search";
import FilterBlock from "./components/FilterBlock";
import ResourceList from "./components/ResourceList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { AppProvider } from "./AppContext";

export const App = () => {
  return (
    <AppProvider>
      <Paper style={{ height: "100%", width: "100%" }}>
        <Box style={{ display: "flex", width: "100%", height: "100vh" }}>
          <Container component="main" maxWidth={false} style={{ width: "70%" }}>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <Paper elevation={5} style={{ marginTop: "50px" }}>
                  <Grid container spacing={2}>
                    <Grid item lg={12}>
                      <Paper
                        style={{ marginLeft: "50px", marginRight: "50px" }}
                      >
                        <Search />
                      </Paper>
                    </Grid>
                    <Grid item lg={12}>
                      <FilterBlock />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item lg>
                <Paper elevation={5}>
                  <ResourceList />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
    </AppProvider>
  );
};

export default App;
