import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './ViewPrice.scss'

function ViewPrice(props) {
    const { handleClose, show, selectedCampaign } = props
    return (
        <>
            <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="img-section">
                        <img src={selectedCampaign.image_url} alt="game-img" />
                        <div className="img-detail">
                            <h6>{selectedCampaign.name}</h6>
                            <p>{selectedCampaign.region}</p>
                        </div>
                    </div>
                    <h3>Pricing</h3>
                    <div className="price-container">
                        <div className="price">
                            <span>1 Week - 1 Month</span>
                            <span className="price-value">{selectedCampaign ?.Onew1m}</span>
                        </div>
                        <div className="price">
                            <span>6 Months</span>
                            <span className="price-value">{selectedCampaign ?.Sixm}</span>
                        </div>
                        <div className="price">
                            <span>1 Year</span>
                            <span className="price-value">{selectedCampaign ?.Oney}</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

ViewPrice.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    selectedCampaign: PropTypes.object.isRequired
}

export default ViewPrice;