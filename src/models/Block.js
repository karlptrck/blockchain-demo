
import moment from 'moment'
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
        return new Block(
          0,
          "0",
          moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
          "Welcome to Blockchain Demo",
          "Test Hash",
          100
        );
      }
}