import React from 'react';
import PropTypes from 'prop-types';

const Props = ({ props }) => (
  <table className="props">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(props).map(key => (
        <tr key={key}>
          <td>{key}</td>
          <td>{props[key].description}</td>
          <td>{props[key].type.name}</td>
          <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
          <td>{props[key].required && 'X'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Props.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object.isRequired,
};

export default Props;
