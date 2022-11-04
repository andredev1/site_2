import React, { Component } from 'react'
import { Layout, List, Typography } from 'antd'
import { contentStyle } from '../../styles'
import coinGeckoLogo from '../../images/branding/CoinGecko.png'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'
const { Content } = Layout
const { Title, Paragraph } = Typography

class ReactAbout extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('about')
  }

  render () {
    const challenges = [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ]

    return (
      <Layout style={{ padding: '1rem' }}>
        <Content className="text-focus-in" style={{ ...contentStyle }}>
          <Title level={2}>About Ark4</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </Paragraph>

          <Title level={3}>Purpose</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>

          <Title level={3}>Data source</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>
          <Paragraph/>

          <Title level={3}>Challenges</Title>
          <Paragraph>Building Ark4 posed some challenges;</Paragraph>
          <List
            style={{ marginBottom: '2rem' }}
            size="medium"
            bordered
            dataSource={challenges}
            renderItem={c => <List.Item>{c}</List.Item>}
          />
        </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactAbout)
