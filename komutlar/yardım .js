const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Warrior Project!`)
.setDescription(`
<a:ticket:761211197071687711> **Moderasyon Komutları.** 
▫️ Kullanım \`${prefix}moderasyon\`
<a:ticket:761211197071687711> **Eğlence  Komutları.** 
▫️ Kullanım  \`${prefix}eğlence\`
<a:ticket:761211197071687711> **Botumuzun Komutları.** 
▫️ Kullanım \`${prefix}bot\`
<a:ticket:761211197071687711> **Kullanıcı Komutları.** 
▫️ Kullanım  \`${prefix}kullanıcı\`
<a:ticket:761211197071687711> **Logo Komutları.**  
▫️ Kullanım    \`${prefix}logo\`
<a:ticket:761211197071687711> **Koruma Komutları.** 
▫️ Kullanım    \`${prefix}koruma\`
<a:ticket:761211197071687711> **Eğlence2 Komutları.** 
▫️ Kullanım  \`${prefix}eğlence2\`


`)
.setImage("https://cdn.discordapp.com/attachments/710929418809507860/773280327787085884/discord_bot_menu_220x220.png")//
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};