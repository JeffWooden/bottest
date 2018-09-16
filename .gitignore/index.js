const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
  bot.user.setGame("Tuto bot !");
  console.log("Eyh");
});

bot.login("NDg4MzE4NTc5NzU4ODU4MjYy.Dn-2SA.h4udEQ9keZ62kR0VOAOyrLQCKC4");
