// Style
import style from './index.module.css'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'

import ImageTrigger from 'components/ImageTrigger'
import Heading from 'components/Heading'

// Components
 

// Hooks
import { Trans, useTranslation } from 'react-i18next'

const imageComponents = {
  ImageTesla: <ImageTrigger name="tesla" sizes={[2, 3]} />,
  ImagePow: <ImageTrigger name="pow" sizes={[2, 3]} />,
  ImageNO1: <ImageTrigger name="no1" />,
  ImageNO2: <ImageTrigger name="no2" />,
  ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />,
  IMZ: <ImageTrigger name="IMZ" />,
  IMSS: <ImageTrigger name="IMSS" />,
  IMS: <ImageTrigger name="IMS" />,
  IMMM: <ImageTrigger name="IMMM" />,
  IMPA: <ImageTrigger name="IMPA" />,
  IMT: <ImageTrigger name="IMT" />,
  IMR: <ImageTrigger name="rocket" />
}

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
              <Trans i18nKey="portfolio.intro.1" components={imageComponents} />
            </>
          </Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <Trans i18nKey="portfolio.intro.2" components={imageComponents} />
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <Trans i18nKey="portfolio.intro.3" components={imageComponents} />
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <Trans i18nKey="portfolio.intro.4" components={imageComponents} />
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <Trans i18nKey="portfolio.intro.5" components={imageComponents} />
        </Row>
      </Container>
      <Container grid outerRightOnMobile className={style.projectSection}>
        <Row start={1} end={2}>
          <Heading key={portfolio[0]}>
            <Trans i18nKey="portfolio.portfolio.0" components={imageComponents} />
          </Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <div>
              <Trans i18nKey="portfolio.portfolio.1" components={imageComponents} />
              <Trans i18nKey="portfolio.portfolio.2" components={imageComponents} />
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={2}>
          <>
            <Trans i18nKey="portfolio.portfolio.3" />
          </>
        </Row>
      </Container>

      <div className={style.cardContainer} id="card-container" />

      <video id="skReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/sk/2.mp4" type="video/mp4" />
      </video>
      <video id="aqReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/aq/1.mp4" type="video/mp4" />
      </video>
      <video id="fbReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/fb/3.mp4" type="video/mp4" />
      </video>
      <video id="feudiReel" autoPlay muted loop playsInline className={style.video}>
        <source src="/projects/feudi/4.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}
export default Portfolio
