import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts'
import CustomizedAxisTick from './CustomizedAxisTick'
import GraphLoading from './GraphLoading'
import GraphFailedToLoad from './GraphError'
import useFetchGraphClose from '../../hooks/useFetchGraphClose'
import useFetchGraphData from '../../hooks/useFetchGraphData'
import { useDrag } from './useDrag'
import { filterZero } from '../../utils/filterZero'
import './Graph.css'

interface GraphProps {
  stockSymbol?: string
}

const Graph = ({ stockSymbol }: GraphProps) => {
  const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
  const liveDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/intraday-prices/${token}&chartInterval=5`
  const yesterdayDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/date/20211119${token}&chartInterval=5`
  const yesterdayCloseUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/previous/${token}`

  const [reference, startDrag] = useDrag()
  const [yesterdayClose] = useFetchGraphClose(yesterdayCloseUrl)
  const [yesterdayData, yesterdayDataError] = useFetchGraphData(yesterdayDataUrl)
  const [liveData, liveDataError] = useFetchGraphData(liveDataUrl)

  if (liveDataError || yesterdayDataError || liveData?.length === 0) {
    return <GraphFailedToLoad />
  }

  if (!liveData || !yesterdayData) {
    return <GraphLoading />
  }

  return (
    <div className='chart' ref={reference} onMouseDown={startDrag}>
      <div className='chart-inner'>
        <ResponsiveContainer width='99%'>
          <LineChart data={yesterdayData}>
            <CartesianGrid stroke='#d1d1d1' strokeWidth={0.4} verticalFill={['#ffffff00', '#ededed80']} />

            <YAxis
              stroke='#eaebeb'
              tickSize={10}
              tickCount={12}
              allowDecimals={true}
              domain={['auto', 'auto']}
              padding={{ top: 18 }}
              dx={-5}
              tick={<CustomizedAxisTick />}
            />

            <XAxis
              stroke='#eaebeb'
              tickSize={10}
              tickCount={12}
              tick={{ fill: '#7f7f7f', fontSize: 12, fontFamily: 'Roboto' }}
              interval={5}
              allowDuplicatedCategory={false}
              dataKey='label'
              dy={5}
              textAnchor='beginning'
            />

            <Tooltip
              contentStyle={{ fontSize: 14, borderColor: '#aaabd1', textAlign: 'center', fontFamily: 'Roboto' }}
            />

            <ReferenceLine y={yesterdayClose?.close} stroke='#aaabd1' strokeDasharray='5 3' />

            <Line
              hide={false}
              name='Close'
              data={filterZero(yesterdayData)}
              dataKey='close'
              stroke='#aaabd1'
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />

            <Line
              hide={true}
              name='Yesterday Close'
              data={filterZero(yesterdayData)}
              dataKey='close'
              stroke='grey'
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph
