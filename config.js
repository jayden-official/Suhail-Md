const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794598254";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_56_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3azgvLzRJei9DY1BZN3M5R1RReDdnaDRCT0VXQ2NUZTNTK1g3a210dFlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJVlA3MlRmZ1RiZV9Bbk9ELVNQbnpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2OWU1YzdlLTEzOGEtNDk5YS05NGUyLWMzZDhiMTcwNzdjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDE1NyxcbiAgICAgIDg3LFxuICAgICAgMjA0LFxuICAgICAgMjEyLFxuICAgICAgMjI2LFxuICAgICAgNzAsXG4gICAgICAxOTksXG4gICAgICA4NyxcbiAgICAgIDE2NCxcbiAgICAgIDI5LFxuICAgICAgMTYsXG4gICAgICAyMTEsXG4gICAgICAxNixcbiAgICAgIDQ2LFxuICAgICAgMzcsXG4gICAgICA5NCxcbiAgICAgIDIxMixcbiAgICAgIDIzNixcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTY2LFxuICAgICAgMjQzLFxuICAgICAgMjIzLFxuICAgICAgMjI0LFxuICAgICAgMzcsXG4gICAgICAyMTAsXG4gICAgICAxMDUsXG4gICAgICAzNyxcbiAgICAgIDYzLFxuICAgICAgMTUwLFxuICAgICAgMTExLFxuICAgICAgMjE4LFxuICAgICAgMTMxLFxuICAgICAgMjMxLFxuICAgICAgMzgsXG4gICAgICAxNzcsXG4gICAgICA4OCxcbiAgICAgIDE0NCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYU1RFNjVDM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk0NTk3MjU0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiZGV2ZWxvcGVyXCIsXG4gICAgXCJsaWRcIjogXCIzNzU2NDI1Mzc1NzU3OToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQU00wdDBFRUxmMnM3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZLNXhDbHd3NmM0SVc5YlpPMFJvM0laQ1RueWlQTEJwUCsvbmRLVFZRbHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEJTYTBJQWwyK1JKT1o3NGh0aXVMR3ZKVlkyc0EwOU1NSk5iUEpmdEtwek0xWm1MenpYb3dQcHNMQVkrdzhkeGJNRHU2MVNLTWl1Ujd5Uk8wZnFRQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2pCZEZkY0Q2ZlVsbkRWY3ZUZ0tZZ0Fta2RwNEpyU2E5WGxhMTBTTEErSUdKWi9PVy9jcU1wVTJjODJ0U0VSWXZjV2lZZFlmbHVheGpXVVBybEs2QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk0NTk3MjU0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTE1Mzg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzh3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLOHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4UHlvd3lKV0NQdm1NeTFUeG40djFtbUsvOU1HazFqemZna0luc3A1MjlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzAxMjIxMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgxMjE0OTA5M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-5aD8O02kjHDXxA6wZpRsT3BlbkFJp6iyv8SDQIIcbDZBuAU0",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
