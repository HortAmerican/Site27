const { MessageEmbed } = require("discord.js");

module.exports.execute = async (CLIENT, message, args) => {
    const banedMember = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    if (!banedMember) {
        return message.channel.send("Le fugitif, n'a pas été trouvé !");
    }

    const banReason = args.join(" ").slice(22);

    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("Vous n'avez pas la permission !");
    }

    if (banedMember.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(
            "Vous ne pouvez pas expulser cette personne, car elle a les même permissions que vous !"
        );
    }

    const banEmbed = new MessageEmbed()
        .setDescription("Log ban")
        .setColor("ff0000")
        .addField(
            "Utilisateur expulsé : ",
            `${banedMember} (ID : ${banedMember.id})`
        )
        .addField(
            "Auteur du bannissement : ",
            `${message.author} (ID : ${message.author.id})`
        )
        .addField("Salon où la commande a été effectué : ", message.channel);

    if (banReason) banEmbed.addField("Raison du bannissement : ", banReason);
    if (!banReason) banEmbed.addField("Raison du bannissement : ", "Aucune raison donnée !");

    const banChannel = message.guild.channels.cache.find(channel => channel.name === "logs-neux-bot");

    if (!banChannel) {
        return message.channel.send
        (

            "Salon `logs-neux-bot` introuvable, merci de le créer !"
        );
    }

    banedMember.ban({ days: 0, reason: banReason });
    
    banChannel.send(banEmbed);
};