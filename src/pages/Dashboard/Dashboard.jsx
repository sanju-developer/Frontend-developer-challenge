import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Dashboard.scss'

import { tabsConstant } from '../../utils/constants'
import Header from '../../components/Header/Header'
import Tabs from '../../components/Tabs/Tabs'
import Table from '../../components/Table/Table'
import { CampaignAction } from '../../redux/actions/campaignAction'

function Dashboard() {
  const dispatch = useDispatch()
  const [tabsConstantState, setTabsConstantState] = useState(tabsConstant)
  const apiData = useSelector((state) => state.campaigns.apiData)
  const isApiLoading = useSelector((state) => state.campaigns.isApiLoading)

  useEffect(() => {
    dispatch(CampaignAction())
  }, [])

  const tabClickHandler = index => {
    setTabsConstantState(
      tabsConstantState.map((item, ind) =>
        index === ind
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    )
  }
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-sub-container">
        <h1 className="dark-blue-color headline">Manage Campaigns</h1>
        <Tabs
          tabsConstantState={tabsConstantState}
          tabClickHandler={tabClickHandler}
        />
        {isApiLoading ? null : <Table apiData={apiData} />}
      </div>
    </div>
  )
}

export default Dashboard
