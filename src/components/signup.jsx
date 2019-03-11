import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>

        <h1>Signup Form</h1>

        <div style={{ maxWidth: 500 }}>

          <table>
              <tr>
                <td>
                First Name:
                </td>
                <td>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </td>
              </tr>

            <tr>
                <td>
                Last Name:
                </td>
                <td>
                <input type="text" />
                </td>
            </tr>

            <tr>
                <td>
                Email:
                </td>
                <td>
                <input type="text" />
                </td>
            </tr>

            <tr>
                <td>
                Address:
                </td>
                <td>
                <input type="text" />
                </td>
            </tr>

            <tr>
                <td>
                Phone Number:
                </td>
                <td>
                <input type="text" />
                </td>
            </tr>


            <tr>
                <td>
                Password:
                </td>
                <td>
                <input type="password" />
                </td>
            </tr>

            <tr>
                <td>
                Confirm Password:
                </td>
                <td>
                <input type="password" />
                </td>
            </tr>


            <tr>
                <td>
                <input type="checkbox" name="Terms of Agreement" value="TermsAgreed" />
                Terms of Agreement
                </td>
           
                <td>
                <input type="checkbox" name="Email Me" value="Email" />
                Email Me
                </td>
            </tr>

          </table>
            
  

        </div>

            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    
 
export default Signup;