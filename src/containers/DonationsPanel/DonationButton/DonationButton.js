import React from 'react';

import './DonationButton.scss';

export default class DonationButton extends React.Component {
  render() {
    const {
      buttonID,
      text
    } = this.props;

    return (
      <div className>
        <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
          <input type='hidden' name='cmd' value='_s-xclick' />
          <input type='hidden' name='hosted_button_id' value={buttonID} />
          <input className="donation_button" type='submit' value={text} name='submit'></input>
        </form>
      </div>
    )
  }
}
