<template>
    <div class="Block">
        <b-card class="mb-2" v-for="(item, index) in blockchain" :key="index">
             <b-input-group prepend="DATA" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="data" placeholder="" v-model="item.data" v-on:input="updateHash(index)"/>
            </b-input-group>
            <br>
            <b-card-text class="text-left">PREVIOUS HASH <span> {{item.previousHash}}</span></b-card-text> 
            <b-card-text class="text-left">HASH <span> {{item.hash}}</span></b-card-text>
            <b-card-text class="text-left">{{item.index}} <span> {{item.timestamp}} </span> <span style="float:right;">{{item.nonce}}</span></b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name : 'Block',
    computed : {
        blockchain(){
            return this.$store.state.blockchain
        }
    },
    methods : {
        updateHash(_index){
            var blockToModify = this.$store.state.blockchain[_index]
            this.$store.commit('modifyData', { index : _index, data : blockToModify.data })
        }
    }
}
</script>

<style>

</style>
