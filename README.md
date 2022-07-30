# Fake-Streamer
A Code that allows you to get the "Streaming" Discord Status WITHOUT Streaming!

----

The [index.js](https://github.com/DemasXI/dc-stream-faker/blob/main/index.js) is the main file. [server.js](https://github.com/DemasXI/dc-stream-faker/blob/main/server.js) prevents your repl from going to sleep. (If you have a replit hacker plan, then you can delete [this file](https://github.com/DemasXI/dc-stream-faker/blob/main/server.js) and paste this code inside the [index.js] (https://github.com/DemasXI/dc-stream-faker/blob/main/index.js) file : 

</br>

```js
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("CLIENT_ID", "IMAGE_NAME")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("DEEMASXI")
        .setUrl("https://m.youtube.com/c/DeemasXI")
        .setType("LISTENING")
        .setApplicationId("CLIENT_ID")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("youtube.com/c/DeemasXI")
        .setDetails("SUBSCRIBE!")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})
```

This Code is from [DEEMASXI](https://m.youtube.com/c/DeemasXI). If you have any doubts regarding this, feel free to [contact me](https://contact-1.demasxi.repl.co/).

**DO NOT GIVE YOUR TOKEN TO OTHERS!**

Use [uptimerobot.com](https://uptimerobot.com) to make your repl online 24/7.

</br>

> ⭐ Feel free to Star the Repository if this helped you! ;)

----

> Dc Stream Faker © 2023 by Deemasxi is licensed under Attribution 4.0 International 
