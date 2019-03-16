<template>
    <div class="Block">
    <i v-if="item.index > 0" class="fas fa-angle-down fa-2x mb-3"></i>
    
    <b-card class="p-3 mb-3" 
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ 'shadow' : hover }">

                <b-input-group prepend="DATA" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input id="data" placeholder="" v-model="item.data" v-on:input="updateHash(item)"/>
                </b-input-group>
                <br>
                <b-card-text class="text-left">
                    <small>PREVIOUS HASH 
                        <span v-if="item.index >= 1">
                        <span v-if="!isValidBlock(getPreviousBlock(item.index))"><b-alert show variant="danger">{{item.previousHash}}</b-alert></span>
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
                        <b-button v-b-popover.hover.right="'Re-mine block!'" 
                            v-on:click="revalidateBlock(item)" 
                            :disabled="isRevalidationInProgress(item.index)"
                            variant="primary">

                            <i v-if="!isRevalidationInProgress(item.index)" class="fas fa-cogs"></i>
                            <span v-else>Re-validating...</span>
                        </b-button>
                    </span>
                </b-card-text>
            </b-card>

           
    </div>
</template>

<script>
export default {
    name : 'Block',
    data() {
        return {
            hover : false
        }
    },
    props : [ 'item' ],
    methods : {
        updateHash(item){
            this.$store.commit('modifyData', { index : item.index, data : item.data })
        },
        isValidBlock(block){
            return this.$store.getters.isValidBlock(block)
        },
        revalidateBlock(item){
            this.$store.dispatch('revalidateBlock', item)
        },
        getPreviousBlock(index){
            return this.$store.getters.getPreviousBlock(index)
        },
        isRevalidationInProgress(index){
            return this.$store.state.revalidatingInProgress.includes(index)
        }

    }
}
</script>

<style>

</style>
