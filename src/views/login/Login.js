import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/login/login.scss";
// import logo from "../../assets/group@2x.png";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login">
      <div className="login-background">
        <div className="login-form">
          <div className="login-form__logo">
            {/* <img src={logo} alt="" /> */}
            Đăng nhập
          </div>
          <div className="login-form__groups">
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button block size="lg" type="submit" disabled={!validateForm()}>
                Đăng nhập
              </Button>
            </Form>

            <div className="groups-btn">
              <a href="https://www.facebook.com/" className="btn btn-facebook">
                Login with Facebook
              </a>
              <a href="https://www.facebook.com/" className="btn btn-google">
                Login with Google
              </a>
            </div>
          </div>
        </div>
        <div className="login-animation"></div>
      </div>
    </div>
  );
}
