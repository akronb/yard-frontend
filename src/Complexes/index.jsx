import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Hero from './Hero';
import Intro from './Intro';
import Card from './Card';

export default () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Grid>
        <Card
          id={1}
          location="SOUTH BEACH, SAN FRANCISCO"
          name="The Harrison"
          desc="Beautifully appointed residences perched atop Rincon Hill, The
        Harrison offers unparalleled Bay Bridge and city views within
        steps of San Francisco’s greatest restaurants, shops, and The
        Embarcadero."
        />
        <Card
          id={2}
          location="MIDTOWN EAST, MANHATTAN"
          name="100 East 53rd Street"
          desc="One Hundred East Fifty Third Street by Foster + Partners is a
            limited collection of modern residences in Midtown Manhattan's
            Cultural District. The 94 residences ranging from alcove lofts
            to four bedrooms within the 63-story tower are generously
            proportioned."
        />
        <Card
          id={3}
          location="NOLITA, MANHATTAN"
          name="152 Elizabeth"
          desc="152 Elizabeth is an ultra-luxury condominium building—the
              first in New York City designed by Japanese master architect
              Tadao Ando. Located at the corner of Kenmare and Elizabeth
              Streets in Nolita, the 32,000-square-foot building will stand
              as a profound architectural statement and embrace the
              industrial character of the neighborhood."
        />
      </Grid>
    </div>
  );
};
