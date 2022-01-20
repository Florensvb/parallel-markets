import React from "react";

class UserForm extends React.Component {

  formFields = [
    {
      label: 'First name',
      name: 'firstName',
      type: 'text',
    }, {
      label: 'Last name',
      name: 'lastName',
      type: 'text',
    }, {
      label: 'Date of birth',
      name: 'dateOfBirth',
      type: 'date',
    }, {
      label: 'Phone number',
      name: 'phoneNumber',
      type: 'text',
    }, {
      label: 'Street address',
      name: 'streetAddress',
      type: 'text',
    }, {
      label: 'State',
      name: 'state',
      type: 'select',
      options: ['Puerto Rico', 'Berlin', 'New York City'],
    }, {
      label: 'Zip Code',
      name: 'zipCode',
      type: 'text',
    }, {
      label: 'File',
      name: 'file',
      type: 'file',
    },
  ]

  async onSubmit (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    try {
      e.target.reset();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div style={{padding: '40px'}}>
        <form onSubmit={this.onSubmit}>
          {this.formFields.map(({label, type, name, options}) => (
            <React.Fragment key={name}>
              <label>
                {`${label}: `}
                {type === 'select' ?
                  <select required name={name}>
                    {options.map(option => (<option key={option} value={option}>{option}</option>))}
                  </select>
                  :
                  <input required type={type} name={name} />
                }
              </label>
              <br/>
            </React.Fragment>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default UserForm;