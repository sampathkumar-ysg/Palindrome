import React, {PropTypes} from 'react';
import PalindromeListRow from './PalindromeListRow';

const PalindromeList = ({sentences}) => {
  return (
    <table className="table">
      <tbody>
      {sentences.map((sentence, index) =>
        <PalindromeListRow key={index} sentence={sentence}/>
      )}
      </tbody>
    </table>
  );
};

PalindromeList.propTypes = {
  sentences: PropTypes.array.isRequired
};

export default PalindromeList;
