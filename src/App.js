import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <div className="text">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook"/>
            <p>Connect with friends and the world around you on Facebook.</p>
        </div>
      
        <div className="form">
          <form method="post">
            <input name="login" type="text" className="email" placeholder="Email or phone number"/>
            <input name="pasworrd" type="password" className="password" placeholder="Password"/> <br/>
            <input type="submit" className="login" value="Log In"/> <br></br>
            <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgot password?</a>
            <hr/>
            <input type="button" class="create-account" value="Create new account"/>
            <p><a href="https://www.facebook.com/reg">Create a Page</a> for celebrity, brand or business.</p>
        </form>
  </div>
   
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="footer_wrapper">

        <div id="footer1">
        English (UK) <a href="">Türkçe</a><a href="">Azərbaycan dili</a><a href=""> Русский</a><a href="">العربية</a><a href="">Deutsch</a><a href="">Français (France)</a><a href="">فارسی</a><a href="">ქართული</a><a href="">Español</a><a href="">Português (Brasil)</a>
        </div>
        <div id="footer2">
        <a href="">Sign Up</a><a href="">Log In</a><a href="">Messenger</a><a href="">Facebook Lite</a><a href="">Watch</a><a href="">Places</a><a href="">Games</a><a href="">Marketplace</a><a href="">Meta Pay</a><a href="">Oculus</a><a href="">Portal</a><a href="">Instagram</a><a href="">Bulletin</a><a href="">Local</a><a href="">Fundraisers</a><a href="">Services</a><a href="">Voting Information Center</a><a href="">Groups</a><a href="">About</a><a href="">Create Ad</a><a href="">Create Page</a><a href="">Developers</a><a href="">Careers</a><a href="">Privacy</a><a href="">Cookies</a><a href="">Ad choices</a><a href="">Terms</a><a href="">Help</a><a href="">Contact Uploading & Non-UsersSettings</a>
        <br/>
        <br/>
        <p>Meta ©️ 2022</p>
        <br/>
        <br/>
        </div>
    </div>
    </div>
  );
}

export default App;
