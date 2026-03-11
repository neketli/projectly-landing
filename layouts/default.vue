<template>
    <div class="font-sans text-gray-800 antialiased !scroll-pt-24">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}
</style>
