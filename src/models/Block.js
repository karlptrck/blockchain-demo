
// import moment from 'moment'
import Utils from '../utils.js'
var utils = new Utils()

export default class Block{
    constructor (index, previousHash, timestamp, data, hash, nonce) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.nonce = nonce;
      }
    
      static get createGenesis() {
        var index = 0, 
        previousHash = "0", 
        timestamp = Date.now(), 
        data = "Welcome to Blockchain Demo",
        nonce = 100
        var hash = utils.hash(index, previousHash, timestamp, data, nonce)

        return new Block(
          index,
          previousHash,
          timestamp,
          data,
          hash,
          nonce
        );
      }

}