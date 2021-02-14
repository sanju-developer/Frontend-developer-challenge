import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    /* @param {error} */
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className="noRoute-screen codeFailure">
                        <div className="routeLeft-section">
                            <h1>
                                Something went wrong
                            </h1>
                        </div>
                    </div>
                </>
            )
        }
        const { children } = this.props
        return children
    }
}

export default ErrorBoundary

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired
}
