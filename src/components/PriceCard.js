
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function PriceCardData(props) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  const BTC = () =>
    "BTC = $" + (Math.round(props.price * 100) / 100).toLocaleString();
  const SAT1 = () => "1 SAT = $" + (props.price / 100000000).toFixed(5);
  const SATS1000 = () =>
    "1,000 SATS = $" +
    (Math.round((props.price / 100000) * 100) / 100).toFixed(2);
  const SATS10000 = () =>
    "10,000 SATS = $" +
    (Math.round((props.price / 10000) * 100) / 100).toLocaleString();
  const SATS100000 = () =>
    "100,000 SATS = $" +
    (Math.round((props.price / 1000) * 100) / 100).toLocaleString();
  const SATS1000000 = () =>
    "1,000,000 SATS = $" +
    (Math.round((props.price / 100) * 100) / 100).toLocaleString();

  const Flag = () => {
    if (props.country === "AU") {
      return <img src="../AU.jpg" width="100" alt="Australia" />;
    }
    if (props.country === "US") {
      return <img src="../US.jpg" width="100" alt="UAS" />;
    }

    if (props.country === "NZ") {
      return <img src="../NZ.jpg" width="100" alt="New Zealand" />;
    }

    //
  };
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          width: 350,
        },
      }}
      style={style}
    >
      <Paper elevation={8}>
        <Grid container spacing={2}>
          <Grid item xs={4} style={style}>
            <Flag />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid pt={2}>
                <Div>
                  <BTC />
                </Div>
                <Div>
                  <SAT1 />
                </Div>
                <Div>
                  <SATS1000 />
                </Div>
                <Div>
                  <SATS10000 />
                </Div>
                <Div>
                  <SATS100000 />
                </Div>
                <Div>
                  <SATS1000000 />
                </Div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
