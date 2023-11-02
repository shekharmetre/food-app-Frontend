import axios from "axios";
export default axios.create({
	baseURL : import.meta.env.VITE_BACKENDURL
})
//  // using on production mode is running

