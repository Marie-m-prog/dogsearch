import React from 'react';
import './InfoSection.scss';
import { Link } from 'react-router-dom'
import Banner from '../../../src/assets/images/filmroll.png';
import { Arrows } from '../../Icons'

const InfoSection = () => {
  return (
    <section className="section">
      <article className="section__filmrolls">
        <img src={Banner} alt="banner1" className="section__filmrolls--one"/>
        <img src={Banner} alt="banner2" className="section__filmrolls--two"/> 
      </article>
     
      <article className="section__wrapper">
        <h2>A modern way of finding your talent, whether it’s behind or in front of the camera, cast and filmmaker.</h2>
        <section className="section__wrapper__signup">
          <Link to='/'>
            <h3>Sign up</h3>
          </Link>
          <Arrows />
        </section>

        <p>Headhunt your talents quicker, smarter, without bias and limitations of personal networks.</p>

      </article>
    </section>
  )
}

export default InfoSection;
