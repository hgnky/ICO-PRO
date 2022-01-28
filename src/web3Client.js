import Web3 from 'web3';
let web3;
let web3Ico;
let selectedAccount;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
		web3 = new Web3(window.web3.currentProvider);
		let provider = window.ethereum;	
			provider
				.request({ method: 'eth_requestAccounts' })
				.then((accounts) => {
				selectedAccount = accounts[0];
				//console.log(`Selected account is ${selectedAccount}`);
				})
				.catch((err) => {
				console.log(err);
				return;
				});
			window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];			
		//console.log(`Selected account changed to ${selectedAccount}`);
		});			
} else {
  console.log("Por Favor Instale MetaMask")
}
export default web3;





//export default contracts;