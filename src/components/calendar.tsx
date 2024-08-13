import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import { format } from 'date-fns';
import Modal from './modal'; 

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState('');
  const [selectedEventDate, setSelectedEventDate] = useState('');

  const handleEventClick = (info: any) => {
    const eventDate = format(info.event.start, 'dd MMMM yyyy');
    setSelectedEventTitle(info.event.title);
    setSelectedEventDate(eventDate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto mb-12">
        <FullCalendar 
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            rrulePlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={[
            {
              title: 'Bachata Beginners',
              startTime: '19:00:00',
              endTime: '20:00:00',
              rrule: {
                freq: 'weekly',
                interval: 2,
                dtstart: '2024-08-12T19:00:00',
                until: '2024-12-31T20:00:00'
              },
              color: '#f87171',
              textColor: '#fff',
            },
            {
              title: 'Salsa Beginners',
              startTime: '19:00:00',
              endTime: '20:00:00',
              rrule: {
                freq: 'weekly',
                interval: 2,
                dtstart: '2024-08-14T19:00:00',
                until: '2024-12-31T20:00:00'
              },
              color: '#f87171',
              textColor: '#fff',
            }
          ]}
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          eventContent={({ event }) => {
            return (
              <div className="flex flex-col">
                <span>{event.title}</span>
                <span className="text-sm">7 PM</span>
              </div>
            );
          }}
          eventClick={handleEventClick}
        />
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        eventTitle={selectedEventTitle}
        eventDate={selectedEventDate}
      />
    </>
  );
}
