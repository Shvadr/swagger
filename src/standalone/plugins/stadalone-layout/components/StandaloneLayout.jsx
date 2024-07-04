import React from "react"
import PropTypes from "prop-types"
import Base64 from "./base64"

class StandaloneLayout extends React.Component {

  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired
  }

  render() {
    const { getComponent } = this.props
    const Container = getComponent("Container")
    const Row = getComponent("Row")
    const Col = getComponent("Col")
    const Topbar = getComponent("Topbar", true)
    const BaseLayout = getComponent("BaseLayout", true)
    const OnlineValidatorBadge = getComponent("onlineValidatorBadge", true)

    return (
      <Container className='swagger-ui'>
        
        <BaseLayout />
        <Row><Base64></Base64>
          <Col>
            <OnlineValidatorBadge />
            {/* <Topbar /> */}
          </Col>
        </Row>
      </Container>
    )
  }

}

export default StandaloneLayout
