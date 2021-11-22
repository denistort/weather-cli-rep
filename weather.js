#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSucces, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue } from './services/storage.service.js';

const saver = async(key, key_api) => {
    if (!key_api.length) {
        printError('Instead of token you give me nothing')
        return;
    }
    try {
        await saveKeyValue(key, key_api)
        printSucces('Token has been saved')
    } catch (error) {
        printError(error.message)
    }
}

const getForecast = async(city) => {
    try {
        const weather = await getWeather(city);
        printWeather(weather);
    } catch (error) {
        printError(error.message)
    }

}
const getCity = async() => {
    const city = await getKeyValue('city');
    return city;
}

const showingWeather = async() => {
    const city = await getCity();
    getForecast(city);
}
const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.t) {
        return saver("token", args.t);
    }
    if (args.s) {
        return saver("city", args.s)
    }
    if (args.h) {
        printHelp()
    }
    showingWeather();

}

initCLI();