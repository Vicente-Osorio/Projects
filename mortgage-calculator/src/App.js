import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';


function App() {


  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  });


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth='xl' sx={{ marginTop: 8 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid xs={12} item md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid xs={12} item md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default App;
