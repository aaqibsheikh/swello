import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    
    // let web3
    // if (window.ethereum) {
    //     web3 = new Web3(window.ethereum);
    //     try {
    //         window.ethereum.enable().then(function() {});
    //     } catch (e) {}
    // } else if (window.web3) {
    //     web3 = new Web3(web3.currentProvider);
    // } else {
    //     // Specify default instance if no web3 instance provided
    //     let provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/');
    //     web3 = new Web3(provider);
    //     // alert('You have to install MetaMask !');
    // }

    // web3.eth.defaultAccount = web3.eth.accounts[0];
    // resolve(web3);
    var web3 = window.web3
    
    // Pop-up to ask user to connect his Metamask
    // Modern DApp Browsers
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try { 
        window.ethereum.enable().then(function() {
            // User has allowed account access to DApp...
        });
      } catch(e) {
        // User has denied account access to DApp...
      }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    }
    // Non-DApp Browsers
    else {
      // alert('You have to install MetaMask !');
    }

    // Connect to Metamask
    // Checking if Web3 has been injected by the browser MetaMask
    if (typeof web3 !== 'undefined') {
      // Use MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      console.log('Injected web3 detected.');
      resolve(web3)
    } else {
      // If no web3 is detected, then the local web3 provider is loaded.
      var provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')
      web3 = new Web3(provider)
      console.log('No web3 instance injected, using Local web3.');
      resolve(web3)
    }

  });

export default getWeb3;

