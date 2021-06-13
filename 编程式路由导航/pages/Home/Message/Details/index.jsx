import React, { Component } from 'react'
// import qs from 'querystring'

const data = [
  { id: '01', content: '消息11111' },
  { id: '02', content: '消息22222' },
  { id: '03', content: '消息33333' }
]
export default class Details extends Component {
  render() {
    // const { id, title } = this.props.match.params // params 参数

    /* search 参数 是urlencode字符串  需要通过 qs转换 */
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    /* 接收state参数 */
    const { id, title } = this.props.location.state || {}
    const findData = data.find(findObj => {
      return findObj.id === id
    })

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findData.content}</li>
      </ul>
    )
  }
}
