import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const SigninUp = createAsyncThunk('auth/SigninUp', async(newUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/register',newUser)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }
})

export const SignInn = createAsyncThunk('auth/SignInn', async(user,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/login',user)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }

})

const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        isLoading: false,
        user: JSON.parse(localStorage.getItem('user')),
        token:localStorage.getItem('token'),
        isAuth: Boolean(localStorage.getItem('isAuth')),
        msg:null,
        RegisterErrors: null,
        LoginErrors:null
        },

        reducers:{
            logOut: (state)=>{
                state.user = null
                state.token = null
                state.isAuth = false
                localStorage.clear()
            }
        },
        extraReducers:{
            [SigninUp.pending]: (state)=>{
                state.isLoading = true
            },
            [SigninUp.fulfilled]: (state, {type,payload})=>{
              state.isLoading = false
              state.msg = payload.msg
            },
            [SigninUp.rejected]: (state,{type,payload})=>{
                state.RegisterErrors = payload
            },
            [SignInn.pending]: (state)=>{
                state.isLoading = true
            },
            [SignInn.fulfilled]: (state, {type,payload})=>{
              state.isLoading = false
              state.user = payload.isfound
              state.token = payload.token
              state.isAuth = true
              localStorage.setItem('token',payload.token )
              localStorage.setItem('user',JSON.stringify(payload.isfound) )
              localStorage.setItem('isAuth', true)
             
            },
            [SignInn.rejected]: (state,{type,payload})=>{
                state.LoginErrors = payload
            }

        }
})

export default AuthSlice.reducer
export const {logOut}= AuthSlice.actions