<template>
     <div class="Blockchain">
        <h1>BLOCKCHAIN</h1>
     </div>
</template>

<script>
export default {
    name : 'Blockchain', 
    beforeCreate() {
        this.$store.commit('setDifficulty', 3) // default set to 3
        this.$store.dispatch('createBlockAndAddToChain', 'Welcome to Blockchain Demo!')
    }
}
</script>

<style>

</style>
