<template>
     <div class="Blockchain">
        <h1 class="mb-5">BLOCKCHAIN</h1>
        
        <Block v-for="item in blockchain"
            v-bind:key="item.index"
            v-bind:item="item"></Block>

        <AddBlock class="mb-5"></AddBlock>
     </div>
</template>

<script>
import Block from './Block'
import AddBlock from './AddBlock'

export default {
    name : 'Blockchain', 
    components : {
        Block,
        AddBlock
    },
    computed : {
        blockchain(){
            return this.$store.state.blockchain
        }
    },
    beforeCreate() {
        this.$store.commit('setDifficulty', 3) // default set to 3
        this.$store.dispatch('createBlockAndAddToChain', 'Welcome to Blockchain Demo!')
    }
}
</script>

<style>

</style>
