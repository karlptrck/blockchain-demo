<template>
  <div id="app">
     <b-row>
        <b-col></b-col>
        <b-col cols="5">
            <Blockchain></Blockchain>
        </b-col>
        <b-col>
            <ResetBlockchain></ResetBlockchain>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import Blockchain from './components/Blockchain'
import ResetBlockchain from './components/ResetBlockchain'

export default {
  name: 'app',
  components: {
    Blockchain,
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
