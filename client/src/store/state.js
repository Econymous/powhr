let state = {
  mode:"color",
  rpcActive:false,
  currentAddress: null,
  proxyAddress: null,
  tokenAddress: '',
  walletUnlocked: false,
  ethToSpend:0,
  bondsToSell:0,
  resolvesToStake:0,
  resolvesToPull:0,
  earningsToPull:0,
  earningsToReinvest:0,
  totalBondSupply:'0',
  totalStakedResolves:'0',
  ethInReserve:'0',
  resolveFee:'0',
  poolFunds:'0',
  buyPrice:'0',
  sellPrice:'0',
  yourBonds:'0',
  yourBondValue:'0',
  yourResolves:'0',
  yourStakedResolves:'0',
  yourEarnings:'0',
  estimatedBonds:'0',
  estimatedEth:'0',
  estimatedResolves:'0',
  avgHodlRelease:'0',
  yourHodl:'0',
  collectiveCurrentHodl:'0',
  bondColor:"#ffffff",
  resolveColor:"#ffffff",
  pyramidGateway:"0x000",
  buyColor:"#888888",
  yourSuggestedMR:"0",
  yourCandidate:"0x000",
  masternodeRequirement:"0",
  communityResolve:"0x000"
}
export default state
