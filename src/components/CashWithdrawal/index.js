// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevstate => ({balance: prevstate.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="cash-container">
          <div className="user-container">
            <div className="initial-container">
              <p className="para1">{initial}</p>
            </div>
            <p className="para2">{name}</p>
          </div>
          <div className="balance-container">
            <p className="para3">Your Balance</p>
            <p className="para4">
              {balance} <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="para5">Withdraw</p>
          <p className="para6">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-items">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
