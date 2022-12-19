import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/config";


const initialState = {
    rentalItems: [],
    errMsg: '',
}

export const getSpecific = createAsyncThunk('rental/getSpecific',
    async (id) => {
        const res = await axios.get(`/rental/${id}`);
        return res.data;
    }
)


export const getStoreRentalItems = createAsyncThunk('rental/getStoreRentalItems',
    async (id) => {
        const res = await axios.get(`/rentalstore/${id}`);
        return res.data;
    }
)

export const getAllRentals = createAsyncThunk('rental/getAllRentals',
    async () => {
        const res = await axios.get('/rental');
        return res.data;
    }
);


export const createItem = createAsyncThunk('rental/createItem',
    async (item) => {
        const created = await axios.post('/rental', item);
        return created.data;
    }
);

export const deleteRentalItem = createAsyncThunk('rental/deleteRentalItem',
    async (id) => {
        const res = await axios.delete(`/rental/${id}`);
        return id;
    }
);



export const updateItem = createAsyncThunk('rental/updateItem',
    async (id, data) => {
        const res = await axios.put(`/rental/${id}`, data);
        return res.data[1][0];
    }
);

export const getRentalByCategory = createAsyncThunk('rental/getRentalByCategory',
    async (categoryId) => {
        const rentalItems = await axios.get(`/rentalcat/${categoryId}`);
        return rentalItems.data;
    }
);


export const getRentalByPrice = createAsyncThunk('rental/getRentalByPrice',
    async (price) => {
        const rentalItems = await axios.get(`/rentalprice/${price}`);
        return rentalItems.data;
    }
);


export const getRentalByName = createAsyncThunk('rental/getRentalByName',
    async (name) => {
        const rentalItems = await axios.get(`/rentalkey?keyWord=${name}`);
        return rentalItems.data;
    }
);

// export const getRentalCatByPrice = createAsyncThunk('rental/getRentalCatByPrice',
//     async (price, categoryId) => {
//         console.log(categoryId)
//         const res = await axios.get(`/rentalcat/${categoryId}`);
//         const rental1 = res.data(item =>  item.price >= price )
//         return res.data;
//     }
// );


export const rentalItemsSlice = createSlice({
    name: 'rental',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllRentals.fulfilled, (state, action) => {
                state.rentalItems = action.payload;
            })
            .addCase(getStoreRentalItems.fulfilled, (state, action) => {
                state.rentalItems = action.payload;
            })
            .addCase(getAllRentals.rejected, (state, action) => {
                state.errMsg = action.payload;
            })
            .addCase(getSpecific.fulfilled, (state, action) => {
                state.rentalItems = action.payload;
            })
            .addCase(getSpecific.rejected, (state, action) => {
                state.errMsg = action.payload;
            })
            .addCase(deleteRentalItem.fulfilled, (state, action) => {
                const newRentalItems = state.rentalItems.filter((item) => item.id !== action.payload);
                state.rentalItems = newRentalItems;
            })
            .addCase(deleteRentalItem.rejected, (state, action) => {
                state.errMsg = action.payload;
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                const newRental = state.rentalItems.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                });
                state.rentalItems = [...newRental];
            })
            .addCase(getRentalByCategory.fulfilled, (state, action) => {
                state.rentalItems = action.payload;
            })
            .addCase(getRentalByCategory.rejected, (state, action) => {
                state.errMsg = action.error;
            })
            .addCase(getRentalByPrice.fulfilled, (state, action) => {
                state.rentalItems = action.payload;
            })
            .addCase(getRentalByPrice.rejected, (state, action) => {
                state.errMsg = action.error;
            })
            .addCase(getRentalByName.fulfilled, (state, action) => {
                state.rentalItems = action.payload;
            })
            .addCase(getRentalByName.rejected, (state, action) => {
                state.errMsg = action.error;
            })
            // .addCase(getRentalCatByPrice.fulfilled, (state, action) => {
            //     state.rentalItems = action.payload;
            // })

            ;
    }
})

export const selectRentalItemsState = (state) => state;


export default rentalItemsSlice.reducer;

