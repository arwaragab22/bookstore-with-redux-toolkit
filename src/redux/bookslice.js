import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getbooks = createAsyncThunk(
    "books/getbooks",
    async ( thunkAPI) => {


        const { rejectWithValue, getState } = thunkAPI;

        console.log(thunkAPI);
        try {
            const response = await fetch("http://localhost:3005/books");
            const data = await response.json();

            return data;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);

        }
    }
);
export const insertbook = createAsyncThunk("books/insertbook", async (d, thunkAPI) => {

    const { rejectWithValue, getState } = thunkAPI;
    d.username = getState().login.loginname;
    try {
        const response = await fetch("http://localhost:3005/books", {
            method: "POST",
            body: JSON.stringify(d),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        const data = await response.json();
        return data;


    }
    catch (error) {
        console.log(error.message);
        return rejectWithValue(error.message);
    }
});

export const deletebook = createAsyncThunk("books/deletebook", async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    const res=  await fetch(`http://localhost:3005/books/${user.id}`, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      //const data = await res.json();
        console.log(user.id)
        return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);






export const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        ispending: true,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        /*get books */
        [getbooks.pending]: (state, action) => {
            state.ispending = true;
            // Add user to the state array

        },
        // Add reducers for additional action types here, and handle loading state as needed
        [getbooks.fulfilled]: (state, action) => {
            // Add user to the state array
            state.ispending = false;
            state.books = action.payload;

        },
        [getbooks.rejected]: (state, action) => {
            // Add user to the state array
            state.ispending = false;
            state.error = action.payload;

            console.log(action.payload)
        },
        /*get books */
        [insertbook.pending]: (state, action) => {
            state.ispending = true;
            // Add user to the state array

        },
        // Add reducers for additional action types here, and handle loading state as needed
        [insertbook.fulfilled]: (state, action) => {
            // Add user to the state array
            state.ispending = false;
            state.books.push(action.payload);

        },
        [insertbook.rejected]: (state, action) => {
            // Add user to the state array
            state.ispending = false;
            state.error = action.payload;

            console.log(action.payload)
        },
        /*delete books */
        [deletebook.pending]:(state, action) => {
            state.ispending = true;
            state.error = null;
        },
        [deletebook.fulfilled]:(state, action) => {
           state.ispending = false;
            
            state.books = state.books.filter((ele) => {
                return ele.id!=action.payload.id
            })
           console.log(action)
        
        },
        [deletebook.rejected]:(state, action) => {
         state.ispending = false;

        }
    }
});

// Action creators are generated for each case reducer function


export default bookSlice.reducer;
