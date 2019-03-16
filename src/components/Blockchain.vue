<template>
     <div class="Blockchain">
        <h1 class="mb-5">BLOCKCHAIN</h1>
        
        <Block v-for="item in blockchain"
            v-bind:key="item.index"
            v-bind:item="item"></Block>

        <AddBlock v-if="blockchain.length > 0" class="mb-5"></AddBlock>
        <div v-else>
            <br>
            <b-spinner type="grow"/>
            <div>Mining Genesis Block...</div>
        </div>
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
        this.$store.commit('setDifficulty', 4) // default set to 4
        this.$store.dispatch('createBlockAndAddToChain', 'Welcome to Blockchain Demo!')
    }
}
</script>

<style>

</style>
