import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";

const initialState = {
  events: [],
  errMsg: "",
};

export const getAllEvents = createAsyncThunk("event/getAllEvents", async () => {
  const events = await axios.get("/event");
  return events.data;
});

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (payload) => {
    const res = await axios.post("/event", payload);
    return res.data;
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (payload) => {
    const res = await axios.put(`/category/${payload.id}`, payload.newCategory);
    return res.data;
  }
);
export const deleteEvent = createAsyncThunk(
  "event/deleteEvent",
  async (payload) => {
    const res = await axios.delete(`/event/${payload.id}`, {
      headers: {
        //TODO:add check authorization method in the backend
        Authorization: `Bearer ${payload.accessToken}`,
      },
    });
    return res.data;
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.errMsg = action.error;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.errMsg = action.error;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const newCategories = state.categories.map((item) => {
          //TODO:edit the query in the backend
          if (item.id === action.payload.result.foundCategory.id) {
            return action.payload.result.foundCategory;
          }
          return item;
        });
        state.categories = [...newCategories];
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.errMsg = action.error;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        const newEvents = state.events.filter(
          (item) => item.id !== action.payload
        );
        state.categories = [...newEvents];
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.errMsg = action.error;
      });
  },
});

export const selectEventState = (state) => state;

export default eventSlice.reducer;
