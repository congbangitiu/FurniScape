import background from '../assets/images/background.png';
import logo from '../assets/logo/logoImage.png';
import { Flex, Row, Col, Typography, Form, Input, Button, Radio, Select, theme } from 'antd';
import { customColors } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import './Checkout.css';
import countryList from '../assets/data/countries.js';

const { Text } = Typography;

export const CheckoutPage = () => {
    const { token } = theme.useToken();

    const options = countryList.map((country, index) => ({
        value: index.toString(),
        label: country.label,
    }));

    return (
        <Flex style={{ flexDirection: 'column', alignItems: 'center', width: '100vw', paddingTop: '50px' }}>
            <Flex style={{ position: 'relative' }}>
                <img style={{ width: '100vw' }} src={background} alt="" />
                <Flex
                    style={{
                        position: 'absolute',
                        top: '25%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={logo} alt="Logo" style={{ width: '80px', height: '80px' }} />
                    <Text style={{ fontSize: '50px', fontWeight: '500', margin: '10px 0' }}>Checkout</Text>
                    <Flex
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        <b>Home</b> <FontAwesomeIcon icon={faGreaterThan} /> Checkout{' '}
                    </Flex>
                </Flex>
            </Flex>
            <Text style={{ fontSize: '30px', fontWeight: '500', marginTop: '20px' }}>Billing details</Text>
            <Flex style={{ marginTop: '40px', width: '70%' }}>
                <Form layout="vertical" style={{ width: '70%' }}>
                    <Form.Item
                        label={
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}>Your full name</Text>
                        }
                    >
                        <Input
                            placeholder="David"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}>
                                Company name (optional)
                            </Text>
                        }
                    >
                        <Input
                            placeholder="David"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Country / Region
                            </Text>
                        }
                    >
                        <Select
                            showSearch
                            className="ant-select-selector"
                            style={{
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={options}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Street address
                            </Text>
                        }
                    >
                        <Input
                            placeholder="This field is optional"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Town / City
                            </Text>
                        }
                    >
                        <Input
                            placeholder="This field is optional"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                ZIP code
                            </Text>
                        }
                    >
                        <Input
                            placeholder="This field is optional"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Phone number
                            </Text>
                        }
                    >
                        <Input
                            placeholder="This field is optional"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Email address
                            </Text>
                        }
                    >
                        <Input
                            placeholder="This field is optional"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                </Form>
                <Flex
                    style={{
                        width: '50%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                    }}
                >
                    <Flex
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto auto',
                            justifyContent: 'space-between',
                            gap: '10px',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: '25px',
                                fontWeight: '500',
                            }}
                        >
                            Product
                        </Text>
                        <Text
                            style={{
                                fontSize: '25px',
                                fontWeight: '500',
                            }}
                        >
                            Subtotal
                        </Text>
                        <Text
                            style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: customColors.colorQuaternaryText,
                            }}
                        >
                            Assgaard sofa x 1
                        </Text>
                        <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>Rs. 250,000.00</Text>
                        <Text
                            style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: customColors.colorQuaternaryText,
                            }}
                        >
                            Subtotal
                        </Text>
                        <Text style={{ fontSize: '16px', fontWeight: '500', textAlign: 'right' }}>Rs. 250,000.00</Text>
                    </Flex>
                    <Flex
                        style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <Text style={{ fontSize: '18px', fontWeight: '500' }}>Total</Text>
                        <Text
                            style={{
                                fontSize: '25px',
                                fontWeight: '500',
                                color: token.colorPrimary,
                                textAlign: 'right',
                            }}
                        >
                            Rs. 250,000.00
                        </Text>
                    </Flex>
                    <Row
                        style={{
                            border: `1px solid ${customColors.colorQuaternaryText}`,
                            width: '100%',
                            marginTop: '10px',
                        }}
                    ></Row>
                    <Col>
                        <Row
                            style={{
                                width: '100%',
                                marginTop: '20px',
                            }}
                        >
                            <Radio style={{ fontSize: '18px', fontWeight: '500' }}> Direct Bank Transfer</Radio>
                        </Row>
                        <Text style={{ fontSize: '16px', fontWeight: '300', color: customColors.colorQuaternaryText }}>
                            Make your payment directly into our bank account. Please use your Order ID as the payment
                            reference. Your order will not be shipped until the funds have cleared in our account.
                        </Text>
                    </Col>
                    <Col>
                        <Row
                            style={{
                                width: '100%',
                                marginTop: '20px',
                            }}
                        >
                            <Radio style={{ fontSize: '18px', fontWeight: '500' }}> Cash On Delivery</Radio>
                        </Row>
                        <Text style={{ fontSize: '16px', fontWeight: '300', color: customColors.colorQuaternaryText }}>
                            Pay for your order in cash upon delivery at your doorstep. No advance payment required.
                        </Text>
                    </Col>
                    <Text style={{ fontSize: '16px', fontWeight: '500', marginTop: '20px', textAlign: 'justify' }}>
                        Your personal data will be used to support your experience throughout this website, to manage
                        access to your account, and for other purposes described in our <b>privacy policy</b>.
                    </Text>
                    <Button
                        style={{
                            color: token.colorPrimary,
                            padding: '20px 50px',
                            fontSize: '16px',
                            fontWeight: '500',
                            marginTop: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: `2px solid ${token.colorPrimary}`,
                            backgroundColor: 'transparent',
                        }}
                    >
                        Place order
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
