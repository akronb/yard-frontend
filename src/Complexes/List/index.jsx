/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';

import Hero from './Hero';
import Intro from './Intro';
import Card from './Card';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('https://api.jqestate.ru/v1/complexes').then(responce => responce.json()).then((json) => {
      this.setState({ data: json });
    });
  }

  render() {
    // http://2ality.com/2015/01/es6-destructuring.html
    // прочитать почему это работает
    const { items: complexes = [] } = this.state.data;

    return (
      <main>
        <Helmet>
          <title>Our Developments | Compass</title>
        </Helmet>
        <Hero />
        <Intro />
        <Grid>
          {complexes.map(data => <Card id={data.id} location="SOUTH BEACH, SAN FRANCISCO" />)}
          <Card id={1} location="SOUTH BEACH, SAN FRANCISCO" name="">
            Beautifully appointed residences perched atop Rincon Hill, The
            Harrison offers unparalleled Bay Bridge and city views within
            steps of San Francisco’s greatest restaurants, shops, and The
            Embarcadero.
          </Card>
          <Card id={2} location="MIDTOWN EAST, MANHATTAN" name="100 East 53rd Street">
            One Hundred East Fifty Third Street by Foster + Partners is a
            limited collection of modern residences in Midtown Manhattan's
            Cultural District. The 94 residences ranging from alcove lofts
            to four bedrooms within the 63-story tower are generously
            proportioned."
          </Card>
          <Card id={3} location="NOLITA, MANHATTAN" name="152 Elizabeth">
            152 Elizabeth is an ultra-luxury condominium building—the
            first in New York City designed by Japanese master architect
            Tadao Ando. Located at the corner of Kenmare and Elizabeth
            Streets in Nolita, the 32,000-square-foot building will stand
            as a profound architectural statement and embrace the
            industrial character of the neighborhood.
          </Card>
        </Grid>
      </main>
    );
  }
}

export default List;
