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
          {complexes.map(data =>
            (<Card
              id={data.id}
              key={data.id}
              location={formatLocation(data.location)}
              name={data.name}
              imageId={data.images[0].id}
            >
              {data.shortDescription}
            </Card>),
          )}
        </Grid>
      </main>
    );
  }
}

export default List;
