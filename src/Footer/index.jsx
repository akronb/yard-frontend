import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <footer className="footer">
      <Grid>
        <Row>
          <Col lg={2}>
            <h4 className="footer__title">ООО «Ярд»</h4>
            <p className="footer__info">ОГРН 1175074002531</p>
            <p className="footer__info">ИНН 5036165365</p>
            <p className="footer__info footer__info_phone">
              +7 (999) 821-14-88
            </p>
          </Col>
          <Col lgOffset={2} lg={2}>
            <hr className="footer__border" />
            <h4 className="footer__title">Жилые комплексы</h4>
            <nav className="footer__menu">
              <a href="" className="footer__link">ВТБ Арена Парк</a>
              <a href="" className="footer__link">Садовые кварталы</a>
              <a href="" className="footer__link">Резиденция Монэ</a>
              <a href="" className="footer__link footer__link_all">
                Все ЖК Москвы
              </a>
            </nav>
          </Col>
          <Col lg={2}>
            <hr className="footer__border" />
            <h4 className="footer__title">Компания</h4>
            <nav className="footer__menu">
              <a href="" className="footer__link">Команда</a>
              <a href="" className="footer__link">О компании</a>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={4} lg={8}>
            <p className="footer__legal">
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};
