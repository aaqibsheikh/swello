import { useCall, useContractFunction, useEthers } from '@usedapp/core';
import { Contract, utils } from 'ethers';
import { useEffect, useState } from 'react';
import ItemContract from '../../abi/SwelloAbi.json';
import { SWELLO_CONTRACT_ADDRESS } from '../../common/environmentVariables';

const swelloContractAddress = `${SWELLO_CONTRACT_ADDRESS}`;
const swelloContractInterface = new utils.Interface(ItemContract);
const swelloContract = new Contract(
  swelloContractAddress,
  swelloContractInterface
);
export function useItemContractBalanceOf()  {
  const [balanceOf, setBalanceOf] = useState(undefined);
  const [pending, setPending] = useState(false);
  const { account } = useEthers()
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
      setBalanceOf(value?.[0]);
      setPending(false);
    }
    if (error) {
      console.error(error.message);
      setPending(false);
      setBalanceOf(undefined);
    }
  }, [value, error]);

  return { balanceOf, error, pending };
}