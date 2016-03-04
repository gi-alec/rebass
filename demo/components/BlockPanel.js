
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  Block,
  Heading,
  Text,
  Panel,
  PanelHeader
} from '../../src'

const BlockPanel = () => (
  <Section>
    <Flex
      align='center'
      sm
      gutter={2}>
      <Box px={2} sm={6}>
        <Block
          borderLeft
          color='primary'>
          <Heading level={3}
            size={1}
            big>
            Block
          </Heading>
          <Text>
            A large solid piece of hard material, especially rock, stone, or wood, typically with flat surfaces on each side
          </Text>
        </Block>
      </Box>
      <Box px={2} sm={6}>
        <Panel m={0} theme='primary'>
          <PanelHeader>
            Panel
          </PanelHeader>
          <Text>
            A flat or curved component, typically rectangular, that forms or is set into the surface of a door, wall, or ceiling
          </Text>
        </Panel>
      </Box>
    </Flex>
  </Section>
)

export default BlockPanel
