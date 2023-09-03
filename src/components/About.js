import React from 'react';
import PropTypes from 'prop-types';

const About = ({Cel, avatar, name, profession, Email, address, languages}) => {
  return(
    <div className='bio'>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='avatar'>
        <img src={avatar}/>
      </div>
      <div className='cel'>
        <p>{Cel}</p>
      </div>
      <div className='Email'>
        <p>{Email}</p>
      </div>
      <div className='languages'>
      <p>{languages}</p>
          </div>
      <div className='address'>
        <p>{address}</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
About.PropTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  profession: PropTypes.string,
  Cel: PropTypes.string,
  Email: PropTypes.string,
  address: PropTypes.string,
};

export default About;
