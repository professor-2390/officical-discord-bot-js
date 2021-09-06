const client = require("../index");

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    let cmd = client.slash_commands.get(interaction.commandName);
    if (!cmd)
      return (
        interaction.followUp({
          content: "This command no longer exists",
        }) && client.slash_commands.delete(interaction.commandName)
      );

    await interaction.deferReply().catch((e) => {});
    let options = interaction.options._hoistedOptions;

    cmd.run(client, interaction, options);
  }
});
