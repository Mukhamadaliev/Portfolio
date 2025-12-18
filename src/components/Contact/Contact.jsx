import React, { useState } from "react";
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane, FaCheck, FaTimes } from 'react-icons/fa';

const Contact = ({ isDarkMode, t }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "+998",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldStatus, setFieldStatus] = useState({
    name: { isValid: false, isTouched: false },
    email: { isValid: false, isTouched: false },
    number: { isValid: false, isTouched: false },
    message: { isValid: false, isTouched: false }
  });

  // ✅ .env dan ma'lumotlar
  const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^\d+]/g, '');
    
    if (!value.startsWith('+998')) {
      value = '+998' + value.replace(/^\+?/, '');
    }
    
    if (value.length > 13) {
      value = value.substring(0, 13);
    }
    
    setFormData({ ...formData, number: value });
    
    const isValid = value.length === 13 && /^\+998\d{9}$/.test(value);
    setFieldStatus(prev => ({
      ...prev,
      number: { 
        ...prev.number, 
        isValid: isValid,
        isTouched: true
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    let isValid = false;
    
    switch (name) {
      case 'name':
        isValid = value.trim().length >= 2;
        break;
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'message':
        isValid = value.trim().length >= 10;
        break;
      default:
        isValid = false;
    }
    
    setFieldStatus(prev => ({
      ...prev,
      [name]: { 
        ...prev[name], 
        isValid: isValid,
        isTouched: true
      }
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFieldStatus(prev => ({
      ...prev,
      [name]: { 
        ...prev[name], 
        isTouched: true
      }
    }));
  };

  const sendMessage = async (text) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = {
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus(t('Message sent successfully!'));
        setFormData({ name: "", email: "", message: "", number: "+998" });
        setFieldStatus({
          name: { isValid: false, isTouched: false },
          email: { isValid: false, isTouched: false },
          number: { isValid: false, isTouched: false },
          message: { isValid: false, isTouched: false }
        });
      } else {
        setStatus(t('Error occurred'));
      }
    } catch (error) {
      setStatus("⚠️ Internet yoki API xatosi!");
      console.error("Telegram API xatosi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formData;

    const isFormValid = fieldStatus.name.isValid && 
                       fieldStatus.email.isValid && 
                       fieldStatus.number.isValid && 
                       fieldStatus.message.isValid;

    if (!isFormValid) {
      setStatus(t('Please fill all fields'));
      
      setFieldStatus(prev => ({
        name: { ...prev.name, isTouched: true },
        email: { ...prev.email, isTouched: true },
        number: { ...prev.number, isTouched: true },
        message: { ...prev.message, isTouched: true }
      }));
      return;
    }

    setIsLoading(true);
    setStatus("");

    const text = `
<b>📩 Yangi xabar!</b>
——————————
<b>👤 ${t('Name')}:</b> ${name}
<b>📧 ${t('Email')}:</b> ${email}
<b>📱 ${t('Phone Number')}:</b> <a href="tel:${number}">${number}</a>
——————————
<b>💬 ${t('Your Message')}:</b>
${message}
`;

    sendMessage(text);
  };

  const renderStatusIcon = (fieldName) => {
    const field = fieldStatus[fieldName];
    if (!field.isTouched) return null;
    
    if (field.isValid) {
      return <FaCheck className="status-icon valid" />;
    } else {
      return <FaTimes className="status-icon invalid" />;
    }
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">{t('Contact')}</h2>

        <div className="section-text">
          <p>{t('contactText1')}</p>
          <p>{t('contactText2')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-label"><FaPhoneAlt /> {t('Phone')}</h3>
              <p className="info-value">
                <a href="tel:+998947238850">+998(94)723-88-50</a>
              </p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaEnvelope /> {t('Email')}</h3>
              <p className="info-value"><a href="mailto:muxamadaliyevibrohim2009@gmail.com">muxamadaliyevibrohim2009@gmail.com</a></p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaMapMarkerAlt /> {t('Address')}</h3>
              <p className="info-value">Samarqand, O'zbekiston</p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaTelegramPlane /> {t('Telegram')}</h3>
              <p className="info-value">
                <a href="https://t.me/Mukhamadaliyev20" target="_blank" rel="noreferrer">
                  @Mukhamadaliyev20
                </a>
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="info-label">{t('Name')}</label>
              <div className="input-with-status">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${fieldStatus.name.isTouched ? (fieldStatus.name.isValid ? 'valid' : 'invalid') : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('Enter your name')}
                  required
                />
                {renderStatusIcon('name')}
              </div>
              {fieldStatus.name.isTouched && !fieldStatus.name.isValid && (
                <span className="validation-message">
                  {t('Name')} kamida 2 ta belgidan iborat bo'lishi kerak
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="info-label">{t('Email')}</label>
              <div className="input-with-status">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${fieldStatus.email.isTouched ? (fieldStatus.email.isValid ? 'valid' : 'invalid') : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('Enter your email')}
                  required
                />
                {renderStatusIcon('email')}
              </div>
              {fieldStatus.email.isTouched && !fieldStatus.email.isValid && (
                <span className="validation-message">
                  To'g'ri {t('Email')} manzil kiriting
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="number" className="info-label">{t('Phone Number')}</label>
              <div className="input-with-status">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className={`form-input ${fieldStatus.number.isTouched ? (fieldStatus.number.isValid ? 'valid' : 'invalid') : ''}`}
                  value={formData.number}
                  onChange={handlePhoneChange}
                  onBlur={handleBlur}
                  placeholder={t('Enter your phone number')}
                  required
                />
                {renderStatusIcon('number')}
              </div>
              {fieldStatus.number.isTouched && !fieldStatus.number.isValid && (
                <span className="validation-message">
                  +998 va 9 ta raqam (jami 13 ta belgi)
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="info-label">{t('Your Message')}</label>
              <div className="textarea-with-status">
                <textarea
                  id="message"
                  name="message"
                  className={`message-area ${fieldStatus.message.isTouched ? (fieldStatus.message.isValid ? 'valid' : 'invalid') : ''}`}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('Write your message...')}
                  required
                />
                {renderStatusIcon('message')}
              </div>
              {fieldStatus.message.isTouched && !fieldStatus.message.isValid && (
                <span className="validation-message">
                  {t('Your Message')} kamida 10 ta belgidan iborat bo'lishi kerak
                </span>
              )}
            </div>

            <button type="submit" className="send-button" disabled={isLoading}>
              {isLoading ? t('Sending...') : t('Send Message')}
            </button>

            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;