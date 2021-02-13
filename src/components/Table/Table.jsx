import React from 'react'
import PropTypes from 'prop-types'
import DateTimePicker from 'react-datetime-picker';

import './Table.scss'

import dollarIcon from '../../assets/Price.png'
import calendarIcon from '../../assets/calendar.png'
import fileIcon from '../../assets/file.png'
import reportIcon from '../../assets/statistics-report.png'
import { getFormattedDate } from '../../utils/helperFunction'
import TableHeader from './TableHeader'

function Table(props) {
  const { showData, value, onChange } = props

  return (
    <div className="table-container">
      <table>
        <TableHeader />
        <tbody>
          {showData ?.length !== 0 ? showData ?.map((disp) =>
            <tr key={disp.id}>
              <td className='w-15'>{getFormattedDate(disp.date)}</td>
              <td className='w-30'>
                <div className="logo-text">
                  <img
                    src={disp.image_url}
                    alt="game Icon"
                    className="logo"
                  />
                  <div className="logo-content">
                    <p className="item-name">{disp.name}</p>
                    <p className="light-grey region">{disp.region}</p>
                  </div>
                </div>
              </td>
              <td className='view-column w-15'><img className="dollar-icon" src={dollarIcon} /> <span>View Pricing</span></td>
              <td className='action-column w-40'>
                <div className="actions-container">
                  <span><img className="file-icon" src={fileIcon} /> <span>CSV</span></span>
                  <span><img className="report-icon" src={reportIcon} /> <span>Report</span></span>
                  <span>
                    <DateTimePicker
                      onChange={(data) => onChange(data, disp.id)}
                      value={value}
                      format="MM DD YYY"
                      calendarIcon={<img className="calendar-icon" src={calendarIcon} />}
                    /> <span>Calender Icon</span></span>
                </div>
              </td>
            </tr>
          ) : <tr><td>No Data Found</td></tr>}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  showData: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func.isRequired
}

Table.defaultProps = {
  value: ''
}

export default Table
