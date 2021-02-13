import React from 'react'
import PropTypes from 'prop-types'


import './Table.scss'

import dollarIcon from '../../assets/Price.png'
import calendarIcon from '../../assets/calendar.png'
import fileIcon from '../../assets/file.png'
import reportIcon from '../../assets/statistics-report.png'
import { tableHeaderConstant } from '../../utils/constants'
import { getFormattedDate } from '../../utils/helperFunction'

function Table(props) {
  const { apiData } = props
  return (
    <div className="table-container">
      <table>
        <thead className="text-blue">
          <tr>
            {tableHeaderConstant.map((th, index) => (
              <th
                className={`${
                  index === 0 || index === 2
                    ? 'w-15'
                    : index === 1
                      ? 'w-30'
                      : 'w-50'
                  }`}
                key={th.key}
              >
                {th.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {apiData ?.data ?.map((data) => <>
            <tr key={data.id}>
              <td className='w-15'>{getFormattedDate(data.date)}</td>
              <td className='w-30'>
                <div className="logo-text">
                  <img
                    src={data.image_url}
                    alt="game Icon"
                    className="logo"
                  />
                  <div className="logo-content">
                    <p className="item-name">{data.name}</p>
                    <p className="light-grey region">{data.region}</p>
                  </div>
                </div>
              </td>
              <td className='view-column w-15'><img className="dollar-icon" src={dollarIcon} /> <span>View Pricing</span></td>
              <td className='action-column w-40'>
                <div className="actions-container">
                  <span><img className="file-icon" src={fileIcon} /> <span>CSV</span></span>
                  <span><img className="report-icon" src={reportIcon} /> <span>Report</span></span>
                  <span><img className="calendar-icon" src={calendarIcon} /> <span>Calender Icon</span></span>
                </div>
              </td>
            </tr>
          </>
          )}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  apiData: PropTypes.array.isRequired
}

export default Table
