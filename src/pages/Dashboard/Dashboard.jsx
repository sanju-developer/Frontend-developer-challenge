import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Spinner } from 'react-bootstrap'

import './Dashboard.scss'

import { tabsConstant } from '../../utils/constants'
import Header from '../../components/Header/Header'
import Tabs from '../../components/Tabs/Tabs'
import Table from '../../components/Table/Table'
import { CampaignAction } from '../../redux/actions/campaignAction'
import { getPastCampaigns, getLiveCampaigns, getFutureCampaigns } from '../../utils/helperFunction'

function Dashboard() {
  const dispatch = useDispatch()
  const [tabsConstantState, setTabsConstantState] = useState(tabsConstant)
  const apiData = useSelector((state) => state.campaigns.apiData)
  const [tableData, setTableData] = useState([])
  const isApiLoading = useSelector((state) => state.campaigns.isApiLoading)
  const [selectedDate, setDateHandler] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false)
  const [whichIsActiveTab, setWhichIsActiveTab] = useState(0)
  const [sourceOfTruth, setSourceOfTruth] = useState([])

  useEffect(() => {
    // fake api call for getting list of campaigns
    dispatch(CampaignAction())
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (apiData ?.data && tableData.length === 0) {
      // make copy of api data (master data)
      setSourceOfTruth(apiData ?.data)
      // set table data
      setTableData(apiData ?.data)
    }
  }, [apiData ?.data])

  useEffect(() => {
    if (tableData.length !== 0 && isMounted) {
      // update table data as per view (present, past and future campaigns)
      updateTableData()
      setIsMounted(false)
    }
  }, [tableData, isMounted])

  useEffect(() => {
    // update table data on behalf of which tab (Upcoming, Live, Past) is selected by user
    updateTableData()
  }, [whichIsActiveTab])

  const updateTableData = () => {
    if (sourceOfTruth ?.length !== 0) {
      if (whichIsActiveTab === 2) {
        setTableData(getPastCampaigns(sourceOfTruth))
      } else if (whichIsActiveTab === 1) {
        setTableData(getLiveCampaigns(sourceOfTruth))
      } else if (whichIsActiveTab === 0) {
        setTableData(getFutureCampaigns(sourceOfTruth))
      }
    }
  }

  const tabClickHandler = (index) => {
    setWhichIsActiveTab(index)
    // key active class on selecte tab in order to show it as active Tab
    setTabsConstantState(
      tabsConstantState.map((item, ind) =>
        index === ind
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    )
  }

  const dateHandler = (event, id) => {
    // update date in master data on re-scheduling
    setDateHandler(event)
    const copyOfSourceOfTruth = [...sourceOfTruth]
    const index = copyOfSourceOfTruth.findIndex(finalData => finalData.id === id)
    copyOfSourceOfTruth[index].date = event.toISOString()
    setSourceOfTruth(copyOfSourceOfTruth)
    // once master data updated, then updae the view user is looking for
    updateTableData()
  }

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-sub-container">
        <h1 className="dark-blue-color headline"><FormattedMessage id="headline" defaultMessage="Manage Campaigns" /></h1>
        <Tabs
          tabsConstantState={tabsConstantState}
          tabClickHandler={tabClickHandler}
        />
        {isApiLoading ? <div className="loader"><Spinner animation="border" role="status" variant="secondary">
          <span className="sr-only">Loading...</span>
        </Spinner> </div> : <Table showData={tableData} value={selectedDate} onChange={dateHandler} whichIsActiveTab={whichIsActiveTab} />}
      </div>
    </div>
  )
}

export default Dashboard
