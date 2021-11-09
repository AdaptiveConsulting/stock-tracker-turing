import 'regenerator-runtime/runtime'
const umitToken = `?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504`

export interface StatsType {
  high: number
  low: number
  open: number
  previousClose: number
  week52High: number
  week52Low: number
  marketCap: number
  peRatio: number
  dividendYield: number
  incomeNetPerWabsoSplitAdjusted: number
  isUSMarketOpen: boolean
  volume: number
  avgTotalVolume: number
}

export const fetchStats = async (stockSymbol: string) => {
  const quoteUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/quote${umitToken}`
  const epsUrl = `https://sandbox.iexapis.com/stable/time-series/FUNDAMENTAL_VALUATIONS/${stockSymbol}/${umitToken}`
  try {
    const quoteData = await fetch(quoteUrl).then((res) => res.json())
    const epsData = await fetch(epsUrl).then((res) => res.json())
    const statsData: StatsType = { ...quoteData, ...epsData[0] }
    return statsData
  } catch (err) {
    console.error(err)
  }
}

//What data from which url?
//quoteData = open, high, low, previousClose, Day Range, 52Week Range, marketCap, peRatio, volume
//avgTotalVolume
//epsData = dividendYield, earningsPerShare
