<script setup>
const { t, locale } = useI18n()

useHead({
    title: t('page.title'),
    meta: [
        { name: 'description', content: t('page.title') },
        { name: 'keywords', content: 'управление проектами, Kanban, таск-трекер, трекер задач, проектный менеджмент' },
        { property: 'og:title', content: t('page.title') },
        { property: 'og:description', content: t('page.description') },
        { property: 'og:image', content: 'https://projectly.ru/og-image.jpg' },
        { property: 'og:url', content: 'https://projectly.ru' },
    ],
    link: [
        { rel: 'canonical', href: 'https://projectly.ru' },
    ],
})

watch(() => locale.value, () => useHead({
    title: t('page.title'),
    meta: [
        { name: 'description', content: t('page.title') },
        { name: 'keywords', content: 'управление проектами, Kanban, таск-трекер, трекер задач, проектный менеджмент' },
        { property: 'og:title', content: t('page.title') },
        { property: 'og:description', content: t('page.description') },
        { property: 'og:image', content: 'https://projectly.ru/og-image.jpg' },
        { property: 'og:url', content: 'https://projectly.ru' },
    ],
    link: [
        { rel: 'canonical', href: 'https://projectly.ru' },
    ],
}))
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
