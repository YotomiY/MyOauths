# OA2

## 🦈 Requirements
- NodeJS
- Server Mariadb/MySQL
- Datacenter/Residentiel Proxy
- Optionnel:
- PM2

## 🚀 Installation
- Install typescript `npm install -g typescript`
- Install package `https-proxy-agent` on root folder `npm i https-proxy-agent`
- Create a User with all privileges in your database and put the credentials in `Database/index.ts`.
- Go in all folder `API`, `Client`, `Database` and `Routine` and run `npm install` in each folder, after that run `npx tsc` in each folder
- Run `npm start` in `API` folder
  - Using PM2: `pm2 start dist --name "API"`
- Use `runClient.sh` in `Client` folder to run the client
  - Example: `./runClient.sh IdOfBot Token`
  - You can also use `runClient.bat IdOfBot Token` on Windows
- Configure your proxy in `ips-data_center.json`
  - Example: 
```json
[
    "IP:PORT:USER:PASSWORD",
    "IP:PORT:USER:PASSWORD",
    ...
]
```

## 📝 Bot Configuration
- Got in discord developer portal and create a new application
- Check All Privilege Intents
  - ![](https://s3files.m1000.fr/screenshot/2023/04/chrome_NbJEKtGOsy.png)
- Go in `OAuth2` -> `General` and fill the `Redirects` field with the link of your API
  - Exemple: `http://localhost:3000/api/discord/callback`
  - Exemple: `http://IP:3000/api/discord/callback`
  - Exemple: `http://DOMAIN:3000/api/discord/callback`
  - Exemple: `http://DOMAIN/api/discord/callback`

## 🔒 Get Invite Link
- Go in `OAuth2` -> `URL Generator` and check the `bot` scope and the `Administrator` permission
  - ![](https://s3files.m1000.fr/screenshot/2023/04/chrome_6BVGmZDxqD.png)

## 📅 Routine
<!-- Requirement Proxy list -->
**⚠️ For the routine you need a proxy list !**
- Start the routine with `node dist/Routine` in `Routine` folder
  - Using PM2: `pm2 start dist/Routine/Routine.js --name "Routine"`