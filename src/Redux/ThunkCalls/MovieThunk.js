import { createAsyncThunk } from "@reduxjs/toolkit";
import {  getMovies } from "../../API/ApiHandler";

const getHindiMovies=createAsyncThunk('popular',async (category)=>{
    const response=await getMovies(1,'hi');
    if(response.status==200){
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching popular movies',error)
    }
}else{
    return [];
}

});
const getKannadaMovies=createAsyncThunk('upcoming',async (category)=>{
    const response = await getMovies(1, 'kn');
    if (response.status){
			try {
				return response.data.results;
			} catch (error) {
				console.log('error while fetching upcoming movies', error);
			}
        }else{
            return []
        }

})

const getTelaguMovies=createAsyncThunk('toprated',async (category)=>{
    const response = await getMovies(1, 'te');
    if(response.status==200){
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching toprated movies',error)
    }
}else{
    return [];
}

})
const getTamilMovies=createAsyncThunk('tamil',async (category)=>{
    const response = await getMovies(1, 'ta');
    if(response.status==200){
    try {
        return response.data.results;
    } catch (error) {
        console.log('error while fetching toprated movies',error)
    }
    }else{
        return []
    }

})
export {
    getHindiMovies,
    getKannadaMovies,
    getTelaguMovies,
    getTamilMovies

}