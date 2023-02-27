import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <>
      <FullCalendar 
        plugins={[dayGridPlugin, interactionPlugin]} 
        initialView="dayGridMonth"
        selectable = {true}
        events={[
          { title: 'Math Workshop', date: '2023-02-23' },
          { title: 'SAT Workshop', date: '2023-02-24' },
          { title: 'Science Workshop', date: '2023-02-29' },
          { title: 'SAT Workshop', date: '2023-02-28' }
        ]}
      />
    </>
  );
};

export default Calendar;
