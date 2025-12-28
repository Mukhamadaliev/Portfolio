import React, { useState } from "react";
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt,  FaCheck, FaTimes } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 

const Contact = ({ isDarkMode, t }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "", 
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldStatus, setFieldStatus] = useState({
    name: { isValid: false, isTouched: false },
    email: { isValid: false, isTouched: false },
    number: { isValid: false, isTouched: false },
    message: { isValid: false, isTouched: false }
  });

  // .env dan ma'lumotlar
  const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

  // Telefon raqami o'zgarganda (barcha davlatlar uchun)
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, number: value });
    
    // Validatsiya: Xalqaro raqamlar kamida 8 ta raqamdan iborat bo'ladi
    const isValid = value.length >= 8; 
    setFieldStatus(prev => ({
      ...prev,
      number: { isValid: isValid, isTouched: true }
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
      [name]: { ...prev[name], isValid: isValid, isTouched: true }
    }));
  };

  const handleBlur = (fieldName) => {
    setFieldStatus(prev => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isTouched: true }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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

    // Raqam boshiga '+' qo'shish (agar bo'lmasa)
    const formattedNumber = formData.number.startsWith('+') ? formData.number : `+${formData.number}`;

    const text = `
<b>📩 Yangi xabar!</b>
——————————
<b>👤 Ism:</b> ${formData.name}
<b>📧 Email:</b> ${formData.email}
<b>📱 Tel:</b> <a href="tel:${formattedNumber}">${formattedNumber}</a>
——————————
<b>💬 Xabar:</b>
${formData.message}
`;

    try {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      });

      if (res.ok) {
        setStatus(t('Message sent successfully!'));
        setFormData({ name: "", email: "", message: "", number: "" });
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
      setStatus("⚠️ Xatolik yuz berdi!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStatusIcon = (fieldName) => {
    const field = fieldStatus[fieldName];
    if (!field.isTouched) return null;
    return field.isValid ? <FaCheck className="status-icon valid" /> : <FaTimes className="status-icon invalid" />;
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">{t('Contact')}</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-block">
              <h3 className="info-label"><FaPhoneAlt /> {t('Phone')}</h3>
              <p className="info-value"><a href="tel:+998947238850">+998(94) 723-88-50</a></p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaEnvelope /> {t('Email')}</h3>
              <p className="info-value"><a href="mailto:muxamadaliyevibrohim2009@gmail.com">muxamadaliyevibrohim2009@gmail.com</a></p>
            </div>
            <div className="info-block">
              <h3 className="info-label"><FaMapMarkerAlt /> {t('Address')}</h3>
              <p className="info-value">Samarqand, O'zbekiston</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label className="info-label">{t('Name')}</label>
              <div className="input-with-status">
                <input
                  type="text"
                  name="name"
                  className={`form-input ${fieldStatus.name.isTouched ? (fieldStatus.name.isValid ? 'valid' : 'invalid') : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder={t('Enter your name')}
                  required
                />
                {renderStatusIcon('name')}
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="info-label">{t('Email')}</label>
              <div className="input-with-status">
                <input
                  type="email"
                  name="email"
                  className={`form-input ${fieldStatus.email.isTouched ? (fieldStatus.email.isValid ? 'valid' : 'invalid') : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder={t('Enter your email')}
                  required
                />
                {renderStatusIcon('email')}
              </div>
            </div>

            {/* Phone (Barcha davlatlar) */}
            <div className="form-group">
              <label className="info-label">{t('Phone Number')}</label>
              <div className={`input-with-status phone-wrapper ${fieldStatus.number.isTouched ? (fieldStatus.number.isValid ? 'valid' : 'invalid') : ''}`}>
                <PhoneInput
                  country={'uz'} 
                  enableSearch={true} // Davlatni qidirish imkoniyati
                  value={formData.number}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur('number')}
                  inputProps={{
                    name: 'number',
                    required: true,
                  }}
                  containerClass="phone-container"
                  inputClass="form-input"
                />
                {renderStatusIcon('number')}
              </div>
            </div>

            {/* Message */}
            <div className="form-group">
              <label className="info-label">{t('Your Message')}</label>
              <div className="textarea-with-status">
                <textarea
                  name="message"
                  className={`message-area ${fieldStatus.message.isTouched ? (fieldStatus.message.isValid ? 'valid' : 'invalid') : ''}`}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder={t('Write your message...')}
                  required
                />
                {renderStatusIcon('message')}
              </div>
            </div>

            <button type="submit" className="send-button" disabled={isLoading}>
              {isLoading ? t('Sending...') : t('Send Message')}
            </button>

            {status && <p className={`status-msg ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;