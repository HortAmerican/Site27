module.exports = {
    execute(client, message, args) {
        message.delete()
        days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 60).toString()
        hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 60).toString()
        minuts = Math.floor((client.uptime / (1000 * 60)) % 60).toString()
        seconds = Math.floor((client.uptime / 1000) % 60).toString()

        message.channel.send(`Mon temps en ligne est de : ${days}j ${hours}h ${minuts}m ${seconds}s`)
        message.channel.send(`Temps en ligne demandé par : ${message.author.username}`)
    }
}