import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/login/login.scss";
// import logo from "../../assets/group@2x.png";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
            Đăng ký
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
              <Form.Group size="lg" controlId="re_password">
                <Form.Label>Nhập lại mật khẩu</Form.Label>
                <Form.Control
                  type="re_password"
                  value={re_password}
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="name">
                <Form.Label>Họ tên</Form.Label>
                <Form.Control
                  autoFocus
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="phone">
                <Form.Label>Điện thoại</Form.Label>
                <Form.Control
                  autoFocus
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Button block size="lg" type="submit" disabled={!validateForm()}>
                Đăng ký
              </Button>
            </Form>
          </div>
        </div>
        <div className="login-animation"></div>
      </div>
    </div>
  );
}
