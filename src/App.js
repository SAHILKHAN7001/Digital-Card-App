import React from 'react';
import dev from './img/dev.jpg';
import mail from './img/mail.svg' ;
import github from './img/github.svg';
import instagram from './img/instagram.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <img className='devimg' src={dev} alt="dev" />
     <div id='details'>
      <div id='title'>
     <h2 id='t1'>Sahil Khan</h2>
     <h3 id='sub'>Frontend Developer</h3>
     <a href="mailto:sahilkhan117001@gmail.com" class="footer__link"><img src={mail} alt="social"/></a>
      </div>
     <h3>About</h3>
     <p>
     I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
     </p>
     <h3>Intersets</h3>
     <p>
     Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
     </p>
     <footer class="footer">
    <ul class="social-list">
        <li><a href="https://instagram.com/i_am_sahil_khan0?igshid=YmMyMTA2M2Y=" class="footer__link"><img src={instagram} alt="social" /></a></li>
        <li><a href="https://github.com/SAHILKHAN7001" class="footer__link"><img src={github} alt="social"/></a></li>
        <li><a href="https://twitter.com/Sahil_Khan7001?t=_rNQaCvkfrVBtW6G0BxC8g&s=08" class="footer__link"><img src={twitter} alt="social"/></a></li>
        <li><a href="https://www.linkedin.com/in/sahil-khan-7300b5219" class="footer__link"><img src={linkedin} alt="social"/></a></li>
    </ul>
</footer>
     </div>
    </div>
  );
}

export default App;
