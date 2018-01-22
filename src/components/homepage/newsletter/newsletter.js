import React, { Component } from 'react';
import './newsletter.scss';
import { Field, reduxForm } from 'redux-form';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux';
import _ from 'lodash'


const FIELDS = {
  title: {
    type: 'input',
    label: 'title for post'
  },
  categories: {
    type: 'input',
    label: 'enter some categories'
  },
  content: {
    type: 'textarea',
    label: 'post conents'

  }
}

class Newsletter extends Component {
  renderField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${touched && error ? 'has-danger':''}`
    console.log(field)
    const inputClassName = `form-control ${field.input.name}`
    return (
        <div className={className}>
          <input
            type="text"
            placeholder={field.label}
            {...field.input}
            className={inputClassName}>
          </input>
          <div className="text-help">
            {touched ? error : ''}
          </div>
        </div>
    )
  }

  render() {
    return (
      <div className="newsletter container-wrapper">
        <h2 className="text-center">SIGN UP FOR THE NEWSLETTER</h2>
        <h4 className="newsletter-description text-center">If you're interested in hearing about release dates, special offers, and contests, you can subscribe to the Books of Babel Newsletter here. I promise not to share your information or spam your inbox!</h4>
        <form className="sign-up-form">
          <span className="name-span"><Field
            name="first-name"
            label="First Name"
            component={this.renderField}
          />
          <Field
            name="last-name"
            label="Last Name"
            component={this.renderField}
          />
          </span>
          <Field
            label="Email"
            name="Email"
            component={this.renderField}/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Newsletter = reduxForm({
  form: 'sign-up' // a unique name for this form
})(Newsletter);
