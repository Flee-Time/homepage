import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="description" content="Koray Bilir'in portfolyo sitesi." />
                <title>Koray Bilir</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="contrainer.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main