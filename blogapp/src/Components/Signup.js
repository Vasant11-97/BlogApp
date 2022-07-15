import React, { Component } from 'react';
import validate from '../utils/validate';
import Header from './Header';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    username: '',
    errors: {
      username: '',
      email: '',
      password: '',
    },
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
    const { email, password, errors, username } = this.state;
    return (
      <div>
        <Header />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={email}
              />
              <span>{errors.email}</span>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
              />
              <span>{errors.password}</span>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={username}
              />
              <span>{errors.username}</span>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-gray-900 pl-1 text-gray-700"
                  href="#"
                >
                  Terms of Service
                </a>{' '}
                and
                <a
                  className="no-underline border-b border-gray-900 pl-1 text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <a
                className="underline border-b border-blue text-blue text-blue-700"
                href="../login/"
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
