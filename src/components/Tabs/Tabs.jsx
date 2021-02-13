import React from 'react'
import PropTypes from 'prop-types'
import './Tabs.scss'

function Tabs(props) {
  const { tabClickHandler, tabsConstantState } = props
  return (
    <>
      <div className="list">
        {tabsConstantState.map((tab, index) => (
          <span
            className={`${
              tab.isActive ? 'active green-color' : 'not-active text-blue'
              }`}
            key={tab.key}
            onClick={() => tabClickHandler(index)}
          >
            {tab.text}
          </span>
        ))}
      </div>
      <hr className="grey-color" />
    </>
  )
}

Tabs.propTypes = {
  tabClickHandler: PropTypes.func.isRequired,
  tabsConstantState: PropTypes.array.isRequired
}

export default Tabs
