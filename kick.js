const { MessageEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
    const kickedMember = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    if (!kickedMember) {
        return message.channel.send("Le fugitif, n'a pas été trouvé !");
    }

    const kickReason = args.join(" ").slice(22);

    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("Vous n'avez pas la permission !");
    }

    if (kickedMember.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(
            "Vous ne pouvez pas expulser cette personne, car elle a les même permissions que vous !"
        );
    }

    const kickEmbed = new MessageEmbed()
        .setDescription("Log kick")
        .setColor("ff0000")
        .addField(
            "Utilisateur expulsé : ",
            `${kickedMember} (ID : ${kickedMember.id})`
        )
        .addField(
            "Auteur de l'expulsion : ",
            `${message.author} (ID : ${message.author.id})`
        )
        .addField("Salon où la commande a été effectué : ", message.channel);

    if (kickReason) kickEmbed.addField("Raison de l'expulsion : ", kickReason);
    if (!kickReason) kickEmbed.addField("Raison de l'expulsion : ", "Aucune raison donnée !");

    const kickChannel = message.guild.channels.cache.find(channel => channel.name === "logs-neux-bot");

    if (!kickChannel) {
        return message.channel.send(
            "Salon `logs-neux-bot` introuvable, merci de le créer !"
        );
    }

    kickedMember.kick(kickReason);

    kickChannel.send(kickEmbed);
};