import React from "react"
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from 'recharts'
import ChartContainer from '../../../shared/ChartContainer'
import colors from '../colors'
import RandomColor from '../RandomColor'

const BestLocationsChart = props => {
  const randomColor = new RandomColor()
  const mostSuccesfullLocations = []
  const locations = []
  const sessionsFilteredByLocation = {}

  // get all locations
  props.sessions.forEach(session => {
    let locationExists = false

    locations.forEach(l => {
      if (session.location === l) {
        locationExists = true
      }
    })

    if (!locationExists) {
      locations.push(session.location)
    }
  })

  // filter sessions by location
  locations.forEach(location => {
    sessionsFilteredByLocation[location] = props.sessions
      .filter(session => session.location === location)
  })

  // Calclate total earnings of each location
  for (var key in sessionsFilteredByLocation) {
    let totalEarnings = 0

    sessionsFilteredByLocation[key].forEach(session => {
      totalEarnings += parseInt(session.amountWon - session.buyIn, 10)
    })

    mostSuccesfullLocations.push({
      name: key,
      value: totalEarnings
    })

  }

  return (
    mostSuccesfullLocations.length > 0?

      <ChartContainer>
        <ResponsiveContainer>
          <PieChart width={730} height={250}>
            <Pie
              data={mostSuccesfullLocations}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              legend
            >
              {
                mostSuccesfullLocations.map((obj, i) => (
                  <Cell
                    key={i}
                    fill={mostSuccesfullLocations.length > colors.length?
                      randomColor.generateUnique() : colors[i]
                    }/>
                ))
              }
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      :
      <p>Not enough data to display chart</p>
  )

}

export default BestLocationsChart
