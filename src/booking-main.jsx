import React from 'react';
import { createRoot } from 'react-dom/client';
import BookingForm from './booking-form.jsx';

const el = document.getElementById('booking-root');
if (el) {
  createRoot(el).render(<BookingForm />);
}
