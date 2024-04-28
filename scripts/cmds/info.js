const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info2",
    version: "1.0",
    author: Meera Rajput",
    countDown: 0,
    role: 0,
    shortDescription: { vi: "", en: "" },
    longDescription: { vi: "", en: "" },
    category: "owner",
    guide: { en: "" },
    envConfig: {}
  },
  onStart: async function ({ message }) {
    const botName = "[❤️].<_𝗦𝘁𝗿𝗮𝘄𝗯𝗲𝗿𝗿𝘆_>•:*🍓";
    const botPrefix = "#";
    const authorName = "𝗠𝗲𝗲𝗿𝗮 𝗥𝗮𝗷𝗽𝘂𝘁";
    const ownAge = "23";
    const teamName = "Github team";
    const authorFB = "https://www.facebook.com/The.Meera.X";
    const authorInsta = "Invalid ❌";
    const tikTok = "Unavailable..🙂";
    const urls = JSON.parse(fs.readFileSync('perfect.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];
    const now = moment().tz('Asia/Kolkata');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    message.reply({
      body: `《  Bot & Owner Info 》
\Name: ${botName}
\Bot Prefix: ${botPrefix}
\owner: ${authorName}
\age : ${ownAge}
\Facebook: ${authorFB}
\Instagram: ${authorInsta}
\TikTok: ${tikTok}
\Datee: ${date}
\Time: ${time}
\Team: ${teamName}
\Uptime: ${uptimeString}
\===============`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },
  onChat: async function ({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info2") {
      this.onStart({ message });
    }
  }
};