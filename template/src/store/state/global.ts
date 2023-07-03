import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isLoadingGlobal: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoadingGlobal: (state, action: PayloadAction<boolean>) => {
            state.isLoadingGlobal = action.payload;
        },
    },
});

export const { setIsLoadingGlobal } = globalSlice.actions;

export default globalSlice.reducer;
