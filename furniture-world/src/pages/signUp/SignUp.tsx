import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, DatePicker, Select } from 'antd';
import {
    EyeTwoTone,
    CalendarOutlined,
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
import './signUp.scss';
import { ButtonWithIcon } from '../../theme/customButton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export interface IUserRegisterData {
    username: string;
    dateOfBirth: Date;
    gender: string;
    address: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpPage = () => {
    const [userData, setUserData] = useState<IUserRegisterData>();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (data: IUserRegisterData) => {
        if (data.password !== data.confirmPassword) {
            alert('Password mismatch');
        }
        console.log('Received values:', data);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Row gutter={16} style={{ height: '100vh' }}>
            <Col span="12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '90%', padding: '30px 0 30px 0' }}>
                    <Form
                        name="register"
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

                        {/* <Form.Item
                            name="dateOfBirth"
                            rules={[{ required: true, message: 'Please select your date of birth!' }]}
                        >
                            <DatePicker  placeholder='Date of birth'/>
                        </Form.Item>

                        <Form.Item name="gender" rules={[{ required: true, message: 'Please select your gender!' }]}>
                            <Select style={{width:'50%'}} placeholder="Select your gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Select>
                        </Form.Item> */}

                        <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input a valid phone number!' }]}
                        >
                            <Input
                                type="number"
                                prefix={<PhoneOutlined className="" style={{ marginRight: '6px' }} />}
                                placeholder="Phone Number"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item name="email" rules={[{ required: true, message: 'Please input a valid email!' }]}>
                            <Input
                                prefix={<MailOutlined className="" style={{ marginRight: '6px' }} />}
                                placeholder="Email"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item name="Address" rules={[{ required: true, message: 'this field is required' }]}>
                            <Input
                                prefix={<HomeOutlined className="" style={{ marginRight: '6px' }} />}
                                placeholder="Address"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />}
                                placeholder="Password"
                                size="large"
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
                                prefix={<LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />}
                                placeholder="Confirm Password"
                                size="large"
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
                            Or <Link to="/login">Sign in now</Link>
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

            <Col span="12" style={{ display: 'flex' }}>
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
