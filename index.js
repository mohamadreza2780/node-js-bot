const TelegramBot = require('node-telegram-bot-api');
const { SocksProxyAgent } = require('socks-proxy-agent');

// پروکسی SOCKS5
const agent = new SocksProxyAgent('socks5://127.0.0.1:12334');

const token = '8262761921:AAELxgpUXnxAa-_zaH9wJ9hqG7rWkropVt8';
const bot = new TelegramBot(token, {
    polling: true,
    request: {
        agent: agent
    }
});

// start command
bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "hello");
})
dfg