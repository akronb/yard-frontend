// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';

import { get } from '../../api';
import Hero from './Hero';
import Intro from './Intro';
import Card from './Card';

type LocationParams = {
  subLocalityName: string,
  street: string,
};

function formatLocation({ subLocalityName, street }: LocationParams): string {
  return [subLocalityName, street].filter(item => !!item).join(', ');
}

class List extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {};
  }

  state: Object;

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
              Beautifully appointed residences perched atop Rincon Hill, The Harrison offers
              unparalleled Bay Bridge and city views within steps of San Francisco’s greatest
              restaurants, shops, and The Embarcadero.
            </Card>),
          )}
        </Grid>
      </main>
    );
  }
}

export default List;
