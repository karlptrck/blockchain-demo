import Vue from 'vue'
import Vuex from 'vuex'
import Block from './models/Block.js'
import Utils from './utils.js'
// import moment from 'moment'

Vue.use(Vuex)
var utils = new Utils()

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
            var nonce = 0
            var timestamp = new Date().getTime()
            
            var nextHash = utils.hash(nextIndex, prevHash, timestamp, payload, nonce)
            return new Block(nextIndex, prevHash, timestamp, payload, nextHash, 0)
        }
    }
})