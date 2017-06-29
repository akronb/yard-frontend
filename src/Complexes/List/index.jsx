/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';

import { get } from '../../api';
import Hero from './Hero';
import Intro from './Intro';
import Card from './Card';

function formatLocation(location) {
  return [location.subLocalityName, location.street].filter(item => !!item).join(', ');
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items = [] }) => {
      this.setState({ items });
    });
  }

  render() {
    const { items: complexes = [] } = this.state;

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
