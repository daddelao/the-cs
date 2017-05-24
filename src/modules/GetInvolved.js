import React, { Component } from 'react';
import { TitledParagraphs, PageHeader } from './Skeleton';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/GetInvolved.scss';
import dataJSON from '../json/data.json';


class GetInvolved extends Component {
  render() {
    const header = dataJSON.headers.getInvolved;

    // TODO: Add donation section
    const donP = dataJSON.paragraphs.donationsIntro;

    return (
      <div className="App">
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className="getinvolved_page page">
          <div className="donations_section">
            <TitledParagraphs title={donP.title} paragraphs={donP.paragraphs} />
            <DonationsPanel/>
          </div>

        </div>
      </div>
    );
  }
}

class DonationsPanel extends Component {
  render() {

    let options = dataJSON.donationOptions;
    let optionsDOM = options.map(function(o) {
      return <DonationOption option={o} key={o.amount}/>
    })
    return (
      <div className="donations_panel">
        <div className="donations_options">
          {optionsDOM}
        </div>
        <DonateCustom />
      </div>
    );
  }
}

class DonateCustom extends Component {
  render() {
    return (
      <a className="donate_custom" href={this.props.paymentLink}>
        Donate a custom amount.
      </a>
    );
  }
}

// props: buttonText, buttonLink, optionImage
class DonationOption extends Component {
  render() {
    let o = this.props.option;
    return (
      <div className="donation_option">
        <img src={o.image} />
        <DonationButton text={o.category + " ($" + o.amount + ")"} link={o.paymentLink} />
      </div>
    );
  }
}

class DonationButton extends Component {
  render() {
    return (
      <div className="donation_button">
        <a href={this.props.link}>
          {this.props.text}
        </a>
      </div>
    )
  }
}

class VolunteerTypeform extends Component {

  componentDidMount() {
    (function(){
      var qs,js,q,s,d=document,
          gi=d.getElementById,
          ce=d.createElement,
          gt=d.getElementsByTagName,
          id='typef_orm',
          b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
      if(!gi.call(d,id)) {
        js=ce.call(d,'script');
        js.id=id;js.src=b+'widget.js';
        q=gt.call(d,'script')[0];
        q.parentNode.insertBefore(js,q)
      }
    })()
  }


  render() {
    //style="width:100%;height:500px;"
    return (
      <div className="typeform" id="volunteer_typeform">
        <div className="typeform-widget" data-url="https://thecodingschool.typeform.com/to/K0Nggc" data-text="Volunteer" ></div>

      </div>
    );
  }
}

export default GetInvolved;