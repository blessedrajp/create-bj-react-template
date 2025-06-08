import {apiGet} from '@/services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';

// get the users

export const getUsers=createAsyncThunk(
    'users/getusers',
     async()=>{
        try {
            const response=await apiGet('api/user')
            return response
        } catch (error) {
            console.log(error,"error fething the user");
        }
    } 
)
