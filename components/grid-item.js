import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      loading="eager"
    />
    <Text mt={2} fontSize={20}>{title}</Text>
    <Text fontSize={14}>{children}</Text>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
