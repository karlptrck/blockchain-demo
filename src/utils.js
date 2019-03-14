import { ethers } from 'ethers'

export default class Utils{
    constructor(){}
    
    hash(_index, _previousHash, _timestamp, _data, _nonce){
        let objToHash = {
            index : _index,
            previousHash : _previousHash,
            timestamp : _timestamp,
            data : _data,
            nonce : _nonce
        } 
        let hex = this.toHex(JSON.stringify(objToHash))
        return ethers.utils.keccak256(hex)
     }

     toHex(input){
        var result = '';
        for (var i=0; i<input.length; i++) {
          result += input.charCodeAt(i).toString(16);
        }
        return "0x" + result;
     }
}
