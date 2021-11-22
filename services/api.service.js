import { getKeyValue } from "./storage.service.js";
import axios from "axios";

export const getWeather = async(city) => {
    const token = await getKeyValue('token');
    console.log(token)
    if (!token) {
        throw new Error('We dont have a APIKEY pls give a APIKEY -t [API_KEY]')
    }

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appid: token,
            lang: "eng",
        }
    })

    return data;
}