import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";

const initialState = {
  package: {},
  errMsg: "",
};

export const createPackage = createAsyncThunk(
  "package/createPackage",
  async (data) => {
    const newCreated = await axios.post("/package", data);
    console.log(newCreated.data);
    return newCreated.data;
  }
);

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPackage.fulfilled, (state, action) => {
        state.package = action.payload;
      })
      .addCase(createPackage.rejected, (state, action) => {
        state.errMsg = action.error;
      });
  },
});

export const selectPackageState = (state) => state;

export default packageSlice.reducer;
