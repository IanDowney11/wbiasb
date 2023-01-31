import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PriceCard from "./PriceCard";

function App() {
  const [usPrice, setUSPrice] = useState(0);
  const [auPrice, setAUPrice] = useState(0);
  const [nzPrice, setNZPrice] = useState(0);

  const getPrice = () => {
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
      .then((res) => {
        setUSPrice(res.data.data.amount);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.coinbase.com/v2/prices/BTC-AUD/spot")
      .then((res) => {
        setAUPrice(res.data.data.amount);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.coinbase.com/v2/prices/BTC-NZD/spot")
      .then((res) => {
        setNZPrice(res.data.data.amount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPrice();
  }, []);

  // Run these functions every 5 seconds after initial page load
  useEffect(() => {
    const interval = setInterval(() => {
      getPrice();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <PriceCard price={auPrice} country="AU" />
      <PriceCard price={usPrice} country="US" />
      <PriceCard price={nzPrice} country="NZ" />
    </div>
  );
}

export default App;
