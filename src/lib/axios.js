import axios from "axios";

const config = {
	baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:5555/' : 'https://api.littleregistry.ca/'
}

export const AxiosClient = axios.create(config)