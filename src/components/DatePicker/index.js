import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DatePicker = props => {
  const { label, fieldName, data, handleChange } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    console.log(date);
    handleChange(date);
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          fullWidth
          id="date-picker-inline"
          name={fieldName}
          label={label}
          value={data.occurrence_date || selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          inputVariant="outlined"
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;