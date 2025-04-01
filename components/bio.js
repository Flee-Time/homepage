import { Box, Divider, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
    padding-left: 1.5em;
    text-ident: -1.5em;
    padding-bottom: 0.25em;
    padding-top: 0.25em;
`

export const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1.2em;
`

export const AbSection = styled(Box)`
    padding-left: 0em;
    text-ident: 0em;
`

export const Abilities = styled.span`
    font-weight: bold;
    margin-right: 1.2em;
    padding-left: 1.2em;
`

export const BioDiv = () => (
    <Divider width={'95%'} mx={'auto'} bgColor={useColorModeValue('#111111', '#525252')} borderColor={useColorModeValue('#111111', '#525252')} borderRadius={'1px'}/>
)