import React, { useContext } from 'react'
import { Themecontext } from './UseContext'

function user() {
    const theme = useContext(Themecontext)
    const themedvalues = {
        backgroundColor:theme==="light"?'white':'Black',
        color:theme==="light"?'black':'white',
    }

    return (
    <div>
        <h1 style={themedvalues}>user</h1>
    </div>
  )
}

export default user