import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Heading from 'components/Heading'

// Styles
import style from './index.module.css'

// Types
interface VideoProps {
  id: string
  src: string
}

const VideoPlayer: React.FC<VideoProps> = ({ id, src }) => (
  <video id={id} autoPlay muted loop playsInline className={style.video}>
    <source src={src} type="video/mp4" />
  </video>
)

const Portfolio: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'portfolio' })
  const intro: string[] = t('intro', { returnObjects: true })
  const portfolio: string[] = t('portfolio', { returnObjects: true })
  const pd: string[] = t('pd', { returnObjects: true })

  const imageTriggerComponents = {
    ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
    ImageTesla: <ImageTrigger name="tesla" sizes={[2, 3]} />,
    ImageNO1: <ImageTrigger name="no1" />,
    ImageNO2: <ImageTrigger name="no2" />,
    ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />,
    ImagePow: <ImageTrigger name="pow" sizes={[2, 3]} />
  }

  return (
    <Section name="portfolio" className={style.root}>
      {/* Intro Section */}
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading misaligned>
            <>
              <pre className={style.pre}>{intro[0]}</pre>
              <Trans i18nKey="portfolio.intro.1" components={imageTriggerComponents} />
            </>
          </Heading>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <Trans i18nKey="portfolio.intro.2" components={imageTriggerComponents} />
            <br />
            <br />
          </ContentBlock>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <Trans i18nKey="portfolio.intro.3" components={imageTriggerComponents} />
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <Trans i18nKey="portfolio.intro.4" components={imageTriggerComponents} />
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <Trans i18nKey="portfolio.intro.5" components={imageTriggerComponents} />
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <Trans i18nKey="portfolio.intro.6" components={imageTriggerComponents} />
          </ContentBlock>
        </Row>
      </Container>

      {/* Portfolio Section */}
      <Container grid outerRightOnMobile className={style.projectSection}>
        <Row start={2} end={2}>
          <Heading>{portfolio[0]}</Heading>
        </Row>
      </Container>

      <Container grid>
        <Row start={2} end={3}>
          <ContentBlock>
            <div>
              <Trans i18nKey="portfolio.portfolio.1" components={imageTriggerComponents} />
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <ContentBlock>
            <div>
              <Trans i18nKey="portfolio.portfolio.2" components={imageTriggerComponents} />
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <ContentBlock>
            <div>
              <Trans i18nKey="portfolio.portfolio.3" components={imageTriggerComponents} />
            </div>
          </ContentBlock>
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
      <br />
      <br />
    </Section>
  )
}

export default Portfolio
