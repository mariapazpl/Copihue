import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import { format } from 'date-fns';

interface CalendarProps {
  onJoinClick: (title: string, type: string, date: string, instructor: string, pricing: string, duration: string, location: string) => void;
}

export default function Calendar({ onJoinClick }: CalendarProps) {

  const handleEventClick = (info: any) => {
    const eventDate = format(info.event.start, 'dd MMMM yyyy');
    if (new Date(info.event.start) < new Date()) {
      alert("You can't book past classes.");
      return;
    }
    onJoinClick(info.event.title, 'Drop-in', eventDate, info.event.extendedProps.instructor, ' $20 CAD', ' 1 hour', ' 25 Capreol Court, Toronto ON');
  };

  const handleDateClick = (info: any) => {
    if (new Date(info.dateStr) < new Date()) {
      alert("You can't book past classes.");
    } else {
      // Implement booking logic for future dates
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
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
              dtstart: '2024-08-12T19:00:00',
              until: '2024-12-31T20:00:00'
            },
            color: '#f87171',
            textColor: '#fff',
            instructor: 'Maria',
          },
          {
            title: 'Salsa Beginners',
            startTime: '19:00:00',
            endTime: '20:00:00',
            rrule: {
              freq: 'weekly',
              dtstart: '2024-08-14T19:00:00',
              until: '2024-12-31T20:00:00'
            },
            color: '#f87171',
            textColor: '#fff',
            instructor: 'Ingmar',
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
        dateClick={handleDateClick}
        dayCellDidMount={(info) => {
          if (new Date(info.date).getTime() < new Date().setHours(0, 0, 0, 0)) {
            info.el.style.backgroundColor = '#e5e7eb'; // Tailwind gray-300
            info.el.style.color = '#9ca3af'; // Tailwind gray-500
          }
        }}
        height="130vh" // Adjust the height as needed
      />
    </div>
  );
}
