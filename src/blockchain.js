const Block = require("./block");

class Blockchain {
  constructor() {
      this.chain = [];
      this.height = -1;
      this.initializeChain();
  }

  async initializeChain() {
      if(this.height == -1) {
          const block = new Block({ data: "Genesis Block" });
          await this.addBlock(block);
      }
  }

  addBlock(Block) {
      let self = this;
      return new Promise((resolve, reject) => {
          
      })
  }
}

module.exports = Blockchain;
