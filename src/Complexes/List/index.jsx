/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';

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
    fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(responce => responce.json())
      .then((json) => {
        this.setState({ items: json.items });
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
            />),
          )}
        </Grid>
      </main>
    );
  }
}

export default List;
