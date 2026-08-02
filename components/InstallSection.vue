<template>
    <section
        id="install"
        class="py-16 bg-white overflow-hidden"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-base font-semibold text-blue-600 tracking-wide uppercase">
                    {{ $t('install.section') }}
                </h2>
                <h3 class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                    {{ $t('install.title') }}
                </h3>
                <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
                    {{ $t('install.subtitle') }}
                </p>
            </div>

            <div class="mt-14 max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div class="px-6 py-3 border-b border-gray-700/60 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-300">
                        {{ $t('install.quick_label') }}
                    </span>
                    <button
                        type="button"
                        class="inline-flex items-center justify-center p-1.5 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all"
                        :aria-label="$t(copied ? 'install.copied' : 'install.copy')"
                        @click="copy(command)"
                    >
                        <Icon
                            :name="copied ? 'line-md:confirm-circle' : 'line-md:clipboard'"
                            class="h-5 w-5"
                        />
                    </button>
                </div>
                <pre class="px-6 py-5 text-sm text-gray-100 overflow-x-auto whitespace-pre-wrap break-all"><code>{{ command }}</code></pre>
            </div>

            <div class="mt-8 max-w-3xl mx-auto flex items-start gap-3 rounded-lg bg-blue-50 border border-blue-100 px-4 py-3">
                <Icon
                    name="lucide:info"
                    class="h-5 w-5 text-blue-500 mt-0.5 shrink-0"
                />
                <p class="text-sm text-blue-800">
                    {{ $t('install.note') }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
const installUrl = 'https://projectly.ru/install.sh'
const command = `curl -fsSL ${installUrl} | sh`

const copied = ref(false)

async function copy(text) {
    try {
        await navigator.clipboard.writeText(text)
    }
    catch {
        const el = document.createElement('textarea')
        el.value = text
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
}
</script>
