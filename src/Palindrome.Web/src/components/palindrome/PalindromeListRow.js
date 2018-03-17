import React, {PropTypes} from 'react';

const PalindromeListRow = ({sentence}) => {
  return (
    <tr>
      <td>{sentence}</td>
    </tr>
  );
};

PalindromeListRow.propTypes = {
  sentence: PropTypes.string.isRequired
};

export default PalindromeListRow;
