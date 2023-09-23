import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFilms, fetchSearch } from './counterAPI';

const initialState = {
  filmList: [],
  filmListFiltered: [],
  status: '',
  searchValue: '',
  selectedFilmId: '',
  category: 'popular',
};

export const getFilms = createAsyncThunk(
  'fetchFilms',
  async (data) => {
    const response = await fetchFilms(data);
    return response;
  }
);

export const searchFilm = createAsyncThunk(
  'searchFilm',
  async (data) => {
    const response = await fetchSearch(data);
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // filterFilms: (state, action) => {
    //   state.filmListFiltered = state.filmList.filter((item)=>{
    //     return item.title.toLowerCase().includes(action.payload.toLowerCase());
    //   })
    // },
    search: (state, action) => {
      state.searchValue = action.payload;
    },
    selectFilmId: (state, action) => {
      state.selectedFilmId = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFilms.fulfilled, (state, action) => {
        state.status = 'idle';
        state.filmList = action.payload;
        state.filmListFiltered = action.payload;
      })
      .addCase(searchFilm.fulfilled, (state, action) => {
        state.status = 'idle';
        state.filmListFiltered = action.payload;
      })
      .addCase(searchFilm.pending, (state, action) => {
        state.status = 'loading';
        state.filmListFiltered = action.payload;
      })
  },
});

export const { filterFilms, search, selectFilmId, setCategory } = counterSlice.actions;

export const selectFilms = (state) => state.counter.filmListFiltered;
export const selectValue = (state) => state.counter.searchValue;
export const selectStatus = (state) => state.counter.status;
export const selectCurrentFilm = (state) => {
  return state.counter.filmListFiltered?.find((film) => {
    return film.id === +state.counter.selectedFilmId;
  });
}
export const selectCategory = (state) => state.counter.category;



export default counterSlice.reducer;
