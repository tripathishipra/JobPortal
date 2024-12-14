import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:'dknrktyhj',
    api_key:'516772815871176',
    api_secret:'IHQWqMTXTJhKo1A6qwcy9KC7OlY'
});
export default cloudinary;