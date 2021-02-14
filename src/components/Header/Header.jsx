import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './Header.scss'

import { LngAction } from '../../redux/actions/lngAction'

function Header() {
  const lngs = [{ key: 'lng1', value: 'en' }, { key: 'lng2', value: 'deu' }]
  const lng = useSelector((state) => state.lang.data)
  const dispatch = useDispatch()

  const onSelectHandler = e => {
    dispatch(LngAction(e.target.value))
  }


  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-text">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/bluestacks-1-569566.png"
            srcSet="https://cdn.iconscout.com/icon/free/png-512/bluestacks-1-569566.png 2x"
            alt="Bluestacks Icon"
            className="logo"
          />
          <div className="logo-content">
            <h2 className="white-color">Blue Stacks</h2>
            <p className="green-color">Play Bigger</p>
          </div>
        </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select" onChange={onSelectHandler} value={lng}>
            {lngs.map(l => <option key={l.key}>{l.value}</option>)}
          </Form.Control>
        </Form.Group>
      </div>
    </div>
  )
}

export default Header
