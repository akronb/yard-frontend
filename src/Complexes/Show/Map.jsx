/* eslint react/style-prop-object: 0 */
// @flow

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import type { LocationType } from '../types';

type Props = {
  location: LocationType,
};

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoianVzdHVzZWJyYWluIiwiYSI6ImNpbHV1dWlmYTAwNmp2Zm02NjZkZmIybGkifQ.feSAgXjbU00mlAjBQyv1lQ',
});

export default (props: Props) => {
  const { location = {} } = props;

  return (
    <Map
      style="mapbox://styles/mapbox/light-v9"
      zoom={[16]}
      center={[location.longitude, location.latitude]}
      {...props}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[location.longitude, location.latitude]} />
      </Layer>
    </Map>
  );
};
