<template>
     <div class="Blockchain">
        <h1>Blockchain Demo</h1>
     </div>
</template>

<script>
export default {
    name : 'Blockchain', 
    beforeCreate() {
        this.$store.dispatch('createBlockAndAddToChain', 'Welcome to Blockchain Demo!')
    }
}
</script>

<style>

</style>
