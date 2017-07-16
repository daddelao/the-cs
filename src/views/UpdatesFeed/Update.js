import React from 'react';

import './Update.scss';

export default class Update extends React.Component {
  render() {

    const {
      title,
      date,
      body,
      image
    } = this.props.update;

    const dangerousHTML = (text) => { return {__html: text}; };

    const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dateObj = new Date(date)
    const formattedDate = (`
      ${months[dateObj.getMonth()]}
      ${dateObj.getDate()}`
    ).toUpperCase();

    return (

      <div className='update_wrapper'>
        <div className='update'>
          <div className='date'>{formattedDate}</div>
          <div className='title'>
            <a target='_blank' href={title.link}>
              {title.text}
            </a>
          </div>

          <div
            className='body'
            dangerouslySetInnerHTML={dangerousHTML(body)}
          />

          {image && (<div className='image_wrapper'>

            <div className='image'>
              <a target='_blank' href={image.link}>
                <img src={image.source} alt='update'/>
              </a>
            </div>

            {image.caption && (
              <div className='image_caption'>
                {image.caption}
              </div>
            )}

          </div>)}

        </div>
      </div>
    );
  }
}
