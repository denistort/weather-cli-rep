import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (error) => {
    console.log(chalk.bgRed('  ERROR  ') + error)
}

export const printSucces = (text) => {
    console.log(chalk.bgGreen(' SUCCES ') + text)
}

export const printHelp = () => {
    console.log(
        dedent `${chalk.bgMagenta(chalk.whiteBright("Help!"))}
			Without any parametrs = showing the weather.
			😜
			Available parameters:
			✔ -s [city] = installing name of city that you want
			✔ -h [help] = showing help
			✔ -t [API_KEY] = saving api key

		`
    )
}

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return "☀"
        case '02':
            return "⛅"
        case '03':
            return "☁"
        case '04':
            return "☁"
        case '09':
            return "🌧"
        case '10':
            return "🌦"
        case '11':
            return "☁"
        case '13':
            return "🌨"
        case '50':
            return "🌤"
        default:
            break;
    }
}
export const printWeather = (weather) => {
    console.log(dedent `
	-------------------------------------
	City: ${weather.name}
	Country: ${weather.sys.country}
	-------------------------------------
	${chalk.bgGreen(chalk.black("  TODAY  "))}
	✔  -> ${weather.weather[0].main} ${getIcon(weather.weather[0].icon)}
	✔  -> Description: ${weather.weather[0].description}
	✔  -> Current temperature: ${Math.round(weather.main.temp)}c
	✔  -> Feels like: ${Math.round(weather.main.feels_like)}c
	✔  -> Wind-speed: ${weather.wind.speed}
	✔  -> Feels like: ${weather.main.pressure}
	✔  -> Humidity ${weather.main.humidity}

	`)
}