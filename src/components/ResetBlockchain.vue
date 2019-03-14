<template>
    <div class="ResetBlockchain">
         <b-button v-on:click="reset" variant="outline-secondary">Reset Blockchain</b-button>
    </div>
</template>

<script>
export default {
    name : 'ResetBlockchain',
    methods : {
        reset(){
            this.$store.commit('emptyBlockchain')
            this.$store.commit('createGenesisBlock')
        }
    }
}
</script>

<style>

</style>
