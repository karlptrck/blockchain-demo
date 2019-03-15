import Vue from 'vue'
import Vuex from 'vuex'
import Block from './models/Block.js'
import Utils from './utils.js'

Vue.use(Vuex)
let utils = new Utils(3)

export default new Vuex.Store({
    state : {
        blockchain : [],
        difficulty : 3, // default
        mining : false
    },
    mutations : {
        addBlock(state, payload){
            state.blockchain.push(payload)
        },
        emptyBlockchain(state){
            state.blockchain = []
        },
        setDifficulty(state, payload){
            state.difficulty = payload
        },
        setMining(state){
            state.mining = true
        }
    },
    getters : {
        getLatestBlock : state => {
            return state.blockchain[state.blockchain.length -1]
        }
    },
    actions : {
        createBlockAndAddToChain({ commit, state, getters }, payload){
            commit('setMining', true)
        
            const createBlock = async () => {
                let prevHash = ""
                let index = 0
                // eslint-disable-next-line no-console
                console.log('mining')
                if(state.blockchain.length != 0){
                    prevHash = getters.getLatestBlock.hash
                    index = getters.getLatestBlock.index + 1
                }
    
                let newBlock = await utils.createBlock(new Date(), prevHash, payload, index)
                commit('addBlock', newBlock)
                commit('setMining', false)
                 // eslint-disable-next-line no-console
                 console.log('done mining ' + newBlock.hash)
            }

           createBlock()
        }
    }
})