<template>
    <div class="AddBlock">
        <b-card class="ml-5 mr-5 mt-5 p-3"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{ 'shadow' : hover }">

            <b-form @submit="onSubmit">
                <b-input-group prepend="DATA" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input id="data" placeholder="Enter your data here" v-model="inputData" :disabled="isMining"/>
                </b-input-group>
                <br>
                <b-button :disabled="isMining" type="submit" variant="primary"><i class="fas fa-plus-circle"></i>  New Block</b-button>
            </b-form>

            <div v-if="isMining">
                <br>
                <b-spinner type="grow" label="Loading..."/>
                <div>Mining block...</div>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name : 'AddBlock',
    data() {
     return {
        inputData : '',
        hover : false
     }
    },
    computed : {
        isMining(){
            return this.$store.getters.isMining
        }
    },
    methods : {
        onSubmit(e) {
            e.preventDefault()
            this.$store.dispatch('createBlockAndAddToChain', this.inputData)
            this.inputData = ''
        }

    }   
}
</script>

<style>

</style>
