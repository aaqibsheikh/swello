import { useCall, useContractFunction, useEthers } from '@usedapp/core';
import { Contract, utils } from 'ethers';
import { useEffect, useState } from 'react';
import PancakeswapRouterAbi from '../../abi/PancakeswapRouterAbi.json';


const pancakeswapContractAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E"
const pancakeswapContractInterface = new utils.Interface(PancakeswapRouterAbi);
const pancakeswapContract = new Contract(
  pancakeswapContractAddress,
  pancakeswapContractInterface
);
// const contract = {
//     factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', // PancakeSwap V2 factory
//     router: '0x10ED43C718714eb63d5aA57B78B54704E256024E', // PancakeSwap V2 router
// };

// const tokens = {
//     TITANO: '0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f',
//     SCZ: '0x39f1014a88c8ec087cedf1bfc7064d24f507b894',
//     DOP: '0x844fa82f1e54824655470970f7004dd90546bb28',
// };

// const PancakeSwapRouterContract = new Contract(
//     contract.router,
//     ['function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)'],
// );

export function useSwelloBalanceToUsd()  {

  const [balanceOf, setBalanceOf] = useState(undefined);
  const [pending, setPending] = useState(false);
  const { account } = useEthers()
  const { value, error } =
    useCall(
      {
        contract: pancakeswapContract,
        method: 'getAmountsOut',
        args: [100, ['0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56']]
      }
    ) ?? {};
  useEffect(() => {
    setPending(true);
    if (value) {
      setBalanceOf(value?.[0]);
      setPending(false);
    }
    if (error) {
      console.error(error.message);
      setPending(false);
      setBalanceOf(undefined);
    }
    // console.log('WHAT AM I GETTING', value, error);
  }, [value, error]);

  return { balanceOf, error, pending };
}