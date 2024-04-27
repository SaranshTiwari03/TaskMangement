import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Importing LocalizationProvider from MUI date-pickers
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Importing AdapterDayjs from MUI date-pickers
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'; // Importing DateCalendar from MUI date-pickers

function Calender() {
  return (
    <div className='calender'>
        {/* Providing localization context using LocalizationProvider */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Rendering DateCalendar component */}
          <DateCalendar />
        </LocalizationProvider>
    </div>
  )
}

export default Calender;