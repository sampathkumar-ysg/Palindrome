import React from 'react';
import TextInput from '../common/TextInput';

const PalindromeForm = ({sentence, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Palindromes Form</h1>
      <TextInput
        name="sentence"
        label="Sentence"
        value={sentence}
        onChange={onChange}
        error={errors.title}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
        <br/><br/>
        <hr/>
    </form>
  );
};

PalindromeForm.propTypes = {
  sentence: React.PropTypes.string,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PalindromeForm;
