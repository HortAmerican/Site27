const Discord = require('discord.js')

module.exports.execute = async(CLIENT, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas la permission !");
    }

    const SayMessage = args.join(" ");
    message.delete()
    message.channel.send(SayMessage)
    
}