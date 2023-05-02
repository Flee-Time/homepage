import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbSlimeVR from '../public/images/projects/slimevr.png'
import thumbDireksiyon from '../public/images/projects/direksiyon.png'
import thumb3DPrinter from '../public/images/projects/3dprinter.png'
import thumbFlLight from '../public/images/projects/fllight.png'
import thumbVerlet from '../public/images/projects/verlet.png'
import thumbArdupilot from '../public/images/projects/ardupilot.png'
import thumbCDworldgen from '../public/images/projects/cdworldgen.png'

const Page = () => (
  <Layout title="Calışmalarım">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projelerim
      </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <GridItem id="SlimeVR" title="Sanal Gerçeklikte Ayak Takibi" thumbnail={thumbSlimeVR}>
                Sanal gerçeklikte normalde sadece ellerimiz ve kafamız takip edilir. Benim tasarladığım kart ile ucuz maliyetle ayaklarınızı takip ettirebilirisiniz.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="Direksiyon" title="900 Derecelik Simulatör Direksiyon" thumbnail={thumbDireksiyon}>
                Şuanda piyasada olan profesyonel direksiyonlar 5000TL'den başlıyor. Ben toplam 786TL maliyet çıkararak kendime 900 derece olan aşırı hassas bir direksiyon yapmış oldum. Çoğu parçası üç boyutlu printerdan basılmıştır.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="3DPrinter" title="3D Printer" thumbnail={thumb3DPrinter}>
                2300TL'lik parçalar ile eski üç boyutlu printerımı kullanarak yeni birtane printer üretmiş oldum. Üç boyutlu basılmış olan parcaların hepsi benim printerımdan basılmıştır.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="FlLight" title="Flipper Zero'nun el yapımı klonu" thumbnail={thumbFlLight}>
                Flipper Zero adıyla tanınan hackleme cihazının sadece subghz özelliği olan klonudur. Yazılan bütün kodları bana aittir, Tamamen C dilinde yazılmıştır.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="Verlet" title="Verlet formülü kullanan fizik simulatörü" thumbnail={thumbVerlet}>
                Verlet fizik formülü ile calışan küçük bir fizik simulatörüdür. C++ kullanılarak yazılmıştır. Github'ımdan derleyip inceleyebilirsiniz.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="ardupilot" title="Ardupilot yazılımını ESP32'de çalıştırmak" thumbnail={thumbArdupilot}>
                Ardupilot bir uçuş kontorl kart yazılımıdır. Normalde 3000TL olan kontrolcülere yuklenebilen bir yazılımdır. Ben ve birsürü kişi Ardupilot'ı ESP32 ye portlamayı başardık. ESP32 200TL'lik bir karttır ve birkaç modül ekleyerek yazdığımız kodu çalıştırabilirsini. Bu port Teknofest'te yarışan Kraken takımı için yapılmıştır. Koda Github'ta bakabilirsiniz.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="cdworldgen" title="Minecraft Crafting Dead, Ek yapı modu " thumbnail={thumbCDworldgen}>
                Minecraft için olan Crafting Dead mod paketi tek oyunculu yada özel serverlerde yapılar olmadığından oyanamıyordu, arkadaşlarımla oynamak istediğimden kendi yapı modumu kodladım. Github'da koda bakıp modun kendisini indirebilirsiniz, Mod Java dilinde kodlanmıştır.
              </GridItem>
            </Section>
        </SimpleGrid>
    </Container>
  </Layout>
)

export default Page