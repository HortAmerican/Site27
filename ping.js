module.exports =
{
    name: "ping",
    execute(client, message, args)
    {
        message.delete();
        message.channel.send("Pong !").then(msg =>
        {
            message.channel.send(`>>> Latence de : ${msg.createdTimestamp - message.createdTimestamp} ms.`);
            console.log(`Réponse donnée, ping de : ${msg.createdTimestamp - message.createdTimestamp} ms`);
        })
    }
}