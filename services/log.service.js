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