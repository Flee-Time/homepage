import { Container, Box, Heading, Image, useColorModeValue, Button, List, ListItem, Link, Icon, Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import { Paragraph , Centered_Paragraph } from '../components/paragraph'
import { BioYear, BioSection, AbSection, Abilities, BioDiv } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord, IoLogoYoutube } from 'react-icons/io5'
import { TbBrandMatrix } from "react-icons/tb";
import Layout from '../components/layouts/article'

const Home = () => {
    return (
        <Layout title="Anasayfa">
            <Container>
                <Box display={{md:'flex'}} style={{marginTop:'30px'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" color={useColorModeValue('#111111', '#7289DA')} align="center">
                            Koray Bilir
                        </Heading>
                        {/* <Heading as="h2" variant="page-title" color={useColorModeValue('#111111', '#7289DA')} fontSize={15} align="center">
                            Discord : fleetime
                        </Heading> */}
                        <Heading as="h3" fontSize={15} align="center">
                            FleeTime ( Öğrenci / Yazılım Geliştirici )
                        </Heading>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center" >
                        <Image borderColor={useColorModeValue('#111111', '#7289DA')} borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="images/profile-picture.jpg" alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Hakkımda
                    </Heading>
                    <Paragraph>
                    Koray, endüstriyel otomasyon ve yazılım geliştirme alanlarında deneyimli bir teknoloji meraklısıdır. 
                    Web siteleri ve yazılımlar geliştirmenin yanı sıra, elektronik projeler üzerinde çalışmayı sever. 
                    Serbest çalışmaya yatkın, çözüm odaklı bir zihniyete sahiptir ve projelerini titizlikle tamamlar. 
                    Şu sıralar kişisel projelerine ve teknik altyapısını geliştirmeye odaklanıyor. 
                    Boş zamanlarında eski bilgisayar donanımlarıyla uğraşır, kendi sunucularını yönetir ve akıllı ev sistemleriyle ilgilenir.
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
                            <Abilities>Proglamlama Dilleri:</Abilities>
                            C, C++, C#, Java, Python, SQL
                        </AbSection>
                        <AbSection>
                            <Abilities>Web Teknolojileri:</Abilities>
                            HTML, CSS, JavaScript, Node.js, React
                        </AbSection>
                        <AbSection>
                            <Abilities>Sistem Yönetimi:</Abilities>
                            Linux sunucu yönetimi, Bash scripting
                        </AbSection>
                        <AbSection>
                            <Abilities>Diğer:</Abilities>
                            Gömülü sistemler, 3D CAD Modelleme (SolidWorks)
                        </AbSection>
                    </Centered_Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        İlgili Alanlarım
                    </Heading>
                    <Centered_Paragraph>
                        <AbSection>
                            <Abilities>Gömülü yazılım ve donanım geliştirme</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Linux sunucu yönetimi ve otomasyon</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Web tasarımı ve uygulama geliştirme</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Akıllı ev otomasyonu ve IoT sistemleri</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Fizik simülasyonları ve veri görselleştirme</Abilities>
                        </AbSection>
                        <AbSection>
                            <Abilities>Retro bilgisayar donanımları ve yazılımları</Abilities>
                        </AbSection>
                    </Centered_Paragraph>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Zaman Çizelgesi
                    </Heading>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        Türkiye, Bursa’da doğdu.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        TÜBİTAK (Türkiye Bilimsel ve Teknolojik Araştırma Kurumu) yarışmasına katıldı.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        İNOVATİM’de inovasyon ve yapay zeka dersleri aldı.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        OIB MTAL’den <b>okul üçüncüsü</b> olarak <i>Endüstriyel Otomasyon Teknikeri</i> derecesiyle mezun oldu.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        TEKNOFEST Otonom Denizaltı Yarışması’na katıldı.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2022 - 2024</BioYear>
                        Bursa Uludağ Üniversitesi Bilgisayar Programcılığı bölümünden <b>sınıf birincisi</b> olarak mezun oldu.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2023 - 2024</BioYear>
                        Bosch Türkiye’de <i>düşük kodlu uygulama geliştirme</i> alanında staj yaptı.
                    </BioSection>
                    <BioDiv/>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        Anadolu Üniversitesi Açıköğretim Fakültesi <i>Yönetim Bilişim Sistemleri</i> bölümünde eğitimine başladı.
                    </BioSection>
                </Section>
                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Sosyal Medya Linkleri
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://matrix.to/#/@fleetime:matrix.org" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={TbBrandMatrix} />}>
                                    @fleetime:matrix.org
                                </Button>
                            </Link>
                        </ListItem>
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
                        {/* <ListItem>
                            <Link href="https://discord.gg/S4UPxYsJDr" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord
                                </Button>
                            </Link>
                        </ListItem> */}
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home