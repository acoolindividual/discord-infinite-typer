# Discord Infinite Typer
Simple program to type forever in a Discord channel.

## Use Tutorial
Configure `config.json` with your account token and the ID of the channel you'd like to type in.

`config.json` must be present for this program to function
### Getting account token
running the following code in discord/chrome dev console on discord.com should return your token:

```
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```
paste it into `config.json`