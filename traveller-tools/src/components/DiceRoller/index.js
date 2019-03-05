import React, { Component } from "react";
import Container from "../Container";
import Button from "../Button";
// import { Button } from 'react-native-elements';

class DiceRoller extends Component {
  state = {
    type: 6,
    number: 2,
    modifier: 0,
    result: 0
  };

  componentWillMount() {
    let type = this.state.type;
    let number = this.state.number;
    let modifier = this.state.modifier;
    let result = this.state.result
    console.log(`Dice: ${number}d${type}\nModifier: ${modifier}\nThe result is:\n${result}`);
  }

  setMod = (e) => {
    this.setState({
        modifier: e.target.value
    })
  }

  setType = (e) => {
    this.setState({
        type: e.target.value
    })
  }

  setNum = (e) => {
    this.setState({
        number: e.target.value
    })
  }

  handleRoll = () => {
    let result = 0;
    const type = this.state.type;
    const number = this.state.number;
    const mod = parseInt(this.state.modifier);

    for (let i = 0; i < number; i++) {
        let roll = Math.floor(1 + Math.random() * (type));
        result = result + roll;
        console.log(`d${type} result: ${roll}.\nCurrent sum: ${result}`)
    }

    var sum = result + mod;
    console.log(`The modifier is: ${mod}\nWithout the mod, the roll is:\n${result}. With the mod, the result is:\n${sum}`);

    this.setState({
      result: sum
    })
  }

  render() {
    return (
        <Container>
        {/* <div> */}
            <p>Dice: {this.state.number}d{this.state.type}</p>
            <p>Modifier: {this.state.modifier}</p>
            <p>The most recent result: {this.state.result}</p>
            {/* <Button title="Solid Button" onClick={this.handleRoll}/> */}
            <Button handleClick={this.handleRoll}/>
        {/* </div> */}

        <label>
            <h3>Set Modifier</h3>
            <input type="text" value={this.state.modifier} onChange={this.setMod} />
        </label>

        <label>
            <h3>How many dice?</h3>
                <input type="text" value={this.state.number} onChange={this.setNum} />
            <h3>What type?</h3>
                <select value={this.state.type} onChange={this.setType}>
                    <option value="2">a coin</option>
                    <option value="4">d4</option>
                    <option value="6">d6</option>
                    <option value="8">d8</option>
                    <option value="10">d10</option>
                    <option value="12">d12</option>
                    <option value="20">d20</option>
                </select>
        </label>


        </Container>
    );
  }
}

export default DiceRoller;