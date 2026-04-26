export default defineEventHandler(async (event) => {
    const { email, message } = await readBody(event)

    if (!message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Message is required',
        })
    }

    const config = useRuntimeConfig()

    const text = `
📩 Новая заявка

📧 Email: ${email || '—'}
💬 Сообщение:
${message}
  `

    const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`

    await $fetch(url, {
        method: 'POST',
        body: {
            chat_id: config.telegramChatId,
            text,
            parse_mode: 'HTML',
        },
    })

    return { success: true }
})
