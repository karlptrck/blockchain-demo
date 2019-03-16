<template>
    <div class="Block">
        <b-card class="mb-3 p-3" v-for="(item, index) in blockchain" :key="item.index">
             <b-input-group prepend="DATA" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="data" placeholder="" v-model="item.data" v-on:input="updateHash(item)"/>
            </b-input-group>
            <br>
            <b-card-text class="text-left">
                <small>PREVIOUS HASH 
                    <span v-if="index >= 1">
                    <span v-if="!isValidBlock(blockchain[index-1])"><b-alert show variant="danger">{{item.previousHash}}</b-alert></span>
                    <span v-else><b-alert show variant="success">{{item.previousHash}}</b-alert></span>
                    </span>
                </small>
            </b-card-text> 
            
            <b-card-text class="text-left">
                <small>HASH 
                <span v-if="!isValidBlock(item)"><b-alert show variant="danger">{{item.hash}}</b-alert></span>
                <span v-else><b-alert show variant="success">{{item.hash}}</b-alert></span>
                </small>
            </b-card-text>
            
            <b-card-text class="text-left">
                <span v-if="item.index === 0"><strong>GENESIS BLOCK</strong></span>
                <span v-else><strong>BLOCK # {{item.index}} </strong></span>
                <span> <small>  on {{item.timestamp}} </small></span> 
                <span v-if="isValidBlock(item)" style="float:right;">{{item.nonce}}</span>
                <span v-else style="float:right;">
                    <b-button v-b-popover.hover.right="'Re-mine block!'" v-on:click="revalidateBlock(item)" variant="primary">
                        <i class="fas fa-cogs"></i>
                    </b-button>
                </span>
            </b-card-text>
        
            
   
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
        updateHash(item){
            this.$store.commit('modifyData', { index : item.index, data : item.data })
        },
        isValidBlock(block){
            return this.$store.getters.isValidBlock(block)
        },
        revalidateBlock(item){
            this.$store.dispatch('revalidateBlock', item)
        }

    }
}
</script>

<style>

</style>
