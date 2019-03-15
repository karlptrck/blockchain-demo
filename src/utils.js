import { ethers } from 'ethers'

export default class Utils{
    constructor(difficulty){
      this.difficulty = difficulty
    }
    
    createBlock(timestamp, prevHash, data, index){
      return new Promise(resolve => {
          let returnBl = {
            timestamp: timestamp,
            data: data,
            previousHash: prevHash,
            index: index
          }
          let nonce = this.calculateNonce(returnBl)
          returnBl["nonce"] = nonce
          let hash = this.hashBlock(returnBl)
          returnBl["hash"] = hash
          resolve(returnBl)
      })
    }

    hashBlock(blockToHash){
      let stringifiedBl = JSON.stringify(blockToHash)
      let hexifiedBl = this.toHex(stringifiedBl)
      return ethers.utils.keccak256(hexifiedBl)
    }

     calculateNonce(block){
      let clonedBlock = JSON.parse(JSON.stringify(block))
      let nonce = 0
      clonedBlock["nonce"] = nonce
      let hash = this.hashBlock(clonedBlock)

      while(!(hash.substring(2, this.difficulty + 2) === this.getLeadingZeros())){
          nonce++
          clonedBlock["nonce"] = nonce
          hash = this.hashBlock(clonedBlock)
      }
      return nonce
     }

     getLeadingZeros(){
       var result = ""
       for(let i = 0; i < this.difficulty; i++){
          result = result.concat("0")
       }
       return result
     }

     toHex(input){
      var result = '';
      for (var i=0; i<input.length; i++) {
        result += input.charCodeAt(i).toString(16);
      }
      return "0x" + result;
   }
}
