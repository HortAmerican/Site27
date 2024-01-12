const Discord = require('discord.js')

module.exports.execute = async(client, message, args) => {

    let ServerEmbed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
    .addField('Nom du serveur :', `${message.guild.name}`)
    .addField('Propriétaire du serveur :', message.guild.owner)
    .addField('Nombre de membre :', message.guild.memberCount)
    .addField('Nombre de rôle(s) :', message.guild.roles.cache.size)
    .addField('Serveur crée le :', message.guild.createdAt)
    .setFooter(`Informations demandées par : ${message.author.username}`)

    message.channel.send(ServerEmbed)
    message.delete()
}