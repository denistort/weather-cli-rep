import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs';

const filePath = join(homedir(), './weather-data.json');

export const saveKeyValue = async(key, value) => {
    let data = {}
    if (await isExist(filePath)) {
        try {
            const file = await promises.readFile(filePath, 'utf-8')
            data = JSON.parse(file)
        } catch (error) {
            throw new Error(error)
        }
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data))
}

export const getKeyValue = async(key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath, 'utf-8')
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined;
}
const isExist = async(path) => {
    try {
        await promises.stat(path)
        return true;
    } catch (error) {
        return false
    }
}