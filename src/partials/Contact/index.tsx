import style from './index.module.css'

// Utils
import cn from 'classnames'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Heading'

// Hooks
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'

// Icons
import { ExternalArrow } from 'components/Icons'

// Custom Social Icons
const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.57 8.57 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.26 3.88A12.09 12.09 0 0 1 3 4.95a4.26 4.26 0 0 0 1.32 5.69 4.2 4.2 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 4 2.97A8.58 8.58 0 0 1 2 18.14 12.07 12.07 0 0 0 8.29 20c7.55 0 11.69-6.26 11.69-11.69 0-.18 0-.35-.01-.52A8.34 8.34 0 0 0 22.46 6z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM3 8.75h3.95v11H3v-11zm5.25 0H12v1.6c.56-.86 1.54-1.6 2.92-1.6 3.14 0 3.72 2.07 3.72 4.76v6.24h-3.95v-5.52c0-1.3-.03-2.96-1.81-2.96s-2.1 1.41-2.1 2.86v5.62H8.25v-11z" />
  </svg>
);

function Contact() {
  const dispatch = useDispatch()
  const { t } = useTranslation('translation', { keyPrefix: 'contact' })
  const intro = t('intro')
  const socialIntro = t('social_intro')

  const { ref, inView } = useInView()

  const overHandler = useCallback(() => {
    dispatch.pointer.setType('hover')
  }, [dispatch.pointer])

  const outHandler = useCallback(() => {
    dispatch.pointer.setType('default')
  }, [dispatch.pointer])

  const emailClasses = cn({
    [style.isEmailVisible]: inView
  })

  return (
    <Section name="contact" className={style.root}>
      <Container grid>
        <Row start={1} end={1}>
          <ContentBlock key={intro}>
            <div>{intro}</div>
          </ContentBlock>
        </Row>
        <Row start={1} end={3}>
          <div
            className={style.section}
            ref={ref}
            onMouseEnter={overHandler}
            onMouseLeave={outHandler}
          >
            <Heading className={emailClasses}>
              <div>
                <div className={style.emailContainer}>
                  <a className={style.email} href="mailto:partner@saumyas.com">
                    partner@saumyas.com
                  </a>
                </div>
              </div>
            </Heading>
          </div>
        </Row>
        <Row start={1} end={1}>
          <ContentBlock key={socialIntro}>
            <div>{socialIntro}</div>
          </ContentBlock>
        </Row>
        <Row start={2} end={1}>
          <ContentBlock>
            <div>
              <ul className={style.list}>
                <li>
                  <a
                    href="https://x.com/saumyashhah/"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/saumyashhah/"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  )
}
export default Contact
