import React from 'react'

import { Box } from '@chakra-ui/react'

class SubscribeWidget extends React.Component {
  render() {
    return (
      <Box>
        <iframe src="https://banklessdao.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EE', background: 'white' }} frameBorder="0" scrolling="no"></iframe>
      </Box>
    )
  }
}

export default SubscribeWidget
