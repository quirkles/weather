import React, {PropTypes} from 'react';

export default Object.assign(
  ({
  city_name = null,
  country_code = null
  }) =>
    city_name ?
      <h2>{`Showing forecast for ${city_name}: ${country_code || 'N/A'}`}</h2> :
      null,
  {
    propTypes: {
      city_name: PropTypes.string,
      country_code: PropTypes.string
    }
  });
