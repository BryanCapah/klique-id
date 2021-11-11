import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovie = createAsyncThunk('movie/getMovies', async ({ page = 1, keyword = 'Batman' }) => {
    const data = await axios.get(`https://www.omdbapi.com?apikey=d492a296&s=${keyword}&page=${page}`)
    return data?.data
})