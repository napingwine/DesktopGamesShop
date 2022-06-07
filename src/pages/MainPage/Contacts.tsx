import React, { useState } from 'react';
import phone from '../../assets/Icons/carbon_phone-voice.png'
import clock from '../../assets/Icons/bi_clock.png'
import map from '../../assets/Icons/clarity_map-marker-line.png'
import letter from '../../assets/Icons/letter.png'
import CustomButton from '../../components/Buttons/CustomButton';

const Contacts = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');


  const formSubmit = (e) => {
    e.preventDefault()
    console.log('contact us request button')
  }

  const agreamentWarning = () => {
    console.log('agreamen popup')
  }

  return (
    <section className='main-page__section-about-us__contacts '>
      <h2 className="main-page__section-about-us__contacts__title">Контакты</h2>

      <div className="main-page__section-about-us__contacts__our-info ">
        <div className="main-page__section-about-us__contacts__our-info__item-wrapper">
          <div className="image-wrapper">
            <img src={phone} alt="phone" />
          </div>
          <p className="main-page__section-about-us__contacts__our-info__item-wrapper__text"><span>Телефон: </span>+380 (93) 23-73-856</p>
        </div>
        <div className="main-page__section-about-us__contacts__our-info__item-wrapper">
          <div className="image-wrapper">
            <img src={clock} alt="clock" />
          </div>
          <p className="main-page__section-about-us__contacts__our-info__item-wrapper__text"><span>E-mail: </span>expample@example.com</p>
        </div>
        <div className="main-page__section-about-us__contacts__our-info__item-wrapper">
          <div className="image-wrapper">
            <img src={map} alt="map" />
          </div>
          <p className="main-page__section-about-us__contacts__our-info__item-wrapper__text"><span>Адрес: </span>г Киев. Ул Шевенка дом 43</p>
        </div>
        <div className="main-page__section-about-us__contacts__our-info__item-wrapper">
          <div className="image-wrapper">
            <img src={letter} alt="letter" />
          </div>
          <p className="main-page__section-about-us__contacts__our-info__item-wrapper__text"><span>Режим работы клуба: </span>11:00-23:00 (ежедневно)</p>
        </div>
      </div>

      <form className="main-page__section-about-us__contacts__form">
        <h3>Остались вопросы?</h3>
        <label> Ваше имя
          <input type="text" name='name' placeholder='Имя' value={userName} onChange={e=>setUserName(e.target.value)}/>
        </label>
        <label> Ваше имя
          <input type="phone" name='phone' placeholder='+380 (__) __-__-___' value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
        </label>
        <label> Ваше коментарий
          <textarea className='comment' name='comment' placeholder='Комментарий' value={comment} onChange={e=>setComment(e.target.value)} style={{resize: 'none'}} rows={3}></textarea>
        </label>
        <div className="button-wrapper">
          <CustomButton listener={e=>formSubmit(e)} buttonText='Заказать Звонок' style={{ 'maxWidth': '170px' }} />
        </div>
        <div className="agreement-warning">Нажимая на кнопку "Заказать звонок", я даю <span onClick={agreamentWarning}>согласие на обработку персональных данных.</span></div>
      </form>

      <iframe className='main-page__section-about-us__contacts__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.8191991038835!2d30.744957503098806!3d46.48283127834849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631989c254e39%3A0xe81b613c774816d3!2z0YPQuy4g0JTQtdGA0LjQsdCw0YHQvtCy0YHQutCw0Y8sIDcsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDY1MDAx!5e0!3m2!1sru!2snl!4v1654208089387!5m2!1sru!2snl" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Contacts;