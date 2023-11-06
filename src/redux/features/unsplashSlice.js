import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    likedPhotos: [],
    theme: 'light',
    user: null,
}

const unsplashSlice = createSlice({
    name: 'unsplash',
    initialState,
    reducers: {
        addlikePhotos: (state, {payload}) => {
            const isImageAlreadyAdded = state.likedPhotos.every((image)=>{
                return image.id!==payload.id 
            })
            if(isImageAlreadyAdded) {
                state.likedPhotos=[...state.likedPhotos, payload]
            } 
        }
    }
})


export default unsplashSlice.reducer
export const {addlikePhotos} = unsplashSlice.actions