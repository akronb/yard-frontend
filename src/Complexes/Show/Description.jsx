// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils/styles';
import SeparationLine from './SeparationLine';
import Heading from './Heading';

const Wrapper = styled.section`padding: 0px;`;

const Text = styled.article`
  margin: 1rem 0px 0px;
  color: #3e4247;
  line-height: 25px;
  white-space: pre-line;
  text-overflow: clip;
  overflow: hidden;
  max-height: 350px;

  ${media.tablet`
    margin: 0px;
    text-overflow: none;
    max-height: none;
  `};
`;

const More = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #ffffff);
  height: 8rem;
  width: 100%;
  margin-top: -8rem;
  margin-bottom: .125rem;
  z-index: 100;

  ${media.tablet`
    display: none;
  `};
`;

const Button = styled.button`
  position: relative;
  display: block;
  cursor: pointer;
  background-color: #00779a;
  border: none;
  border-radius: 2px;
  color: #00779a;
  padding: .5rem 1.25rem;
  margin: 0 auto;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: .625rem;
  line-height: .625rem;
  color: #fff;
`;

class Description extends React.Component {
  state: { isOpened: boolean } = { isOpened: false };

  openFullDescription = () => {
    this.setState({ isOpened: true });
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col md={2} xs={12}>
              <Heading>Описание</Heading>
            </Col>
            <Col md={10} xs={12}>
              <Text style={this.state.isOpened ? { maxHeight: 'none' } : {}}>
                {this.props.fullDescription}
              </Text>
              {!this.state.isOpened &&
                <More>
                  <Button onClick={this.openFullDescription}>Прочитать описание</Button>
                </More>}
            </Col>
          </Row>
          <SeparationLine />
        </Grid>
      </Wrapper>
    );
  }
}

export default Description;
