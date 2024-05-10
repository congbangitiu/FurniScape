import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import {
    EyeTwoTone,
    EyeInvisibleOutlined,
    UserOutlined,
    LockOutlined,
    FacebookOutlined,
    GoogleOutlined,
    PhoneOutlined,
    HomeOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { assets } from '../../assets';
import './login.scss';
import { ButtonWithIcon } from '../../theme/customButton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export interface IUserLoginData {
    username: string;
    password: string;
}

export const LoginPage = () => {
    const [userData, setUserData] = useState<IUserLoginData>();
    const [toggleRegister, setToggleRegister] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (data: IUserLoginData) => {
        console.log('Received values:', data);
        // dispatch(userLogin(data));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <Row gutter={16} style={{ height: '100vh' }}>
            <Col span="12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '90%' }}>
                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onSubmit}
                        style={{ maxWidth: 350, margin: 'auto' }}
                    >
                        <img src={assets.loginLogo} alt="loginLogo" width={190} style={{ marginBottom: '20px' }} />

                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />}
                                placeholder="Username"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />}
                                placeholder="Password"
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone onClick={togglePasswordVisibility} />
                                    ) : (
                                        <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
                                    )
                                }
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="/">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit" style={{ width: '100%' }}>
                                Sign In
                            </Button>
                            Or <Link to="/register">Sign up now</Link>
                        </Form.Item>

                        <div style={{ textAlign: 'center' }}>
                            <p>Or Sign in with:</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonWithIcon
                                    type="primary"
                                    icon={<img src={assets.facebookLogo} />}
                                    className="signUpWithButton"
                                >
                                    Facebook
                                </ButtonWithIcon>
                                <ButtonWithIcon
                                    type="primary"
                                    icon={<img src={assets.googleLogo} />}
                                    style={{ width: '40%' }}
                                >
                                    Google
                                </ButtonWithIcon>
                            </div>
                        </div>
                    </Form>
                </div>
            </Col>

            <Col span="12">
                <div className="gradientBackground">
                    <img
                        src={assets.chairImg}
                        style={{
                            backgroundColor: 'transparent',
                            borderRadius: '20px',
                            maxWidth: '600px',
                            maxHeight: '900px',
                        }}
                        alt="chair"
                    />
                </div>
            </Col>
        </Row>
    );
};
