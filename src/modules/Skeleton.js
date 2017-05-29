import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../css/slick.css';
import '../css/slick-theme.css';
import 'slick-carousel';

import Navbar from "./Navbar";
import Footer from "./Footer";

import dataJSON from "../json/data.json";

export class Skeleton extends Component {
   render() {
      return (
         <div>
            <Navbar name="The Coding School" items={dataJSON.sitePages}/>
            {this.props.children}
            <Footer/>
         </div>
      );
   }
}

export class PageHeader extends Component {
  render() {
    const p = this.props;
    return (
      <div className="page_header">
        <div className="header_background">
          <div className="shadow"></div>
          <img src={p.image} alt="header"/>
        </div>
        <div className="header_contents">
          <div className="header_text">
            <div className="container">
              <h1>{p.title}</h1>
              <p>{p.description}</p>
            </div>
          </div>
          {(p.appendDOM)}
        </div>
      </div>
    );
  }
}

export class FontAwesomeLink extends Component {
  render() {
    const link = this.props.link;
    const classNames = this.props.classNames;
    if (this.props.link) {
      return (
        <a href={link}><i className={classNames}></i></a>
      );
    }
  }
}

export class TextBlock extends Component {
  render() {
    let paragraphs = this.props.paragraphs.map(function(p) {
      return <p key={p}>{p}</p>
    });

    return (<div className="paragraphs"> {paragraphs} </div>);
  }
}

export class TitledParagraphs extends Component {
  render() {
    const title = this.props.title;
    const paragraphs = <TextBlock paragraphs={this.props.paragraphs} />;
    return (
      <div className="paragraph">
        <TitledContent title={title} content={paragraphs} />
      </div>
    );
  }
}

export class TitledContent extends Component {
  render() {
    const title = this.props.title;
    const content = this.props.content;
    return (
      <div className="titled_content" key={title}>
        <h1 className="title">{title}</h1>
        {content}
      </div>
    );
  }
}

export class HoverFadeImage extends Component {
  render() {
    const defaultDOM = <img className="default_img" src={this.props.default} alt="hover" />
    const hoverDOM = <img className="hover_img" src={this.props.hover} alt="default" />
    return (
      <div className="hover_fade_image">
        <HoverFadeContent default={defaultDOM} onHover={hoverDOM} />
      </div>
    );
  }
}

// Accepts two attributes:
//  - default: the content you want to show up normally
//  - onHover: the content you want to show up on hover
// Sample Usage:
//  <HoverFadeContent default={ <h1>Hello</h1> } onHover={ <h1>World</h1> } />
//  Another sample usage is the HoverFadeImage component above
export class HoverFadeContent extends Component {
  render() {
    return (
      <div className="hover_fade_content">
        <div className="hfc hfc_hover"> {this.props.onHover} </div>
        <div className="hfc hfc_default"> {this.props.default} </div>
      </div>
    );
  }
}

export class LinkButton extends Component {
  render() {
    return (
      <div className="link_button hvr_grow bounceIn">
        <a href={this.props.link}>
          <button>{this.props.text}</button>
        </a>
      </div>
    );
  }
}

export class SlickPanel extends Component {
  componentDidMount() {
    $(".slick_panel").slick(this.props.options);
  }

  render() {
    return (
      <div className="slick_panel">
        {this.props.children}
      </div>
    );
  }
}
