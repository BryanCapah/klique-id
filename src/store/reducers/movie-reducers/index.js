import { createSlice } from '@reduxjs/toolkit'
import { getMovie } from '../../../api/movie'

const initialState = {
    list: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: {
        // [getMovie.pending]: (state) => {
        //     state.loading = true
        // },
        [getMovie.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = state.list.concat(payload.Search)

        },
        // [getMovie.rejected]: (state) => {
        //     state.loading = false
        // },
    }
})

// getter
export const getLoading = state => state.movie.loading
export const getMovieList = state => state.movie.list

//setter
export const { getMovieDetail, getMovies } = movieSlice.actions
export default movieSlice.reducer
