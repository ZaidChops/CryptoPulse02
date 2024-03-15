import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCoin:null,
  chart: "",
  route: "",
};

export const cryptoSlice = createSlice({
  name: "Crypto",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      // console.log(action.payload)
      state.allCoin = action.payload;
    },

    nameRoute: (state, action) => {
      // console.log("hhhh", action);
      state.route = action.payload;
    },
  },
});

export const { addCoin, nameRoute } = cryptoSlice.actions;
export default cryptoSlice.reducer;
