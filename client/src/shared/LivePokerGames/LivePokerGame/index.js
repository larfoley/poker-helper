import React from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import Table from './Table'
import TableBox from './TableBox'

const LivePokerGame = props => (
    <div>
        <Wrapper>
        <Header>
          <h3>{props.type}</h3>
          <h4>{props.address}</h4>
        </Header>
        <TableBox>
            <Table>
		         <table>
			         <tbody>
				         <tr>
					         <th>Buy In:</th>
					         <td>{props.buyIn}$</td>
				         </tr>
				         <tr>
					         <th>Date:</th>
					         <td>{props.date}</td>
				         </tr>
				         <tr>
					         <th>Start Time:</th>
					         <td>{props.time}</td>
				         </tr>
						 <tr>
					         <th>Start Day:</th>
					         <td>{props.day}</td>
				         </tr>
			         </tbody>
		         </table>
	         </Table>
         </TableBox>
      </Wrapper>
   </div>
)

export default LivePokerGame
