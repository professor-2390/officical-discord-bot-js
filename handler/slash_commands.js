const chalk = require('chalk');
const fs = require('fs');
const {
    commands
} = require('../index');
const {
    readdirSync
} = fs;
const client = require('../index');

console.log(chalk.blue.bold('Slash Commands'))
readdirSync('./slashCommands').forEach(async (dir) => {
    const commands = readdirSync(`./slashCommands/${dir}/`).filter((file) => 
        file.endsWith(".js")
    )


        commands.map(async cmd => {
            let file = require(`../slashCommands/${dir}/${cmd}`);

            let name = file.name || "No command name.";
            let description = file.description || "No Description";
            let options = file.options || [];

            const data = {
                name,
                description,
                options
            }

            let option = name == "No command name." ? '❌' : '✅';

            console.log(`Loaded Slash Command ${option} | ${name}`);

            if (option == '✅') {
                setTimeout(async () => {
                    client.slash_commands.set(name, {
                        ...data,
                        run: file.run
                    });
                    // await client.guilds.cache.get('881887185228402771').commands.create(data) //let me get my guidl id

                }, 2500);
            
            }
        })        

    //that should fix it
})