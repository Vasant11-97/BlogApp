import React, { Component } from 'react';
import BaseUrl from '../utils/constant';
import validate from '../utils/validate';
import withRouter from '../utils/withrouter';
import Header from './Header';
import UserContext from './UserContext';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  };

  static contextType = UserContext;

  login = () => {
    let { email, password } = this.state;
    fetch(BaseUrl + 'users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.context.persistUser(data.user);
        this.props.navigate('/');
      });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };

    validate(errors, name, value);

    this.setState({
      [name]: value,
      errors,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <div>
        <section className="flex justify-center items-center h-screen bg-gray-100">
          <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
            <div className="mb-4">
              <p className="text-gray-600">Sign In</p>
              <h2 className="text-xl font-bold">Join our community</h2>
            </div>
            <div>
              <input
                name="email"
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={email}
              />
              <span>{errors.email}</span>
            </div>
            <div>
              <input
                name="password"
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
              />
              <span>{errors.password}</span>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-4 bg-green-500 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                onClick={this.login}
              >
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="comments"
                  className="ml-2 text-sm font-normal text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a className="text-sm text-blue-600 hover:underline" href="#">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
