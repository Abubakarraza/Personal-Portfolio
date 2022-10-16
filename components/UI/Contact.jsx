import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/contact.module.css';
import Form from './Form';

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Faisalabad - Pakistan</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>abubakaraza64@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+92 321-7805899</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <a
                href="https://www.youtube.com/channel/UCI6U0kbLJihc4lDIU7b71qQ"
                target={'blank'}
                style={{ textDecoration: 'none' }}
              >
                <i className="ri-youtube-line"></i>
              </a>
              <a
                href="https://github.com/abubakarraza64"
                target={'blank'}
                style={{ textDecoration: 'none' }}
              >
                <i className="ri-github-line"></i>
              </a>
              <a
                href="https://www.facebook.com/mabubakar.raza.3"
                target={'blank'}
                style={{ textDecoration: 'none' }}
              >
                <i className="ri-facebook-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/m-abubakar-raza-0b15b024b/"
                target={'blank'}
                style={{ textDecoration: 'none' }}
              >
                <i className="ri-linkedin-line"></i>
              </a>

              <a
                href="https://www.instagram.com/abubakarraza22/"
                target={'blank'}
                style={{ textDecoration: 'none' }}
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
