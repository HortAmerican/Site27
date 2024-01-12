const { MessageEmbed, Message } = require('discord.js');
const { prefix } = require('../config.json');

module.exports.execute = async(CLIENT, message, args) =>
{
    let cmdMember = `\`17\`, \`blague\`, \`bonjour\`, \`fouet\`, \`help\`, \`lc\`, \`ping\`, \`sel\`, \`serveurinfo\`, \`uptime\`, \`userinfo\`, \`weepdance\`, \`weepthune\``;
    let cmdAdmin = `\`ban\`, \`clear\`, \`kick\`, \`mute\`, \`say\``;
    let cmdAnswer = `\`<@1066690811858788362> (mention du bot)\`, \`Reine\`, \`Princesse\`, \`Mini-Pok\`, \`Flo\`, \`Bernach\`, \`P'tit Chevalier\`, \`Weep\`, \`Dott\`, \`Neuxiie\`, \`Mamie\`, \`Trankillement à base de trankillade\`, \`Dorte\`, \`Shananananana\`, \`Pas d'panique à bord\`, \`Tu es un sorcier Weep !\`, \`[l'alphabet de A à Z]\``;

    if(!args[0])
    {
        let embed = new MessageEmbed()

        .setColor('0097c7')
        .setAuthor(`Neux Help`, message.guild.iconURL({dynamic: true, size: 512}))
        .setThumbnail(CLIENT.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Voici toutes les commandes disponibles pour \`${CLIENT.user.username}\` \n Le préfix du bot est \`${prefix}\``)
        .addField('Commandes pour les membres : ', cmdMember)
        .addField('Commandes pour le staff : ', cmdAdmin)
        .addField('Réponses automatiques (merci de faire l\'alphabet dans "commandes-bot") : ', cmdAnswer)
        .setFooter(`Neux Bot | help demandée par ${message.author.username}`, CLIENT.user.displayAvatarURL({dynamic: true, size: 512}))
        message.channel.send(embed)
        message.delete()
    }
}