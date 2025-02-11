// Style
import style from './index.module.css'

// Components

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Square from 'components/Square'
import Heading from 'components/Heading'
import { List, ListItem } from 'components/List'

// Hooks
import { Trans, useTranslation } from 'react-i18next'
// Hooks

function Portfolio() {
  const { t } = useTranslation('translation', { keyPrefix: 'portfolio' })
  const intro: string[] = t('intro', { returnObjects: true })
  const portfolio: string[] = t('portfolio', { returnObjects: true })

  return (
    <Section name="portfolio" className={style.root}>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading misaligned key={intro[0]}>
            <>
              <pre className={style.pre}>{intro[0]}</pre>
              <Trans
                i18nKey="portfolio.intro.1"
                components={{
                  ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                  ImageTesla: <ImageTrigger name="tesla" sizes={[2, 3]} />,
                  ImageNO1: <ImageTrigger name="no1" />,
                  ImageNO2: <ImageTrigger name="no2" />,
                  ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />
                }}
              />
            </>
          </Heading>
        </Row>
      </Container>
      <Container grid key={intro[2]}>
        <Row start={3} end={1}>
          <ContentBlock>
            <Trans
              i18nKey="portfolio.intro.2"
              components={{
                ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                ImagePow: <ImageTrigger name="pow" sizes={[2, 3]} />
              }}
            />

            <div>{intro[3]}</div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile className={style.projectSection}>
        <Row start={2} end={2}>
          <Heading key={portfolio[0]}>{portfolio[0]}</Heading>
        </Row>
      </Container>
      <Container grid key={portfolio[1]}>
        <Row start={2} end={1}>
          <ContentBlock>
            <div>
              <Trans
                i18nKey="portfolio.portfolio.1"
                components={{
                  ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                  ImageTesla: <ImageTrigger name="tesla" sizes={[2, 3]} />,
                  ImageNO1: <ImageTrigger name="no1" />,
                  ImageNO2: <ImageTrigger name="no2" />,
                  ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />
                }}
              />
              <Trans
                i18nKey="portfolio.portfolio.2"
                components={{
                  ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                  ImageTesla: <ImageTrigger name="tesla" sizes={[2, 3]} />,
                  ImageNO1: <ImageTrigger name="no1" />,
                  ImageNO2: <ImageTrigger name="no2" />,
                  ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />
                }}
              />
            </div>
          </ContentBlock>
        </Row>
      </Container>

      <div className={style.cardContainer} id="card-container" />

      <video id="aqReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/sk/sk-reel.mp4" type="video/mp4" />
      </video>
      <video id="aqReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/sk/sk-reel.mp4" type="video/mp4" />
      </video>
      <video id="skReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/aq/1.mp4" type="video/mp4" />
      </video>
      <video id="fbReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/fb/2.mp4" type="video/mp4" />
      </video>
      <video id="feudiReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/feudi/3.mp4" type="video/mp4"/>
      </video>
      <video id="claralunaReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/claraluna/4.mp4" type="video/mp4" />
      </video>
      <video id="claralunaReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/claraluna/claraluna-reel.mp4" type="video/mp4" />
      </video>
      <video id="claralunaReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/claraluna/claraluna-reel.mp4" type="video/mp4" />
      </video>
      <video id="claralunaReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/claraluna/claraluna-reel.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}
export default Portfolio
