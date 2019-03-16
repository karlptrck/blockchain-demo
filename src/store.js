import Vue from 'vue'
import Vuex from 'vuex'
import Utils from './utils.js'
import BlockMiner from 'worker-loader!./block_miner.js'

Vue.use(Vuex)
let utils = new Utils()

export default new Vuex.Store({
    state : {
        blockchain : [],
        difficulty : 4,
        mining : false,
        revalidatingInProgress : []
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
        setMining(state, payload){
            state.mining = payload
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
        },
        getPreviousBlock : state => (index) => {
            return state.blockchain[index - 1]
        },
        isMining : state => {
            return state.mining
        }
    },
    actions : {
        createBlockAndAddToChain({ commit, state, getters }, payload){
            commit('setMining', true)
            var prevHash = ""
            var index = 0

            if(state.blockchain.length != 0){
                prevHash = getters.getLatestBlock.hash
                index = getters.getLatestBlock.index + 1
            }

            var miner = new BlockMiner();

            miner.postMessage(JSON.stringify({
                timestamp : new Date().toLocaleString(),
                prevHash : prevHash,
                data: payload,
                index : index,
                difficulty : state.difficulty
            }))
            
            miner.onmessage = function(event){
                commit('addBlock', event.data)
                commit('setMining', false)
                miner.terminate()
            }

        },
        revalidateBlock({ commit, state }, payload){

            var miner = new BlockMiner();
            state.revalidatingInProgress.push(payload.index)

            miner.postMessage(JSON.stringify({
                timestamp : payload.timestamp,
                prevHash : payload.previousHash,
                data: payload.data,
                index : payload.index,
                difficulty : state.difficulty
            }))

            miner.onmessage = function(event){
                state.revalidatingInProgress = state.revalidatingInProgress.filter(item => item !== payload.index)

                state.blockchain.splice(payload.index, 1, event.data)
                
                for(let i = payload.index + 1; i < state.blockchain.length; i++){
                    state.blockchain[i].previousHash = state.blockchain[i - 1].hash
                }

                miner.terminate()
            }

        }
    }
})
