import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filter';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
      };
      onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
      };
      onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
      }
    render(){
        return (
                <div>
        <input type="text" value={this.props.filter.text} onChange={(e) => {
            return props.dispatch(setTextFilter(e.target.value))
        }} />
        <select onChange={((e) => {
            if(e.target.value == "date"){
                return this.props.dispatch(sortByDate())
            }else if(e.target.value == "amount"){
                return this.props.dispatch(sortByAmount())
            }
        })}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filter.startDate}
          endDate={this.props.filter.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
    </div>
        )
    }
}

export default connect((state) => {
    return {
        filter: state.filter
    }
})(ExpenseListFilters);
