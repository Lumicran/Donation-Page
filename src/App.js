// Percentage Bar
// Clean UI
// Mock backend API Call

import React, { Component } from 'react';
import './App.css';

class ProgressMessage extends Component {
  render() {
    return (
      <div className="ProgressTick">
        <div className="ProgressTickTriangle">
        ${this.props.goal_amount - this.props.collected_amount} still needed for this project
        </div>
      </div>
    );
  }
}

class ProgressBar extends Component {
  render() {
    return (
      <div className="PercentageColor">
        {this.props.collected_amount / this.props.goal_amount * 100}
      </div>
    );
  }
}

class DonationAmount extends Component {
  render() {
    return (
      <input type="text" className="AppMargin" onChange={this.props.onChangeHandler} value={"$" + this.props.suggested_donation} />
    );
  }
}

class GiveNowButton extends Component {
  render() {
    return (
      <button className="AppMargin" onClick={this.props.clickHandler}>Give Now</button>
    );
  }
}


class WhyDonateMessage extends Component {
  render() {
    return (
      <a href="/why-donate" className="AppMargin">Why Give ${this.props.suggested_donation}</a>
    );
  }
}


class DonationMessage extends Component {
  render() {
    return (
      <div>
        <p className="AppMargin">{this.props.donateMessage}</p>
        <DonationAmount
          suggested_donation={this.props.suggested_donation}
          onChangeHandler={this.props.onChangeHandler}/>
        <GiveNowButton clickHandler={this.props.processDonation}/>
        <WhyDonateMessage
          suggested_donation={this.props.suggested_donation}/>
      </div>
    );
  }
}

class SaveForLaterButton extends Component {
  render() {
    return (
      <div>
        <button>Save for Later</button>
      </div>
    );
  }
}

class TellFriendsButton extends Component {
  render() {
    return (
      <div>
        <button>Tell Friends</button>
      </div>
    );
  }
}

class DonationPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        goal_amount: 500,
        collected_amount: 333,
        suggested_donation: 50,
        donateMessage: "Only 3 days left to fund this project. Join the 42 other donors who have already supported this project. Every dollar helps."

      }
  }

  onSuggestedDonationChangeHandler = (event) => {
      const suggested_donation = event.target.value;

      this.setState({
        suggested_donation: suggested_donation.slice(1),
      });
  }

  processDonation = () => {
      // console.log(this.state.collected_amount);
      // console.log(this.state.suggested_donation);

      this.setState({
        donateMessage: "Thank you for donating!",
        collected_amount: parseFloat(this.state.collected_amount) + parseFloat(this.state.suggested_donation)
      })
    };

  render() {
    return (
      <div>
        <ProgressMessage
          goal_amount={this.state.goal_amount}
          collected_amount={this.state.collected_amount}/>
        <ProgressBar
          goal_amount={this.state.goal_amount}
          collected_amount={this.state.collected_amount}/>
        <DonationMessage
          suggested_donation={this.state.suggested_donation}
          onChangeHandler = {this.onSuggestedDonationChangeHandler}
          donateMessage = {this.state.donateMessage}
          processDonation = {this.processDonation} />
        <SaveForLaterButton />
        <TellFriendsButton />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <DonationPage/>
      </div>
    );
  }
}

export default App;
