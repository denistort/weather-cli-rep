#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSucces } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async(key_api) => {
    if (!key_api.length) {
        printError('Instead of token you give me nothing')
        return;
    }
    try {
        await saveKeyValue("token", key_api)
        printSucces('Token has been saved')
    } catch (error) {
        printError(error.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.t) {
        return saveToken(args.t);
    }
    if (args.s) {}
    if (args.h) {
        printHelp()
    }
    getWeather('moscow')
}

initCLI();