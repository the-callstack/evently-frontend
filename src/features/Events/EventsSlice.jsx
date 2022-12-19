import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";

const initialState = {
    events: [],
    eventsitems: [],
    errMsg: ''
}

export const getAllEvents = createAsyncThunk('event/getAllEvents',
    async () => {
        const events = await axios.get('/event');
        return events.data;
    }
);
export const getEventsitem = createAsyncThunk('event/getEventsitem',
    async (id, param1, param2) => {
        const events = await axios.get(`/event/${id}?`, {
            params: {
                cats: param1,
                items: param2
            }
        });
        console.log(events.data.categories[0].rentalItems)
        // console.log(events.data.categories[1])
        
        return events.data;
    })

export const createEvent = createAsyncThunk('event/createEvent',
    async (payload) => {

    }
);

export const updateEvent = createAsyncThunk('event/updateEvent',
    async (payload) => {

    }
);
export const deleteEvent = createAsyncThunk('event/deleteEvent',
    async (payload) => {

    }
);




export const eventSlice = createSlice({
    name: 'event',
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
            .addCase(getEventsitem.fulfilled, (state, action) => {
                state.eventsitems = action.payload;
            })
            .addCase(getEventsitem.rejected, (state, action) => {
                state.errMsg = action.error;
            })


    }

});



export const selectEventState = (state) => state;

export default eventSlice.reducer;


