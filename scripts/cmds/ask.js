const axios = require('axios');

const Prefixes = [
  'ai',
  'anya',
  'perfect',
  '+ai',
  'hi',
  '.ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("[❤️].<_𝗦𝘁𝗿𝗮𝘄𝗯𝗲𝗿𝗿𝘆_>•:*🍓 | 𝗜𝘀 𝗟𝗶𝘀𝘁𝗲𝗻𝗶𝗻𝗴 𝗔𝘀𝗸 𝗠𝗲 𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴••••
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `𝗠𝘀 𝗠𝗲𝗲𝗿𝗮 𝗫
______________________________  
${answer}
𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗘𝗥𝗔 ❤️🍒 
https://www.facebook.com/The.Meera.X`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};