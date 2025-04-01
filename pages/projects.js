import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPiNas from '../public/images/projects/pinas.png'
import thumbSlimeVR from '../public/images/projects/slimevr.png'
import thumbDireksiyon from '../public/images/projects/direksiyon.png'
import thumb3DPrinter from '../public/images/projects/3dprinter.png'
import thumbFlLight from '../public/images/projects/freqbox.png'
import thumbVerlet from '../public/images/projects/verlet.png'
import thumbArdupilot from '../public/images/projects/ardupilot.png'
import thumbCDworldgen from '../public/images/projects/cdworldgen.png'

const Projects = () => (
  <Layout title="Calışmalarım">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projelerim
      </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <GridItem id="PiNas" title="Raspberry Pi 5 NAS" thumbnail={thumbPiNas}>
              Bu NAS sistemi, Raspberry Pi 5 üzerinde çalışmakta olup, aynı anda 5 adet HDD'ye bağlanabilir. Jellyfin medya sunucusu, Immich fotoğraf yönetim aracı ve SMB paylaşımları ile entegre edilmiştir. Bu yapı, medya içeriğinizi verimli bir şekilde depolayabilir ve ağ üzerinden kolayca erişim sağlayabilir. Sistemin çerçevesi, tasarladığım 3D baskılı bağlantı elemanları ve alüminyum profiller kullanılarak kendim yapılmıştır. Düşük enerji tüketimiyle yüksek performans sunarak ev veya ofis kullanımı için ideal bir çözüm sağlar.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="SlimeVR" title="Sanal Gerçeklikte Ayak Takibi" thumbnail={thumbSlimeVR}>
                Sanal gerçeklik sistemlerinde genellikle yalnızca eller ve kafa takip edilir. Ancak benim tasarladığım özel PCB ile, düşük maliyetle ayak takibini mümkün kılarak sanal gerçeklik deneyiminizi geliştirmenize olanak sağlar.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="Direksiyon" title="900 Derecelik Simulatör Direksiyon" thumbnail={thumbDireksiyon}>
                Piyasadaki profesyonel direksiyon setleri genellikle 5000 TL'den başlamakta. Ben ise yalnızca 786 TL maliyetle, 900 derece dönebilen son derece hassas bir direksiyon tasarladım. Direksiyonun çoğu parçası, 3D yazıcı kullanılarak üretilmiştir.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="3DPrinter" title="Kendi Yaptığım 3D Yazıcı" thumbnail={thumb3DPrinter}>
                Eski bir 3D yazıcıyı kullanarak, 2300 TL değerinde malzeme ile tamamen yeni bir yazıcı inşa ettim. Yazıcının tüm 3D basılmış parçaları, kendi üretimim olan yazıcımdan basılmıştır.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="FlLight" title="FreqBox" thumbnail={thumbFlLight}>
                Bu cihaz, Flipper Zero adıyla bilinen hackleme cihazının yalnızca SubGHz özellikli klonudur. Tüm yazılım kodları tamamen bana aittir ve C dilinde yazılmıştır. Ayrıca, PCB tasarımı da tamamen bana ait ve özelleştirilmiştir.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="Verlet" title="Verlet Fizik Simülatörü" thumbnail={thumbVerlet}>
                Bu, Verlet fizik formülüyle çalışan küçük bir fizik simülatörüdür. C++ kullanılarak geliştirilmiş olup, kaynak kodlarına GitHub üzerinden ulaşabilir ve derleyerek inceleyebilirsiniz..
              </GridItem>
            </Section>
            <Section>
              <GridItem id="ardupilot" title="Ardupilot yazılımını ESP32'de çalıştırmak" thumbnail={thumbArdupilot}>
                Ardupilot, genellikle 3000 TL'lik uçuş kontrol kartlarına yüklenebilen bir uçuş kontrol yazılımıdır. Ben ve bir grup geliştirici, Ardupilot’ı ESP32 kartına portlamayı başardık. ESP32, 200 TL değerinde bir kart olup, birkaç modül ekleyerek yazılımı çalıştırmak mümkündür. Bu port, Teknofest'te yarışan Kraken takımı için yapılmıştır. Koda GitHub üzerinden ulaşabilirsiniz.
              </GridItem>
            </Section>
            <Section>
              <GridItem id="cdworldgen" title="Minecraft Crafting Dead, Ek yapı modu " thumbnail={thumbCDworldgen}>
                Minecraft'ta Crafting Dead mod paketinin, tek oyunculu ya da özel sunucularda yapı eksikliği nedeniyle oynanabilirliği sınırlıydı. Arkadaşlarımla birlikte oynamak istediğim için, kendi yapı modumu geliştirdim. Mod, Java dilinde yazılmıştır ve GitHub'dan hem kaynak koda hem de mod dosyasına erişebilirsiniz.
              </GridItem>
            </Section>
        </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects