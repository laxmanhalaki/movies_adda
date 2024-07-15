import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHindi, getTelagu, getKannada, getTamil } from "../../API/ApiHandler";

const getHindiMovies=createAsyncThunk('popular',async (category)=>{
    const response=await getHindi(category);
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching popular movies',error)
    }

});
const getKannadaMovies=createAsyncThunk('upcoming',async (category)=>{
    const response=await getKannada(category);
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching upcoming movies',error)
    }

})

const getTelaguMovies=createAsyncThunk('toprated',async (category)=>{
    const response=await getTelagu(category);
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching toprated movies',error)
    }

})
const getTamilMovies=createAsyncThunk('tamil',async (category)=>{
    const response=await getTamil(category);
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching toprated movies',error)
    }

})
export {
    getHindiMovies,
    getKannadaMovies,
    getTelaguMovies,
    getTamilMovies

}