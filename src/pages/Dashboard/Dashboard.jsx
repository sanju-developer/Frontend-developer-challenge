import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Dashboard.scss'

import { tabsConstant } from '../../utils/constants'
import Header from '../../components/Header/Header'
import Tabs from '../../components/Tabs/Tabs'
import Table from '../../components/Table/Table'
import { CampaignAction } from '../../redux/actions/campaignAction'
import { getPastCampaigns, getLiveCampaigns, getFutureCampaigns } from '../../utils/helperFunction'
import { FormattedMessage } from 'react-intl'

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
    dispatch(CampaignAction())
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (apiData ?.data && tableData.length === 0) {
      setSourceOfTruth(apiData ?.data)
      setTableData(apiData ?.data)
    }
  }, [apiData ?.data])

  useEffect(() => {
    if (tableData.length !== 0 && isMounted) {
      updateTableData()
      setIsMounted(false)
    }
  }, [tableData, isMounted])

  useEffect(() => {
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
    setTabsConstantState(
      tabsConstantState.map((item, ind) =>
        index === ind
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    )
  }

  const dateHandler = (event, id) => {
    setDateHandler(event)
    const copyOfSourceOfTruth = [...sourceOfTruth]
    const index = copyOfSourceOfTruth.findIndex(finalData => finalData.id === id)
    copyOfSourceOfTruth[index].date = event.toISOString()
    setSourceOfTruth(copyOfSourceOfTruth)
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
        {isApiLoading ? null : <Table showData={tableData} value={selectedDate} onChange={dateHandler} whichIsActiveTab={whichIsActiveTab} />}
      </div>
    </div>
  )
}

export default Dashboard
