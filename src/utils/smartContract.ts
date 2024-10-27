import { contractAddress } from 'config';
import json from '../contracts/escrow.abi.json';  // Use relative path
import { AbiRegistry, Address, SmartContract } from './sdkDappCore';

const abi = AbiRegistry.create(json);

export const smartContract = new SmartContract({
  address: new Address(contractAddress),
  abi
});