import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      "Home": "Home",
      "About": "About",
      "Skills": "Skills",
      "Projects": "Projects",
      "Contact": "Contact",
      
      // Home
      "Hello, I am": "Hello, I am",
      "Frontend Developer & UI Designer": "Frontend Developer & UI Designer",
      "homeDescription": "I create modern, responsive and beautiful web experiences. With 1+ years of experience building interfaces with React, Tailwind and other modern tools.",
      "Download CV": "Download CV",
      
      // About
      "About Me": "About Me",
      "aboutText1": "I'm Ibrohim, a passionate Frontend Developer with over 1 years of professional experience. I specialize in building modern, responsive, and user-friendly web applications using React, Tailwind CSS, and other cutting-edge technologies.",
      "aboutText2": "Throughout my career, I have successfully delivered multiple projects, ensuring clean code, performance optimization, and seamless user experience.",
      "Years of": "Years of",
      "Experience": "Experience",
      "Happy": "Happy",
      "Customers": "Customers",
      "Completed": "Completed",
      "Total": "Total",
      "school": "school",
      
      // Skills
      "My Skills": "My Skills",
      "Hard Skills": "Hard Skills",
      "Soft Skills": "Soft Skills",
      "Communication": "Communication",
      "Teamwork": "Teamwork",
      "Creativity": "Creativity",
      "Time Management": "Time Management",
      "Problem Solving": "Problem Solving",
      "Critical Thinking": "Critical Thinking",
      
      // Projects
      "My Projects": "My Projects",
      
      // Contact
      "Let's work together": "Let's work together",
      "contactText1": "Contact me using the information below or fill out the form.",
      "contactText2": "I'm waiting for your project ideas and suggestions.",
      "Phone": "Phone",
      "Email": "Email",
      "Address": "Address",
      "Telegram": "Telegram",
      "Name": "Name",
      "Phone Number": "Phone Number",
      "Your Message": "Your Message",
      "Send Message": "Send Message",
      "Enter your name": "Enter your name",
      "Enter your email": "Enter your email",
      "Enter your phone number": "Enter your phone number",
      "Write your message...": "Write your message...",
      "Sending...": "Sending...",
      "Message sent successfully!": "Message sent successfully!",
      "Error occurred": "Error occurred",
      "Please fill all fields": "Please fill all fields",
      
      // 404
      "Oops! Page Not Found": "Oops! Page Not Found",
      "404message": "The page you are looking for doesn't exist or has been moved.",
      "Go Back Home": "Go Back Home"
    }
  },

  uz: {
    translation: {
      // Navigation
      "Home": "Bosh Sahifa",
      "About": "Men Haqimda",
      "Skills": "Ko'nikmalar",
      "Projects": "Loyihalar",
      "Contact": "Aloqa",
      
      // Home
      "Hello, I am": "Salom, men",
      "Frontend Developer & UI Designer": "Frontend Dasturchi & UI Dizayner",
      "homeDescription": "Men zamonaviy, moslashuvchan va chiroyli veb tajribalar yarataman. React, Tailwind va boshqa zamonaviy vositalar yordamida interfeyslarni qurishda 1+ yillik tajribaga egaman.",
      "Download CV": "CV Yuklab olish",
      
      // About
      "About Me": "Men Haqimda",
      "aboutText1": "Men Ibrohim, 1 yildan ortiq professional tajribaga ega bo'lgan Frontend Dasturchiman. React, Tailwind CSS va boshqa zamonaviy texnologiyalardan foydalangan holda zamonaviy, moslashuvchan va foydalanuvchilar uchun qulay veb-ilovalarni yaratishga ixtisoslashganman.",
      "aboutText2": "Faoliyatim davomida ko'plab loyihalarni muvaffaqiyatli yakunladim, toza kod, samaradorlikni optimallashtirish va uzluksiz foydalanuvchi tajribasini ta'minladim.",
      "Years of": "Yillik",
      "Experience": "Tajriba",
      "Happy": "Mamnun",
      "Customers": "Mijozlar",
      "Completed": "Yakunlangan",
      "Total": "Jami",
      "school": "maktab",
      
      // Skills
      "My Skills": "Mening Ko'nikmalarim",
      "Hard Skills": "Texnik Ko'nikmalar",
      "Soft Skills": "Shaxsiy Ko'nikmalar",
      "Communication": "Muloqot",
      "Teamwork": "Jamoa Ishi",
      "Creativity": "Ijodkorlik",
      "Time Management": "Vaqt Boshqaruvi",
      "Problem Solving": "Muammolarni Hal Qilish",
      "Critical Thinking": "Tanqidiy Fikrlash",
      
      // Projects
      "My Projects": "Mening Loyihalarim",
      
      // Contact
      "Let's work together": "Keling, Birgalikda Ishlaymiz",
      "contactText1": "Menga aloqaga chiqish uchun quyidagi ma'lumotlardan foydalaning yoki formani to'ldiring.",
      "contactText2": "Loyiha g'oyalari yoki takliflaringizni kutaman.",
      "Phone": "Telefon",
      "Email": "Elektron Pochta",
      "Address": "Manzil",
      "Telegram": "Telegram",
      "Name": "Ism",
      "Phone Number": "Telefon Raqam",
      "Your Message": "Xabaringiz",
      "Send Message": "Xabar Yuborish",
      "Enter your name": "Ismingizni kiriting",
      "Enter your email": "Email manzilingiz",
      "Enter your phone number": "Telefon raqamingiz",
      "Write your message...": "Xabaringizni yozing...",
      "Sending...": "Yuborilmoqda...",
      "Message sent successfully!": "Xabaringiz muvaffaqiyatli yuborildi!",
      "Error occurred": "Xatolik yuz berdi",
      "Please fill all fields": "Iltimos, barcha maydonlarni to'ldiring.",
      
      // 404
      "Oops! Page Not Found": "Voy! Sahifa Topilmadi",
      "404message": "Siz qidirgan sahifa mavjud emas yoki ko'chirilgan.",
      "Go Back Home": "Bosh Sahifaga Qaytish"
    }
  },

  ru: {
    translation: {
      // Navigation
      "Home": "Главная",
      "About": "Обо Мне",
      "Skills": "Навыки",
      "Projects": "Проекты",
      "Contact": "Контакты",
      
      // Home
      "Hello, I am": "Привет, я",
      "Frontend Developer & UI Designer": "Frontend Разработчик & UI Дизайнер",
      "homeDescription": "Я создаю современные, адаптивные и красивые веб-интерфейсы. Имею более 1 года опыта создания интерфейсов с помощью React, Tailwind и других современных инструментов.",
      "Download CV": "Скачать Резюме",
      
      // About
      "About Me": "Обо Мне",
      "aboutText1": "Я Иброхим, страстный Frontend Разработчик с более чем 1 годом профессионального опыта. Я специализируюсь на создании современных, адаптивных и удобных веб-приложений с использованием React, Tailwind CSS и других передовых технологий.",
      "aboutText2": "На протяжении своей карьеры я успешно завершил несколько проектов, обеспечивая чистый код, оптимизацию производительности и бесшовный пользовательский опыт.",
      "Years of": "Лет",
      "Experience": "Опыта",
      "Happy": "Довольных",
      "Customers": "Клиентов",
      "Completed": "Завершенных",
      "Total": "Всего",
      "school": "школа",
      
      // Skills
      "My Skills": "Мои Навыки",
      "Hard Skills": "Технические Навыки",
      "Soft Skills": "Личные Навыки",
      "Communication": "Коммуникация",
      "Teamwork": "Командная Работа",
      "Creativity": "Креативность",
      "Time Management": "Тайм-Менеджмент",
      "Problem Solving": "Решение Проблем",
      "Critical Thinking": "Критическое Мышление",
      
      // Projects
      "My Projects": "Мои Проекты",
      
      // Contact
      "Let's work together": "Давайте Работать Вместе",
      "contactText1": "Свяжитесь со мной, используя информацию ниже или заполните форму.",
      "contactText2": "Жду ваши идеи проектов и предложения.",
      "Phone": "Телефон",
      "Email": "Эл. Почта",
      "Address": "Адрес",
      "Telegram": "Телеграм",
      "Name": "Имя",
      "Phone Number": "Номер Телефона",
      "Your Message": "Ваше Сообщение",
      "Send Message": "Отправить Сообщение",
      "Enter your name": "Введите ваше имя",
      "Enter your email": "Введите ваш email",
      "Enter your phone number": "Введите ваш номер телефона",
      "Write your message...": "Напишите ваше сообщение...",
      "Sending...": "Отправляется...",
      "Message sent successfully!": "Ваше сообщение успешно отправлено!",
      "Error occurred": "Произошла ошибка",
      "Please fill all fields": "Пожалуйста, заполните все поля.",
      
      // 404
      "Oops! Page Not Found": "Упс! Страница Не Найдена",
      "404message": "Страница, которую вы ищете, не существует или была перемещена.",
      "Go Back Home": "Вернуться на Главную"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
