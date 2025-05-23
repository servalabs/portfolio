import style from './index.module.css'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Square from 'components/Square'
import Heading from 'components/Heading'
import Contactx from 'partials/Contact2/index'
import { List, ListItem } from 'components/List'
import ThreeJsSlider from './ThreeJsSlider' // Import the new slider component

import { AnimatedTestimonials } from "components/Ui";
import { Trans, useTranslation } from 'react-i18next'

// Animated Testimonials Demo Component
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Make sure 'testimonials' is always an array
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  return <AnimatedTestimonials testimonials={safeTestimonials} />;
}

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
  IMR: <ImageTrigger name="rocket" />,
  IMSR: <ImageTrigger name="IMSR" />
 
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
        <Row start={2} end={2}>
          <div className={style.section}>
            <Heading alignRight key={clanTitle[0]}>
              <>{clanTitle[0]}<br /> {clanTitle[1]}</>
            </Heading>
          </div>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={3}>
          <div className={style.columns}>
            <ContentBlock>
              <Trans i18nKey={`about.clan.0`} components={imageComponents} />
            </ContentBlock>
          </div>
        </Row>
      </Container>

      {/* More content here, repeat as necessary */}

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

      <Container grid>
        <Row start={1} end={3}>
          <Heading>
            <Trans i18nKey="about.method2_title" components={{ pre: <pre /> }} />
          </Heading>
        </Row>
        <AnimatedTestimonialsDemo />
      </Container>

     
    </Section>
  );
}

export default About;
