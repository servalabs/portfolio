import style from './index.module.css'

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

const imageComponents = {
  ImageTesla: <ImageTrigger name="tesla" sizes={[2, 3]} />,
  ImagePow: <ImageTrigger name="pow" sizes={[2, 3]} />,
  ImageNO1: <ImageTrigger name="no1" />,
  ImageNO2: <ImageTrigger name="no2" />,
  ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />,
  IMZ: <ImageTrigger name="IMZ" />,
  IMSS: <ImageTrigger name="IMSS" sizes={[2, 2.5]} />,
  IMS: <ImageTrigger name="IMS" sizes={[2, 2.5]} />,
  IMMM: <ImageTrigger name="IMMM" />,
  IMPA: <ImageTrigger name="IMPA" />,
  IMT: <ImageTrigger name="IMT" sizes={[2, 2.5]} />,
  IMR: <ImageTrigger name="rocket" sizes={[2, 2.5]} />
}

function About() {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })
  const intro = t('intro', { returnObjects: true })
  const clanTitle = t('clan_title')
  const clan = t('clan', { returnObjects: true })
  const methodTitle = t('method_title')
  const method = t('method', { returnObjects: true })

  return (
    <Section name="about" className={style.root}>
      <Container grid>
        <Row start={3} end={1}>
          <ContentBlock>
            <Trans i18nKey="about.intro.0" components={imageComponents} />
          </ContentBlock>
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading>
            <Trans i18nKey="about.intro.1" components={{ Square: <Square />, pre: <pre /> }} />
          </Heading>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={2}>
          <ContentBlock>
            <Trans i18nKey="about.intro.2" components={imageComponents} />
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={1}>
          <br />
          <Trans i18nKey="about.intro.3" components={imageComponents} />
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Trans i18nKey="about.intro.4" components={imageComponents} />
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Trans i18nKey="about.intro.5" components={imageComponents} />
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Trans i18nKey="about.intro.6" components={imageComponents} />
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Trans i18nKey="about.intro.7" components={imageComponents} />
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={2} end={3}>
          <Heading alignRight>
            {clanTitle[0]}
            <br />
            {clanTitle[1]}
          </Heading>
        </Row>
      </Container>

      <Container grid>
        <Row start={2} end={3}>
          <div className={style.columns}>
            <ContentBlock>
              <Trans i18nKey={`about.clan.0`} components={imageComponents} />
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={3}>
          <div className={style.columns}>
            <ContentBlock>
              <Trans i18nKey={`about.clan.1`} components={imageComponents} />
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={3}>
          <div className={style.columns}>
            <ContentBlock>
              <Trans i18nKey={`about.clan.2`} components={imageComponents} />
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={3}>
          <div className={style.columns}>
            <ContentBlock>
              <Trans i18nKey={`about.clan.3`} components={imageComponents} />
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={3}>
          <div className={style.columns}>
            <ContentBlock>
              <Trans i18nKey={`about.clan.4`} components={imageComponents} />
            </ContentBlock>
          </div>
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <Heading>
            <Trans i18nKey="about.method_title" components={{ pre: <pre /> }} />
          </Heading>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <Trans i18nKey={`about.method.0`} components={imageComponents} />
          </ContentBlock>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <Trans i18nKey={`about.method.1`} components={imageComponents} />
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={method[3]}>
              <Trans i18nKey="about.method.3" />
            </Heading>
            <Heading alignRight key={method[3]}>
              <Trans i18nKey="about.method.3" />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={1}>
          <div className={style.section}>
            <ContentBlock key={method[4]}>
              <div>
                <Trans i18nKey={`about.method.4`} />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={3}>
          <List>
            <ListItem end="x6">Awwwards</ListItem>
            <ListItem end="x6">CSS Design Awards</ListItem>
            <ListItem end="x1">FWA</ListItem>
            <ListItem end="x3">iF Design Award</ListItem>
            <ListItem end="x8">Other</ListItem>
          </List>
        </Row>
      </Container>
    </Section>
  )
}

export default About
