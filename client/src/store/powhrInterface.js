import address from './powhrAddress'

export default {
	init(web3){

		let abiArr = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bondTokens","type":"uint256"}],"name":"getEtherForBonds","outputs":[{"name":"ethervalue","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"paidAmount","type":"uint256"}],"name":"fluxFee","outputs":[{"name":"fee","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"avgFactor_ethSpent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allTimeSupplyHigh","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"pullResolves","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dissolvingResolves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawPoolFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ethervalue","type":"uint256"},{"name":"subvalue","type":"uint256"}],"name":"calculateBondsFromReinvest","outputs":[{"name":"bondTokens","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"resolveEarnings","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"longestHodl","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"fee","type":"uint256"}],"name":"poolFee","outputs":[{"name":"poolShare","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"avgFactor_buyInTimeSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"payouts","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"scale","type":"uint256"}],"name":"pricing","outputs":[{"name":"buyPrice","type":"uint256"},{"name":"sellPrice","type":"uint256"},{"name":"fee","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"bondsReleased","type":"uint256"}],"name":"getReturnsForBonds","outputs":[{"name":"etherValue","type":"uint256"},{"name":"mintedResolves","type":"uint256"},{"name":"new_releaseTimeSum","type":"uint256"},{"name":"new_releaseWeight","type":"uint256"},{"name":"initialInput_ETH","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buySum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NOW","outputs":[{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collective_avgFactor_buyInTimeSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ethervalue","type":"uint256"}],"name":"getBondsForEther","outputs":[{"name":"bonds","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clockWeighted_avgFactor_buyInTimeSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"resolveToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"genesis","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sellAllBonds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price_coeff","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getMeOutOfHere","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"fund","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"bonds","type":"uint256"},{"name":"upDown","type":"bool"}],"name":"getPriceForBonds","outputs":[{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"poolFunds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"tokenFallback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserve","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collective_avgFactor_ethSpent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"avgFactor_releaseWeight","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amountFromEarnings","type":"uint256"}],"name":"reinvestEarnings","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"holdings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"avgHodl","outputs":[{"name":"hodlTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dissolved","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"resolveWeight","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"avgFactor_releaseTimeSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sellBonds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clockWeighted_avgFactor_ethSpent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_poolFunds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"reinvested","type":"uint256"},{"indexed":false,"name":"dissolve","type":"uint256"},{"indexed":false,"name":"bonds","type":"uint256"},{"indexed":false,"name":"resolveTax","type":"uint256"},{"indexed":false,"name":"poolTax","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"spent","type":"uint256"},{"indexed":false,"name":"bonds","type":"uint256"},{"indexed":false,"name":"resolveTax","type":"uint256"},{"indexed":false,"name":"poolTax","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"bondsSold","type":"uint256"},{"indexed":false,"name":"cashout","type":"uint256"},{"indexed":false,"name":"resolves","type":"uint256"},{"indexed":false,"name":"resolveTax","type":"uint256"},{"indexed":false,"name":"poolTax","type":"uint256"},{"indexed":false,"name":"initialCash","type":"uint256"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amountStaked","type":"uint256"}],"name":"StakeResolves","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"earnings","type":"uint256"},{"indexed":false,"name":"dissolve","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"pulledResolves","type":"uint256"},{"indexed":false,"name":"forfeiture","type":"uint256"}],"name":"PullResolves","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"pmAddr","type":"address"},{"indexed":true,"name":"toAddr","type":"address"},{"indexed":false,"name":"cash","type":"uint256"}],"name":"WithdrawPoolFunds","type":"event"}]
		let contractAPI =  new web3.eth.Contract(abiArr,address)

		return contractAPI
	}
}