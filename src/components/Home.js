import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import DatePickerPage from './DatePicker';
function Home() {
  return (
    <div>
      <Header />

      <DatePickerPage />

      <Footer />
    </div>
  );
}

export default Home;
