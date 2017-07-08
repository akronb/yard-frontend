// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';

import { get } from '../../api';
import type { ComplexType, LocationType } from '../types';
import Hero from './Hero';
import Intro from './Intro';
import Card from './Card';

function formatLocation({ subLocalityName, street }: LocationType): string {
  return [subLocalityName, street].filter(item => !!item).join(', ');
}

class List extends React.Component {
  state: { complexes: Array<ComplexType> } = { complexes: [] };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items: complexes = [] }) => {
      this.setState({ complexes });
    });
  }

  render() {
    const { complexes = [] } = this.state;

    return (
      <main>
        <Helmet>
          <title>Our Developments | Compass</title>
        </Helmet>
        <Hero />
        <Intro />
        <Grid>
          {complexes.map(complex =>
            (<Card
              id={complex.id}
              key={complex.id}
              location={formatLocation(complex.location)}
              name={complex.name}
              imageId={complex.images[0].id}
            >
              {complex.shortDescription}
            </Card>),
          )}
        </Grid>
      </main>
    );
  }
}

export default List;
