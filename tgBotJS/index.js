const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers')
const token = '6988799174:AAE4mwAXZ7g2uo3wSIpSvUFX4PhaF6oTMEI'
console.log('Bot has been started...')
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, async(msg) => {
    bot.sendMessage(msg.chat.id, `Инфа про наш сервис очень важная`, {
    reply_markup: {
        inline_keyboard: [
            [{
                text: 'Узнать про алгоритм',
                callback_data: 'ourAlgorithm'
            }],
            [{
                text: 'Тарифы',
                callback_data: 'tariffs'
            }],
            [{
                text: 'Зарегистрироваться',
                callback_data: 'regist'
            }]
        ]
    }
    
})
   })
bot.on('callback_query', query =>{
    const {chat, message_id} = query.message
    bot.deleteMessage(chat.id, message_id)
    switch (query.data){
        case 'back':
            bot.sendMessage(chat.id, `Инфа про наш сервис очень важная`, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Узнать про алгоритм',
                            callback_data: 'ourAlgorithm'
                        }],
                        [{
                            text: 'Тарифы',
                            callback_data: 'tariffs'
                        }],
                        [{
                            text: 'Зарегистрироваться',
                            callback_data: 'regist'
                        }]
                    ]
                }
                
            })
        break
        case 'ourAlgorithm':
            bot.sendMessage(chat.id, `Инфа про наш алгоритм`, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Назад',
                            callback_data: 'back'
                        }],
                        [{
                            text: 'Тарифы',
                            callback_data: 'tariffs'
                        }],
                        [{
                            text: 'Зарегистрироваться',
                            callback_data: 'regist'
                        }]
                    ]
                }
            
            })
        break
        
    }
    bot.answerCallbackQuery({
        callback_query_id: query.id
    })
    bot.polling()   
})



