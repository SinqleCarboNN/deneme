//HAZIR KODU BURADADIR.
const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'bot prefix'
module.exports = client => {
  
  const aktiviteListesi = [
    
    `SA BEN GELDIM`
  ]

// Set the client user's status
 client.user.setStatus('idle')
  .then(console.log)
  .catch(console.error);
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}


