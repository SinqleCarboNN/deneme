
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Warrior Project!`)
.setDescription(`
<a:ticket:761211197071687711> **Duello** 
▫️ Kullanım \`${prefix}duello\`
<a:ticket:761211197071687711> **Fbi-Gif** 
▫️ Kullanım \`${prefix}fbi\`
<a:ticket:761211197071687711> **Ters Yazı** 
▫️ Kullanım \`${prefix}tersyazı\`
<a:ticket:761211197071687711> **Wasted** 
▫️ Kullanım \`${prefix}wasted\`
`)
.setImage("https://cdn.discordapp.com/avatars/763453621818884137/e4d7dc219e8ac2da4a01771fa0cf70b2.png?size=2048")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eglence'], 
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};

