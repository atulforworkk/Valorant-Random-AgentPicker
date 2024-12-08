import { Grid } from '@mantine/core'
import React from 'react'

type Props = {}

const AgentCard = (props: Props) => {
  return (
        <Grid.Col span={2.4} className="flex items-center justify-center">
            <h1 className='text-lg'>
                Player 1
            </h1>
                <div>
            <img src="" alt="" />
            </div>
        
        </Grid.Col>
  )
}

export default AgentCard