import React, { Component } from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker />
      </div>
    )
  }
}
