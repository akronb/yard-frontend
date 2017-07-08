/* eslint react/style-prop-object: 0 */
// @flow

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import type { LocationType } from '../types';

type Props = {
  location: LocationType,
};

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

export default (props: Props) => {
  const { location = {} } = props;

  return (
    <MapBox
      style="mapbox://styles/mapbox/light-v9"
      zoom={[16]}
      center={[location.longitude, location.latitude]}
      {...props}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[location.longitude, location.latitude]} />
      </Layer>
    </MapBox>
  );
};
