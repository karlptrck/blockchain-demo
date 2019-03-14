import Vue from 'vue'
import Vuex from 'vuex'
import Block from './models/Block.js'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        blockchain : [Block.createGenesis]
    },
    mutations : {
        addBlock(state, payload){
            state.blockchain.push(payload)
        }
    },
    getters : {
        getLatestBlock : state => {
            return state.blockchain[state.blockchain.length -1]
        },
        generateNextBlock : (state, getters) => (payload) => {
            var latestBlock = getters.getLatestBlock
            var nextIndex = latestBlock.index + 1
            var prevHash = latestBlock.hash

            var timestamp = moment(new Date().getTime()).format('MMMM Do YYYY, h:mm:ss a')
            var nextHash = "next hash"

            return new Block(nextIndex, prevHash, timestamp, payload, nextHash, 0)
        }
    }
})