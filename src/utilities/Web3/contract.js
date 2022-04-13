// import GameCollection from '../../contracts/artifacts/Game.json';
import { getAccount } from './account';
import Web3 from "web3";

// export async function getContract(address) {
//   const web3 = new Web3(window.ethereum);
//   const contract = new web3.eth.Contract(GameCollection.abi, address);
//   return contract;
// }











































// export async function buyToken(address, id, game, path, numSold, word, account) {
//   const contract = await getContract(address);
//   const price = await contract.methods.price().call();
//   const result = await contract.methods.buy(id).send({
//     from: await getAccount(),
//     value: price
//   });
//   if(result.status){
//     const payLoad = { sold: numSold + 1, path }
//     await gameService.update(game._id, payLoad)
//     const body = {
//       word,
//       game: game._id,
//       username: '',
//       email: '',
//       walletAddress: account,
//     }
//     await playerService.update(body);
//   }
//   return result
// }

// export async function reward(address, passphrase) {
//   const contract = await getContract(address);
//   return await contract.methods.awards(passphrase.trim()).send({
//     from: await getAccount(),
//   });
// }

// export async function createContract(price, phrase, gameId, usernames) {
//   // console.log(phrase, gameId);
//   const web3 = new Web3(window.ethereum);
//   const walletAddress = await getAccount();
//   const Contract = new web3.eth.Contract(GameCollection.abi);
//   Contract.options.data = GameCollection.data.bytecode.object;

//   const contract = await Contract.deploy({
//     arguments: [gameId, Web3.utils.toWei(price + ''), phrase.trim(), usernames]
//   }).send({
//     from: walletAddress
//   });

//   return { tokenAddress: contract._address, creatorAddress: walletAddress };
// }

// export async function getNfts(game) {
//   const contract = await getContract(game.tokenAddress);
//   const nfts = [];
//   for (let i = 0; i < game.numberPlayer; i++) {
//     nfts[i] = {
//       tokenAddress: game.tokenAddress,
//       gameId: game._id,
//       creatorAddress: game.creatorAddress,
//       word: contract.methods.tokenURI(i + 1).call(), // promise
//       price: game.price,
//       tokenId: i + 1,
//       owner: contract.methods.ownerOf(i + 1).call()  // promise
//     }
//   }
//   return nfts;
// }

// export async function getNft(tokenAddress, tokenId) {
//   const contract = await getContract(tokenAddress);
//   return {
//     tokenAddress: tokenAddress,
//     word: await contract.methods.tokenURI(tokenId).call(),
//     price: await contract.methods.price().call() / 1e18,
//     tokenId,
//     owner: await contract.methods.ownerOf(tokenId).call()
//   }
// }
