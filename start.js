const path = require('./config').path;
const token = require('./config').config.token;
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager(path, { token: token });
manager.spawn().catch(error => console.error(new Date(), error));
