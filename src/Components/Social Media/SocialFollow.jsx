import React from 'react';
import './social.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';

export default function SocialFollow() {
  return (
    <>
      <div className='social-container'>
        <a href='#' classNameName='social-container--icon youtube social'>
          <FontAwesomeIcon icon={faYoutube} size='3x' />
        </a>
        <a href='#' classNameName='social-container--icon facebook social'>
          <FontAwesomeIcon icon={faFacebook} size='3x' />
        </a>
        <a href='#' classNameName='social-container--icon twitter social'>
          <FontAwesomeIcon icon={faTwitter} size='3x' />
        </a>
        <a href='#' classNameName='social-container--icon instagram social'>
          <FontAwesomeIcon icon={faInstagram} size='3x' />
        </a>
      </div>
      <Footer />
    </>
  );
}
