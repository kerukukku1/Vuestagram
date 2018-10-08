<template lang="pug">
    .navcontent(@mouseover="openAccordion()")
        <slot></slot>
</template>

<script>
export default {
    methods: {
        openAccordion(){
            this.$emit('open-accordion')
        }
    }
}
</script>

<style scoped>
.navcontent{
    float: right;
    padding: 20px;
    cursor: pointer;
}
</style>
