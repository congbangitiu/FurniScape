import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, DatePicker, Select } from 'antd';
import Icon, {
    EyeTwoTone,
    CalendarOutlined,
    EyeInvisibleOutlined,
    UserOutlined,
    FacebookFilled,
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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IAppDispatch, IRootState } from '../../redux/store';
import { userSignUp } from 'src/redux/auth/signUp/signUpAction';

export interface IUserSignUpData {
    username: string;
    dateOfBirth: Date;
    gender: string;
    address: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpPage = () => {
    const [userRegisterData, setUserRegisterData] = useState<IUserSignUpData>();
    const dispatch = useDispatch<IAppDispatch>();
    const { userData } = useSelector((state: IRootState) => state.auth);
    const navigate = useNavigate();

    const onSubmit = (data: IUserSignUpData) => {
        dispatch(userSignUp(data));
    };

    useEffect(() => {
        if (userData) navigate('/');
    }, [userData]);

    return (
        <Row gutter={16} style={{ height: '100vh' }}>
            <Col span="14">
                <div className="backgroundSignUp">
                    {/* <img
                        src={assets.chairImg}
                        style={{
                            backgroundColor: 'transparent',
                            borderRadius: '20px',
                            maxWidth: '600px',
                            maxHeight: '900px',
                        }}
                        alt="chair"
                    /> */}
                    <img src={assets.signInBG2} alt="img" />
                </div>
            </Col>

            <Col
                span="10"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}
            >
                <div style={{ width: '90%', padding: '30px 0 30px 0' }}>
                    <Form
                        name="register"
                        initialValues={{ remember: true }}
                        onFinish={onSubmit}
                        style={{ maxWidth: 350, margin: 'auto' }}
                    >
                        <Link to="/">
                            <img src={assets.loginLogo} alt="loginLogo" width={190} style={{ marginBottom: '20px' }} />
                        </Link>
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

                        <Form.Item
                            name="email"
                            rules={[
                                { type: 'email', message: 'Please input valid email' },
                                { required: true, message: 'Please input a valid email!' },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined className="" style={{ marginRight: '6px' }} />}
                                placeholder="Email"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item name="address" rules={[{ required: true, message: 'Please input your address' }]}>
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
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Please confirm your password' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) return Promise.resolve();
                                        else
                                            return Promise.reject(
                                                new Error('The new password that you entered do not match!'),
                                            );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" style={{ marginRight: '6px' }} />}
                                placeholder="Confirm Password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit" style={{ width: '100%' }}>
                                Sign Up
                            </Button>
                            Or <Link to="/signIn">Sign in now</Link>
                        </Form.Item>
                        <hr className="solid" style={{ width: '60%', color: 'red' }} />
                        <div style={{ textAlign: 'center' }}>
                            <p>Or Sign up with:</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {/* <ButtonWithIcon
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
                                </ButtonWithIcon> */}

                                <FacebookFilled style={{ fontSize: '200%', margin: '0 10px 0 10px' }} />

                                <GoogleOutlined style={{ fontSize: '200%', margin: '0 10px 0 10px' }} />
                            </div>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};