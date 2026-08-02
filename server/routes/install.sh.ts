import type { EventHandlerRequest } from 'h3'

export default defineEventHandler((event: EventHandlerRequest) => {
    return sendRedirect(event, 'https://raw.githubusercontent.com/neketli/projectly/refs/heads/main/install.sh', 302)
})
