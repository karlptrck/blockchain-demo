<template>
    <div class="ResetBlockchain">
        <b-button class="mb-2" v-on:click="showHideDifficulty" variant="outline-secondary">Reset Blockchain</b-button>
         
        <b-container v-if="showDifficulty">
            
            <b-button-toolbar  class="mx-auto" style="width:200px;">
                <b-input-group class="mr-1" style="width:120px;" size="sm" prepend="Difficulty">
                    <b-form-input v-model="difficulty" disabled/>
                </b-input-group>
                
                <b-button-group size="sm">
                    <b-button v-on:click="incrementDifficulty">+</b-button>
                    <b-button v-on:click="decrementDifficulty">-</b-button>
                </b-button-group>

            </b-button-toolbar>
            
            <b-button v-on:click="reset" class="mt-2 mx-auto" style="width:100px;" variant="primary" size="sm">Go!</b-button>
        </b-container>
        
    </div>
</template>

<script>
export default {
    name : 'ResetBlockchain',
    data(){
        return {
            showDifficulty : false,
            difficulty : 4 // default
        }
    },
    methods : {
        reset(){
            this.showDifficulty = false
            this.$store.commit('emptyBlockchain')
            this.$store.commit('setDifficulty', this.difficulty)
            this.$store.dispatch('createBlockAndAddToChain', 'Welcome to Blockchain Demo!')
        },
        showHideDifficulty(){
            this.showDifficulty = true
        },
        incrementDifficulty(){
            this.difficulty++
        },
        decrementDifficulty(){
            this.difficulty--
        }
    }
}
</script>

<style>

</style>
