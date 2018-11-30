import React , {Component} from 'react';
import './css/style.css';

export default class Admin extends Component {
  render() {
    return (
      <div>
      <section class="main fromUP">
        <form class="form-3">
            <p class="clearfix">
                <label for="login">Username</label>
                <input type="text" name="login" id="login" placeholder="Username"/>
            </p>
            <p class="clearfix">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password"/>
            </p>
            <p class="clearfix">
                <input type="checkbox" name="remember" id="remember"/>
                <label for="remember">Remember me</label>
            </p>
            <p class="clearfix">
                <input type="submit" name="submit" value="Sign in"/>
            </p>
        </form>​
      </section>
      </div>
    );
  }
}
