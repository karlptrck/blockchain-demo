# blockchain-demo

A simple simulation on how blockchain works.

### Demo
Live Demo : https://karlptrck.github.io/blockchain-demo/

### Project description
This app is a basic model of a blockchain with the following functionalities:

- Genesis Block creation based on pre-defined difficulty level
- Reset blockchain with user-defined difficulty level
- Add block to the chain
- Ability to change data field in the existing block
- A mutation in previous block making its hash invalid after pressing re-mine button, all subsequent blocks becomes invalid as well
- Ability to re-mine the invalid blocks

### Components used
- VueJS : App framework
- Vuex : state management pattern + library for Vue.js applications
- BootstrapVue : CSS
- Web Workers : used to run scripts in background threads
- Webpack Worker-loader : a webpack loader that registers a script as a Web Worker
- EthersJS : for cryptographic functions

### Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
