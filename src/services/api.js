import axios from 'axios';
export const categoryMovies = async (API_URL)=>{
    try {
        let resp=  await axios.get(API_URL);
        //get ek resp return karti hai
        return resp.data;
    } catch (error) {
        console.log('error while calling the api', error.message);
        return error.resp.data;
        
    }
}