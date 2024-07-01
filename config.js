//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "263 78 962 2747";
global.owner = process.env.OWNER_NUMBER || "263 78 962 2747";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUx6TXFxSDlJcFJDQVRJZUd3SGVocklvY3V4cXp5eDMyQk1rTDhRQVIxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09MWk5YRlBURUE4OHpxUDBPVlRoemppdzlvaHRlU3Y1MkQ1RFdLMnExUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQzNKaXBEVldqbGlUVSt2cStCNXJWTXRJNkdReEZJbkVNenRjd3N1cW0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdHRQN294WURxT05zaFNkRDQ3ZGkxWHlyRVRJUGlMTGxNcW9kQnJTaDBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKU0xzL1RGMGY5ZjRLQURDNU1OZmRNRTlLSzk3UkRZbTI5SVJYR2VTMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndXT1RpVU5CVFFDTUVlV2xVcHRBMXRaMmlxZ2dMUlFtL0U3eldDempmVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJFNEF4QlNXbmREaGN3TjN5ak1Gb1FrdTBSTGtDVUdlbmlzTFF6dnhYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VsY3ZzNlVzRGR5cDlzSjZ4bzZqMytPY0tIOU1tQkFXd0liU0lmYUIzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRZSVhVQ3FjTEwzYWlXWlZhcFRyYkpXWExLeW1IM2Q3TkYrMVh0Q1g4RHo4VEQ2dzhBcHBieUp2OWpYZTFGTk05Z20zV211US8yRGdVZXBjdUlxcUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJvZVJ5MDR0SHdFSDFlRW14VkRlRGhiVnNpcmtRQ1Y0MG9BTFlZbU15R09BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVaVBhY0czZVQ0dUxWcWdwVWtHa0R3IiwicGhvbmVJZCI6IjkxNjU0NTVkLTJmOWYtNGQ4Ni04N2E1LTE1YzkwOTJhNGJiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIK2RCQ0t4NmJRSXk5OUViZm5aNEptMFV3a1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjkvV0YxVzR6RGl3aXhkSFpMbEpna1dMS21VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJBNUVGNzVOIiwibWUiOnsiaWQiOiIyNjM3ODk2MjI3NDc6OTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYZStiSUJFTTdsaWJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBFVVBOWEJJOW5xQld6M3A4bkpYNE1QRmFZQSs1UGdldVh0Wk1XNmJIQmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFuWFlVZVdXZHFyRXM5NHhtbU9RNHM0aFhoYTd2anFKSkgyUHJkYzJHL21jemwxU3BNRHNLQkNrRWZlazJUODZZSGZObTFnbk85YVNuczdDb2MzZ0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHYUtIYlpBc0RTamlYL1Y1ZjNzSXZlRjcvT1MvNVlpSFNWVTFTK21NQ1c4ZE1uUld3TndqY0dlVE5YOTI3NlpMdFRweFhBMlI3Vyt0cjVuV3NmbVdCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4OTYyMjc0Nzo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUeEZEelZ3U1BaNmdWczk2Zkp5VitERHhXbUFQdVQ0SHJsN1dURnVteHdYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODI1MTE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsybCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝒕𝒉𝒊𝒔 𝒃𝒐𝒕 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑾𝒂𝒕𝒔𝒐𝒏 𝒙𝒅''😍",
  author: process.env.PACK_AUTHER || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg",
  packname: process.env.PACK_NAME || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg",
  botname: process.env.BOT_NAME || "𝙒𝞓𝙏𝙎𝞗𝞜-𝞦𝘿",
  ownername: process.env.OWNER_NAME || "watsonxd",
  errorChat: process.env.ERROR_CHAT || "263 78 962 2747",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
