import React from 'react';
import styles from './inputStacked.css';
import Icon from '../Icons/Icon.js';

export default class InputStacked extends React.Component {
  propTypes: {
    errorMsg: React.PropTypes.string,
    label: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    handleBlur: React.PropTypes.func,
    handleChange: React.PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    required: true,
    validateBy: 'required'
  };

  constructor() {
    super();
  }

  render() {
    let style;
    let message;
    if (this.props.errorMsg) {
      style = styles.messageError;
      message = {__html: '- ' + this.props.errorMsg};
    }

    return (
      <div>
        <label htmlFor={ this.props.name } title={ this.props.label }>
          {this.props.label} <span className={style} dangerouslySetInnerHTML={message} />
          {this.props.errorMsg === '' ? <Icon size="1.2em" icon="check" color='green' /> : null}
        </label>
        <input
          className={styles.input}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.handleChange}
          value={this.props.value}
          placeholder={this.props.label}
          data-validateby={this.props.validateBy}
          required={this.props.required}
          />
      </div>
    );
  }
}
