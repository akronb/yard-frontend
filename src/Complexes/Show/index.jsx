import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <div>
      <div className="complex">
        <div className="container">
          <div className="complex-intro">
            <div className="complex-intro__info-wrapper">
              <h1 className="complex-intro__name">
                Жилой комплекс «Полянка/44»
              </h1>
              <p className="complex-intro__location">
                Район Якиманка, улица Большая Полянка, дом 44 • 119180
              </p>
            </div>
            <button className="complex-intro__fav-button">В избранное</button>
          </div>
        </div>
      </div>
      <div className="complex-carousel">
        <div className="complex-carousel__wrapper">
          <img
            className="complex-carousel__image"
            src="img/slider-1.png"
            alt=""
          />
          <img
            className="complex-carousel__image"
            src="img/slider-2.png"
            alt=""
          />
          <img
            className="complex-carousel__image"
            src="img/slider-3.png"
            alt=""
          />
          <img
            className="complex-carousel__image"
            src="img/slider-4.png"
            alt=""
          />
          <img
            className="complex-carousel__image"
            src="img/slider-5.png"
            alt=""
          />
        </div>
        <div className="container">
          <button className="complex-carousel__button">41 фотография</button>
        </div>
      </div>
      <div className="complex">
        <div className="container">
          <div className="complex-summary">
            <h2 className="complex-heading">
              950
              <small className="complex-summary__subheading">предложений</small>
            </h2>
            <h2 className="complex-heading">
              John McAslan + Partners
              <small className="complex-summary__subheading">архитектор</small>
            </h2>
            <h2 className="complex-heading">
              Группа «ПСН»
              <small className="complex-summary__subheading">застройщик</small>
            </h2>
          </div>
          <hr className="complex__separation-line" />
          <div className="complex-features">
            <h2 className="complex-heading">Характеристики</h2>
            <div className="row">
              <div className="col-lg-4">
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">Статус:</dd>
                  <dt className="complex-features__value">Квартиры</dt>
                </dl>
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">Цены:</dd>
                  <dt className="complex-features__value">
                    от 5.3 до 143.5 млн
                  </dt>
                </dl>
              </div>
              <div className="col-lg-4">
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
              </div>
              <div className="col-lg-4">
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
                <dl className="complex-features__feature">
                  <dd className="complex-features__label">
                    Количество квартир:
                  </dd>
                  <dt className="complex-features__value">1 503</dt>
                </dl>
              </div>
            </div>
          </div>
          <section className="complex-desc">
            <div className="row">
              <div className="col-lg-2">
                <h2 className="complex-heading">Описание</h2>
              </div>
              <div className="col-lg-10">
                <article className="complex-desc__text">
                  ВТБ Арена Парк — современный квартал в 10 минутах езды от
                  Кремля. Территория разделена на три зоны: жилой район,
                  центральный стадион «Динамо» и большой спортивный парк.

                  Жилой район — это 13 корпусов: апартаменты, штаб-квартира
                  «Динамо», отель «Hyatt Regency Moscow» и четыре современных
                  бизнес-центра. На территории — рестораны, спа-комплекс,
                  фитнес-центр, химчистка, аптеки, магазины и отделения банков.
                  В каждом корпусе работает консьерж и круглосуточная охрана.
                  Для жителей оборудованы технические помещения под хранение
                  колясок и велосипедов, комнаты для домашних животных и уютные
                  вестибюли с мягкими креслами для встреч с друзьями и соседями.

                  Сердце ВТБ Арена Парк — стадион. Под одной крышей
                  расположились музей, торгово-развлекательный комплекс,
                  подземная парковка для гостей и две крупные спортивные арены.
                  Жизнь квартала сосредоточена в этой зоне: здесь можно сходить
                  на концерт или фестиваль, поболеть за любимую команду и купить
                  новую рубашку в торговом комплексе.

                  Тихий жилой район от шумного стадиона отделяет Парк
                  Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей
                  оборудованы игровые зоны, для подростков — спортивные площадки
                  на открытом воздухе, для взрослых — велосипедные дорожки и
                  зоны отдыха, где можно подышать свежим воздухом во время
                  рабочего перерыва.
                </article>
              </div>
            </div>
          </section>
          <hr className="complex__separation-line" />
          <div className="complex-infrastructure">
            <h2 className="complex-heading">Инфраструктура</h2>
            <div className="row">
              <div className="col-lg-2">
                <p className="complex-infrastructure__text">Бассейн</p>
                <p className="complex-infrastructure__text">Частная школа</p>
              </div>
              <div className="col-lg-2">
                <p className="complex-infrastructure__text">Детский сад</p>
                <p className="complex-infrastructure__text">Частная школа</p>
              </div>
              <div className="col-lg-2">
                <p className="complex-infrastructure__text">Частная школа</p>
                <p className="complex-infrastructure__text">Частная школа</p>
              </div>
              <div className="col-lg-2">
                <p className="complex-infrastructure__text">Бассейн</p>
              </div>
              <div className="col-lg-2">
                <p className="complex-infrastructure__text">Детский сад</p>
              </div>
              <div className="col-lg-2">
                <p className="complex-infrastructure__text">Частная школа</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="complex-offers">
        <div className="container">
          <h2 className="complex-heading">Предложения в ЖК «Полянка/44»</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="complex-offers__card">
                <h3 className="complex-offers__heading">
                  1-комнатные квартиры
                </h3>
                <div className="complex-offers__feature">
                  <p className="complex-offers__label">Площадь</p>
                  <p className="complex-offers__value">от 59 до 120 м²</p>
                </div>
                <div className="complex-offers__feature">
                  <p className="complex-offers__label">Стоимость</p>
                  <p className="complex-offers__value">
                    от 20.3 до 84.2 млн руб
                  </p>
                </div>
                <div className="complex-offers__button-wrapper">
                  <button className="complex-offers__button">
                    Посмотреть предложения
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="complex-offers__card">
                <h3 className="complex-offers__heading">
                  2-комнатные квартиры
                </h3>
                <div className="complex-offers__feature">
                  <p className="complex-offers__label">Площадь</p>
                  <p className="complex-offers__value">от 59 до 120 м²</p>
                </div>
                <div className="complex-offers__feature">
                  <p className="complex-offers__label">Стоимость</p>
                  <p className="complex-offers__value">
                    от 20.3 до 84.2 млн руб
                  </p>
                </div>
                <div className="complex-offers__button-wrapper">
                  <button className="complex-offers__button">
                    Посмотреть предложения
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="complex-offers__card">
                <h3 className="complex-offers__heading">
                  3-комнатные квартиры
                </h3>
                <div className="complex-offers__feature">
                  <p className="complex-offers__label">Площадь</p>
                  <p className="complex-offers__value">от 59 до 120 м²</p>
                </div>
                <div className="complex-offers__feature">
                  <p className="complex-offers__label">Стоимость</p>
                  <p className="complex-offers__value">
                    от 20.3 до 84.2 млн руб
                  </p>
                </div>
                <div className="complex-offers__button-wrapper">
                  <button className="complex-offers__button">
                    Посмотреть предложения
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="complex-guide">
        <div className="container">
          <div className="row middle-lg">
            <div className="col-lg-6">
              <div className="complex-guide__district">Якиманка</div>
              <div className="complex-guide__title">
                Исторический центр Москвы в двух километрах&nbsp;от Кремля
              </div>
              <a className="complex-guide__link" href="">Гид по Якиманке</a>
            </div>
            <div className="col-lg-6">
              <img
                className="complex-guide__photo"
                src="img/polyanka-photo.jpg"
                srcset="img/polyanka-photo@2x.jpg 2x"
                alt="Якиманка"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="complex-location">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="complex-location__map"
                src="img/map.png"
                alt="Жилой комплекс «Полянка/44»"
              />
            </div>
            <div className="col-lg-6">
              <div className="complex-location__nearby-places">
                <div className="nearby-place">
                  <p className="nearby-place__name">Красный Октябрь</p>
                  <p className="nearby-place__distance">24 минуты, 6 км</p>
                </div>
                <div className="nearby-place">
                  <p className="nearby-place__name">World class</p>
                  <p className="nearby-place__distance">2 минуты, 300 м</p>
                </div>
                <div className="nearby-place">
                  <p className="nearby-place__name">Третьяковская галерея</p>
                  <p className="nearby-place__distance">14 минут, 4 км</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
