<template>
  <div id="app">
     <b-row>
        <b-col></b-col>
        <b-col cols="5">
            <Blockchain></Blockchain>
            <Block></Block>
            <AddBlock></AddBlock>
        </b-col>
        <b-col>
            <ResetBlockchain></ResetBlockchain>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import Blockchain from './components/Blockchain'
import Block from './components/Block'
import AddBlock from './components/AddBlock'
import ResetBlockchain from './components/ResetBlockchain'

export default {
  name: 'app',
  components: {
    Blockchain,
    Block,
    AddBlock,
    ResetBlockchain
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
