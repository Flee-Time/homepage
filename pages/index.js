import { Container, Box, Heading, Image, useColorModeValue, Button, List, ListItem, Link, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import { Paragraph , Centered_Paragraph } from '../components/paragraph'
import { BioYear, BioSection, AbSection, Abilities } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord, IoLogoYoutube } from 'react-icons/io5'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout title="Anasayfa">
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', '#7289DA')} p={3} mb={6} align="center">
                    Benim ana sayfama hoş geldiniz, projelerimi incelemenizi teşvik ederim.
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" color={useColorModeValue('#11111', '#7289DA')} align="center">
                            Koray Bilir
                        </Heading>
                        <Heading as="h2" variant="page-title" color={useColorModeValue('#11111', '#7289DA')} fontSize={15} align="center">
                            FleeTime#2097
                        </Heading>
                        <p align="center">
                            FleeTime ( Öğrenci / Yazılım Geliştirici )
                        </p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center" >
                        <Image borderColor={useColorModeValue('gray.800', 'purple')} borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="homepage/images/profile-picture.jpg" alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Hakkımda
                    </Heading>
                    <Paragraph>
                        Koray, programlar ve web siteleri geliştirme tutkusu olan bir öğrencidir. 
                        Serbest çalışmayı benimsemiş bir zihniyeti vardır ve işi zamanında bitirir. 
                        Boş zamanlarında yeni uygulamalar tasarlamayı seviyor, 
                        bunu yapmak ona deneyim kazandırdığı için çok hoşuna gidiyor. 
                        Çalışmadığı zamanlarda muhtemelen arkadaşlarıyla oyun oynuyor. 
                        Koray, yaptıklarını dünyayla paylaşmak için boş zamanlarında yayın yapmayı seven birisidir. 
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Benim çalışmalarım
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Yeteneklerim
                    </Heading>
                    <Centered_Paragraph>
                        <AbSection>
                            <Abilities>C</Abilities>
                            &
                            <Abilities>C++</Abilities>
                            &
                            <Abilities>C#</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>HTML</Abilities>
                            &  
                            <Abilities>CSS</Abilities>
                            &
                            <Abilities>JAVASCRIPT</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Node.js</Abilities>
                            &
                            <Abilities>React</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Java</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Python</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Sql</Abilities> 
                        </AbSection>
                    </Centered_Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        İlgili Alanlarım
                    </Heading>
                    <Centered_Paragraph>
                        <AbSection>
                            <Abilities>Gömülü yazılım geliştirmek</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Web tasarımı yapmak</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Üç boyutlu animasyon yapmak</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>İndie oyun geliştirmek</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Fizik simulatörleri geliştirmek</Abilities>
                        </AbSection>
                    </Centered_Paragraph>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Zaman Çizelgesi
                    </Heading>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        Türkiye, Bursa'da doğdu.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        TÜBİTAK (Türkiye Bilimsel ve Teknolojik Araştırma Kurumu) yarışmasına katıldı.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        İNOVATIM'de İnovasyon ve Yapay Zeka dersleri aldı.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        OIB MTAL Lisesi'nden Okul üçüncüsü olarak Otomasyon Teknikeri derecesi ile mezun oldu.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        TEKNOFEST'in Otonom Denizaltı yarışmasında yer aldı.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Bursa Uludağ Üniversitesi'nde Bilgisayar Programcılığı'nda okumaya başladı.
                    </BioSection>
                </Section>
                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Sosyal Medya Linkleri
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/flee-time" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @Flee-Time
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/koray509" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @koray509
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/koraybei" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @koraybei
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.youtube.com/@fleetime2924" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoYoutube} />}>
                                    @fleetime2924
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.gg/S4UPxYsJDr" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page