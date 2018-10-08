<template lang="pug">
    transition(name="loading")
        .loading(v-if="loading") Now Loading
</template>

<script>
export default {
    computed: {
        loading() {
            return this.$store.state.view.loading
        }
    }
}
</script>

<style>
.loading {
    /* position:fixed; とかでいい感じのスタイル */
    position: fixed;
    top: 0;
    font-weight: bold;
    opacity: 0.5;
}

.loading-enter-active, .loading-leave-active {
    transition: opacity 1000ms, transform 1000ms;
}

.loading-leave-to {
    opacity: 0;
    transform: translateY(10px)
}
</style>
