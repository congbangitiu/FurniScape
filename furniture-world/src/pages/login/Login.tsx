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

interface IUserData {
    userName: string;
    password: string;
}

export const LoginPage = () => {
    const [userData, setUserData] = useState<IUserData>();
    const [toggleRegister, setToggleRegister] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleToggleRegister = () => {
        setToggleRegister(!toggleRegister);
    };

    return (
        <Row gutter={16} style={{ height: '100vh' }}>
            {!toggleRegister ? (
                <Col span="12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '90%' }}>
                        <Form
                            name="login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ maxWidth: 350, margin: 'auto' }}
                        >
                            <img src={assets.loginLogo} alt="loginLogo" width={190} style={{ marginBottom: '20px' }} />

                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />
                                    }
                                    placeholder="Username"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    size="large"
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />
                                    }
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
                                Or <a onClick={handleToggleRegister}>Sign Up now</a>
                            </Form.Item>

                             <div style={{ textAlign: 'center' }}>
                                <p>Or Sign In with:</p>
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
            ) : (
                <Col span="12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '90%' }}>
                        <Form
                            name="register"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ maxWidth: 350, margin: 'auto' }}
                        >
                            <img src={assets.loginLogo} alt="loginLogo" width={190} style={{ marginBottom: '20px' }} />
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />
                                    }
                                    placeholder="Username"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item
                                name="phoneNumber"
                                rules={[{ required: true, message: 'Please input a valid phone number!' }]}
                            >
                                <Input
                                    prefix={<PhoneOutlined className="" style={{ marginRight: '6px' }} />}
                                    size="large"
                                    placeholder="Phone Number"
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input a valid email!' }]}
                            >
                                <Input
                                    prefix={<MailOutlined className="" style={{ marginRight: '6px' }} />}
                                    size="large"
                                    placeholder="Email"
                                />
                            </Form.Item>

                            <Form.Item name="Address" rules={[{ required: true, message: 'this field is required' }]}>
                                <Input
                                    prefix={<HomeOutlined className="" style={{ marginRight: '6px' }} />}
                                    size="large"
                                    placeholder="Address"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    size="large"
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />
                                    }
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

                            <Form.Item
                                name="confirmPassword"
                                rules={[{ required: true, message: 'Please input match with password above!' }]}
                            >
                                <Input.Password
                                    size="large"
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />
                                    }
                                    placeholder="Confirm Password"
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
                                <Button type="primary" size="large" htmlType="submit" style={{ width: '100%' }}>
                                    Sign Up
                                </Button>
                                Or <a onClick={handleToggleRegister}>Sign In now</a>
                            </Form.Item>

                            <div style={{ textAlign: 'center' }}>
                                <p>Or Sign up with:</p>
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
            )}

            <Col span="12">
                <div className="imgDecor">
                    <img src={assets.chairLogo} style={{backgroundColor: 'transparent', borderRadius: '20px', maxWidth: '600px', maxHeight: '900px'}}  alt="chair" />
                </div>
            </Col>
        </Row>
    );
};
