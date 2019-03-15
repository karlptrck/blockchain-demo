<template>
    <div class="AddBlock">
        <b-card class="ml-5 mr-5">
            <b-form @submit="onSubmit">
                <b-input-group prepend="DATA" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input id="data" placeholder="" v-model="inputData" />
                </b-input-group>
                <br>
                <b-button type="submit" variant="primary"><i class="fas fa-plus-circle"></i>  New Block</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {
    name : 'AddBlock',
    data() {
     return {
         inputData : ''
     }
    },
    methods : {
        onSubmit(e) {
            e.preventDefault()
            this.$store.dispatch('createBlockAndAddToChain', this.inputData)
        }

    }   
}
</script>

<style>

</style>
