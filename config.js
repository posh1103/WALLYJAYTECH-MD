const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wallyjay123@gmail.com"
global.location="Osun,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/wallyjaytechy/wallyjaytech-Md";
global.gurl  =process.env.GURL  || "https://wa.me/2348144317152";
global.website=process.env.GURL || "https://wa.me/2348144317152" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/644e57bacdc8fc5a8f8ef.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY WALLY JAY TECH" 


global.devs = "2348144317152" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348144317152";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348144317152";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348144317152,2348144xxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348144317152,2348144xxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348144317152,2348144xxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_18_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjFRVk1mWW5VU0d1N1pacWUwTEhhM3JMRzFPMU9EclFzOWk0OVZScVhCST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ0MzE3MTUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNUNGQkNFMDBFMTgwQkRDMzY0N0I2MjgyNUJBNjI1RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMjQ3MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwialhBbzl4NENSOHVPc1hpelhqaExtUVwiLFxuICBcInBob25lSWRcIjogXCJjZGRkY2UxYS0xNjBhLTQ1ZDMtODZhOS1jMWU2YTcxYTM1MzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA0MixcbiAgICAgIDEwLFxuICAgICAgMTEsXG4gICAgICAyMTgsXG4gICAgICAxODAsXG4gICAgICAxMDYsXG4gICAgICAxMTYsXG4gICAgICA1MCxcbiAgICAgIDI0NCxcbiAgICAgIDE5MSxcbiAgICAgIDM0LFxuICAgICAgMjI5LFxuICAgICAgMzcsXG4gICAgICA3NSxcbiAgICAgIDU1LFxuICAgICAgODksXG4gICAgICA5NixcbiAgICAgIDE1NSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgODgsXG4gICAgICAxLFxuICAgICAgMTc0LFxuICAgICAgOTYsXG4gICAgICAxNTYsXG4gICAgICAxNzksXG4gICAgICAxMTUsXG4gICAgICAxOTgsXG4gICAgICA3OSxcbiAgICAgIDIyNixcbiAgICAgIDEzMyxcbiAgICAgIDE4NCxcbiAgICAgIDkyLFxuICAgICAgMTQ3LFxuICAgICAgMTQ4LFxuICAgICAgNTYsXG4gICAgICAxNTksXG4gICAgICA3NixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQN05YS0hXNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NDMxNzE1Mjo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldBTExZIEpBWSBURUNIXCIsXG4gICAgXCJsaWRcIjogXCIxNDU2OTg1OTUwNTc4NjY6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnpZaVpzSEVMM3YzcklHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4QVVkcGhXN3Q1ZUE4Wk9COUx4ZXViR2NqU3pFSUp0UjNDaTM3c2hmUzAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImN2dlV5d1ZmTlhnNjRyeUlhZ3dQWnkzMk9VdnRSd3FqWEhLb3VwUnNWeUJmNzE3NllzL0pZVk5wd1UxYkE4bWNHNDExcCtIOHNGaUg2Mlp3OVJGWERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIng4MXNvTlRaeUFMLzRzbkdPanRMN2Y2MHIvRVVtenkzV29CdlJzK09uU1ErRG45OUIrTnhpeDBkWC9adTVqZUU3T2luc2czU05SWkptRUMwVDFWVmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDQzMTcxNTI6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwMjQ3MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNDJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc0Mi5qc29uIjogIntcImtleURhdGFcIjpcIk5nWmtqeXVmcEVRWnR6Z2FMYUgxWUpsZmR0WUEyNy9HOHhIQkFFNEcxY1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzNTgzMDEwOCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Wallyjaytech-Md Default ---------- If Not Choose then it Randomely Pick One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 POWERED BY WALLY JAY TECH 』```", //*『SUBSCRIBE • WALLY JAY TECH』*\n youtube.com/@wallyjaytechy"),
 
  author : process.env.PACK_AUTHER|| "Wally Jay Tech",
  packname: process.env.PACK_NAME || "Wally Jay Stickers",
  botname : process.env.BOT_NAME  || "WALLYJAYTECH-MD",
  ownername:process.env.OWNER_NAME|| "It's Wally Jay Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "WALLYJAYTECH"  ).toUpperCase(),



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
