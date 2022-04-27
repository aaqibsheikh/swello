import { useCall, useContractFunction, useEthers } from '@usedapp/core';
import { Contract, utils, BigNumber } from 'ethers';
import { useEffect, useState } from 'react';
import ItemContract from '../../abi/SwelloAbi.json';
import { SWELLO_CONTRACT_ADDRESS } from '../../common/environmentVariables';

const swelloContractAddress = `${SWELLO_CONTRACT_ADDRESS}`;
const swelloContractInterface = new utils.Interface(ItemContract);
const swelloContract = new Contract(
  swelloContractAddress,
  swelloContractInterface
);

console.log('swelloContract',swelloContract)
export function useGetSwelloBalance(account)  {
  const [balanceOf, setBalanceOf] = useState(undefined);
  const [pending, setPending] = useState(false);
  // const { account } = useEthers()
  const { value, error } =
    useCall(
      account &&
      {
        contract: swelloContract,
        method: 'balanceOf',
        args: [account],
      }
    ) ?? {};
  useEffect(() => {
    setPending(true);
    if (value) {
      const balance = BigNumber.from(value.toString());
      setBalanceOf(utils.formatEther(balance));
      setPending(false);
    }
    if (error) {
      console.error(error.message);
      setPending(false);
      setBalanceOf(undefined);
    }
    console.log('WHAT AM I GETTING', value, error)
  }, [value, error]);

  return { balanceOf, error, pending };
}