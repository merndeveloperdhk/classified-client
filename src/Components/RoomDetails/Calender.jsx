import { DateRange } from "react-date-range";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const Calender = ({ value, handleSelect }) => {
    return (
       <DateRange
       rangeColors={['#F43F5E']}
       date={new Date()}
       ranges={[value]}
       showDateDisplay={false}
       direction='vertical'
    //    onChange={handleSelect}
    //    minDate={new Date()}
       />
    );
};

export default Calender;