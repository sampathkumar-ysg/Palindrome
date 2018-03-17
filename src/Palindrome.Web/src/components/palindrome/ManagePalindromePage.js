import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as palindromeActions from '../../actions/palindromeActions';
import PalindromeForm from './PalindromeForm';
import PalindromeList from './PalindromeList';
import toastr from 'toastr';

export class ManagePalindromePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sentence: props.sentence,
      errors: {},
      saving: false
    };

    this.updateSentenceState = this.updateSentenceState.bind(this);
    this.saveSentence = this.saveSentence.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({sentence: nextProps.sentence});
  }

  updateSentenceState(event) {
    const value = event.target.value;
    return this.setState({sentence: value});
  }

  palindromeFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.sentence.length < 2) {
      errors.title = 'Sentence must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveSentence(event) {
    event.preventDefault();

    if (!this.palindromeFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveSentence(this.state.sentence)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Sentence saved');
    this.props.actions.loadSentences();
  }

  render() {
    const {sentences} = this.props;

    return (
      <div>
        <PalindromeForm
          onChange={this.updateSentenceState}
          onSave={this.saveSentence}
          sentence={this.state.sentence}
          errors={this.state.errors}
          saving={this.state.saving}
        />
        <h1>Palindromes List</h1>
        <PalindromeList sentences={sentences}/>
      </div>
    );
  }
}

ManagePalindromePage.propTypes = {
  sentence: PropTypes.string,
  sentences: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
   return {
    sentence: state.sentence,
    sentences: state.sentences
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(palindromeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePalindromePage);
