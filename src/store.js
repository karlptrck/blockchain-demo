import Vue from 'vue'
import Vuex from 'vuex'
import Utils from './utils.js'

Vue.use(Vuex)
let utils = new Utils()

export default new Vuex.Store({
    state : {
        blockchain : [],
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
            utils.setDifficulty(payload)
        },
        setMining(state){
            state.mining = true
        },
        modifyData(state, payload){
            var blockToModify = state.blockchain[payload.index]
            blockToModify["data"] = payload.data
           
            let newHashValue = utils.hashBlock(blockToModify)
            state.blockchain[payload.index]["hash"] = newHashValue

            for(let i = payload.index + 1; i < state.blockchain.length; i++){
                state.blockchain[i].previousHash = state.blockchain[i - 1].hash
                state.blockchain[i].hash = utils.hashBlock(state.blockchain[i])
            }
        }
    },
    getters : {
        getLatestBlock : state => {
            return state.blockchain[state.blockchain.length -1]
        },
        isValidBlock : state => (block) => {
            return utils.verifyBlock(block)
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
    
                let newBlock = await utils.createBlock(new Date().toLocaleString(), prevHash, payload, index)
                commit('addBlock', newBlock)
                commit('setMining', false)
                 // eslint-disable-next-line no-console
                 console.log('done mining ' + newBlock.hash)
            }

           createBlock()
        },
        revalidateBlock({ state }, payload){
            const revalidateBlock = async () => {
                var validatedBlock = await utils.createBlock(payload.timestamp, 
                                                payload.previousHash, 
                                                payload.data, 
                                                payload.index)
            
                state.blockchain.splice(payload.index, 1, validatedBlock)
          
                for(let i = payload.index + 1; i < state.blockchain.length; i++){
                    state.blockchain[i].previousHash = state.blockchain[i - 1].hash
                }
            
            }
            revalidateBlock()
        }
    }
})