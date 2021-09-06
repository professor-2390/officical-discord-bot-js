const { glob } = require("glob");

const { promisify } = require("util");

const globPromise = promisify(glob);


module.exports = async (client) => {
    const commandfiles = await globPromise(`${process.cwd()}/commands/**/*.js`)
    commandfiles.map((value) => {
        const file = require(value)
        const splitted = value.split('/')
        const directory = splitted[splitted.length - 2]

        if (file.name) {
            const properties = {directory, ...file}
            client.commands.set(file.name, properties)
        }
    })

    // Event Handler
    const eventfiles = await globPromise(`${process.cwd()}/event/*.js`)
    eventfiles.map((value) => require(value))
}