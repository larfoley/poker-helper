import React from 'react'
import Select from '../Select'
import Button from '../Button'

class Preferences extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: "light",
      currency: "euro",
      preferedPokerVariation: "Texas Hold'em",
      preferedPokerGameType: "Tournament",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    // Prevent the browser from submitting the form
    event.preventDefault()
    this.props.updateUserPreferences(this.state, (err, res) => {
      if (!err) {
        window.alert("Preferences Updated")
      } else {
        window.alert("Error updating preferences")
        console.log(err)
      }
    })
  }

  handleChange(event) {
    // When the user changes the value of a input we need to
    // update the component state

    // Get the name of the input that the user has changed
    const name = event.target.name
    // Get the value of the input that the user has changed
    const value = event.target.value

    // Update the components state
    this.setState(prevState => {
      prevState[name] = value
      return prevState
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Select
          name="theme"
          value={this.state.theme}
          label="Theme"
          options={["light", "dark"]}
          onChange={this.handleChange}
        />
        <Select
          name="currency"
          value={this.state.currency}
          label="Currency"
          options={["Euro"]}
          onChange={this.handleChange}
        />
        <Select
          name="variation"
          value={this.state.variation}
          label="Prefered Poker Variation"
          options={["Texas Hold'Em", "Omaha"]}
          onChange={this.handleChange}
        />
        <Select
          name="gameType"
          value={this.state.gameType}
          label="Prefered Game Type"
          options={["Tournament", "Cash Game", "Frezeout"]}
          onChange={this.handleChange}
        />
        <Button type="submit">Update Preferences</Button>
      </form>
    )
  }
}

export default Preferences
