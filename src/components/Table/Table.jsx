import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DateTimePicker from 'react-datetime-picker';

import './Table.scss'

import dollarIcon from '../../assets/Price.png'
import calendarIcon from '../../assets/calendar.png'
import fileIcon from '../../assets/file.png'
import reportIcon from '../../assets/statistics-report.png'
import { getFormattedDate, getDateDifference } from '../../utils/helperFunction'
import TableHeader from './TableHeader'
import ViewPrice from '../Modal/ViewPrice/ViewPrice';
import { FormattedMessage } from 'react-intl';

function Table(props) {
  const { showData, value, onChange, whichIsActiveTab } = props
  const [todayDate, setTodayDate] = useState(new Date().toISOString())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)

  useEffect(() => {
    setTodayDate(formattedDateForFindingDiff(todayDate))
  }, [])

  const formattedDateForFindingDiff = date => {
    const newdate = new Date(date)
    return (newdate.getFullYear() + ',' + parseInt(newdate.getMonth() + 1) + ',' + newdate.getDate())
  }

  const viewPriceHandler = (data) => {
    setIsModalOpen(true)
    setSelectedCampaign(data)
  }

  return (
    <div className="table-container">
      <table>
        <TableHeader />
        <tbody>
          {showData ?.length !== 0 ? showData ?.map((disp) =>
            <tr key={disp.id}>
              <td className='w-15 date-columns'>{getFormattedDate(disp.date)} <div>
                {whichIsActiveTab === 0 ?
                  <> {getDateDifference(formattedDateForFindingDiff(disp.date), todayDate)} <FormattedMessage id="time.daysAhead" defaultMessage="Days Ahead" /> </>
                  :
                  whichIsActiveTab === 1 ? <FormattedMessage id="time.live" defaultMessage="Live" />
                    :
                    whichIsActiveTab === 2 ? <> {getDateDifference(formattedDateForFindingDiff(disp.date), todayDate)} <FormattedMessage id="time.daysAgo" defaultMessage="Days Ago" /> </>
                      : ''}
              </div></td>
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
              <td className='view-column w-15' ><img className="dollar-icon" src={dollarIcon} /> <a onClick={() => viewPriceHandler(disp)}><FormattedMessage id="title.viewPricing" defaultMessage="View Pricing" /></a></td>
              <td className='action-column w-40'>
                <div className="actions-container">
                  <span onClick={() => window.open(disp.csv, '_blank')}><img className="file-icon" src={fileIcon} /> <span ><FormattedMessage id="title.csv" defaultMessage="CSV" /></span></span>
                  <span><img className="report-icon" src={reportIcon} /> <span><FormattedMessage id="title.report" defaultMessage="Report" /></span></span>
                  <span>
                    <DateTimePicker
                      onChange={(data) => onChange(data, disp.id)}
                      value={value}
                      format="MM DD YYY"
                      calendarIcon={<img className="calendar-icon" src={calendarIcon} />}
                    /> <span><FormattedMessage id="title.scheduleAgain" defaultMessage="Schedule Again" /></span></span>
                </div>
              </td>
            </tr>
          ) : <tr><td>No Data Found</td></tr>}
        </tbody>
      </table>
      {isModalOpen && <ViewPrice handleClose={() => setIsModalOpen(false)} show={isModalOpen} selectedCampaign={selectedCampaign} />}
    </div>
  )
}

Table.propTypes = {
  showData: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  whichIsActiveTab: PropTypes.number.isRequired
}

Table.defaultProps = {
  value: ''
}

export default Table
