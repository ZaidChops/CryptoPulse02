import axios from "axios";

export const allCoindata = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const oneCoinData = async (coin) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}`
    );
    console.log(response.data);
    // return response.data;
  } catch (error) {
    console.log(error);
  }
};
// https://api.coingecko.com/api/v3/coins
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=inr&from=1392577232&to=1422577232
