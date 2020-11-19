const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
exports.run = function(client, message) {
  
let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`F L E X`)
.setDescription(`
<a:ticket:761211197071687711> **Gelişmiş Forge Ban Sistemi** 
▫️ Kullanım \`${prefix}forge-ban\`
<a:ticket:761211197071687711> **Gelişmiş Çekiliş Sistemi** 
▫️ Kullanım  \`${prefix}çekiliş\`
<a:ticket:761211197071687711> **Gelişmiş Otorol Sistemi** 
▫️ Kullanım  \`${prefix}otorol\`
<a:ticket:761211197071687711> **Gelişmiş İnvite Sistemi** 
▫️ Kullanım  \`${prefix}invite\`
<a:ticket:761211197071687711> **Gelişmiş Ban Sistemi** 
▫️ Kullanım \`${prefix}ban\`
<a:ticket:761211197071687711> **Gelişmiş Küfür Engel Sistemi** 
▫️ Kullanım  \`${prefix}küfür-engel\`
<a:ticket:761211197071687711> **Gelişmiş Reklam Engel Sistemi** 
▫️ Kullanım \`${prefix}reklam-engel\`
<a:ticket:761211197071687711> **Gelişmiş Sa-As Sistemi** 
▫️ Kullanım  \`${prefix}sa-as\`
<a:ticket:761211197071687711> **Gelişmiş Un Ban**  
▫️ Kullanım    \`${prefix}unban\`
<a:ticket:761211197071687711> **Gelişmiş Yavaş Mod Sistemi** 
▫️ Kullanım    \`${prefix}yavaş-mod\`
<a:ticket:761211197071687711> **Gelişmiş Kick Sistemi**  
▫️ Kullanım  \`${prefix}kick\`
<a:ticket:761211197071687711> **Gelişmiş Mesaj Temizleme Sistemi** 
▫️ Kullanım  \`${prefix}sil\`
<a:ticket:761211197071687711> **Gelişmiş Duyuru Sistemi** 
▫️ Kullanım  \`${prefix}duyuru\`
<a:ticket:761211197071687711> **Birikmiş Mesaj Silme Sistemi** 
▫️ Kullanım \`${prefix}sil\`

`)
.setImage("https://cdn.discordapp.com/attachments/710929418809507860/773280327787085884/discord_bot_menu_220x220.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};