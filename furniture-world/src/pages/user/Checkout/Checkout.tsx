import { Flex, Row, Col, Typography, Form, Input, Button, Radio, Select, theme, Space, RadioChangeEvent } from 'antd';
import { customColors } from '../../../theme';
import './Checkout.scss';
import countryList from '../../../assets/data/countries.js';
import { Banner } from '../../../components/userComponents/banner';
import { IAppDispatch, IRootState } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { IUserData } from 'src/redux/api/authSlice';
import { useDispatch } from 'react-redux';
import { placeOrder } from 'src/redux/order/orderSlice';

const { Text } = Typography;

export interface IProductsPlaceOrder {
    id: string;
    quantity: string;
}

export const CheckoutPage = () => {
    const { token } = theme.useToken();
    const cartItems = useSelector((state: IRootState) => state.cart);
    const userInfo: IUserData = useSelector((state: IRootState) => state.auth.userData);
    const [paymentMethod, setPaymentMethod] = useState('');
    const isAuthenticated = Cookies.get('accessToken');
    const dispatch = useDispatch<IAppDispatch>();

    const onchangePaymentMethod = (e: RadioChangeEvent) => {
        setPaymentMethod(e.target.value);
    };
    const options = countryList.map((country, index) => ({
        value: index.toString(),
        label: country.label,
    }));

    const handlePlaceOrder = () => {
        // dispatch(placeOrder(cartItems));
    };

    return (
        <Flex style={{ flexDirection: 'column', alignItems: 'center', width: '100vw', paddingTop: '50px' }}>
            <Banner title="Checkout" />
            <Text style={{ fontSize: '30px', fontWeight: '600', marginTop: '20px' }}>Billing details</Text>
            <Flex style={{ marginTop: '40px', width: '70%' }}>
                {isAuthenticated && (
                    <Flex vertical style={{ width: '50%' }}>
                        <Flex>
                            <Typography style={{ fontSize: '25px', fontWeight: '600' }}>Full Name:</Typography>
                            <Typography style={{ fontWeight: '400', fontSize: '25px', marginLeft: '14px' }}>
                                Bao Pham
                            </Typography>
                        </Flex>
                        <Flex>
                            <Typography style={{ fontSize: '25px', fontWeight: '600' }}>Phone Number: </Typography>
                            <Typography style={{ fontWeight: '400', fontSize: '25px', marginLeft: '14px' }}>
                                {/* {userInfo.phone} */}
                                bao
                            </Typography>
                        </Flex>
                        <Flex>
                            <Typography style={{ fontSize: '25px', fontWeight: '600' }}>Address: </Typography>
                            <Typography style={{ fontWeight: '400', fontSize: '25px', marginLeft: '14px' }}>
                                {/* {userInfo.address} */}
                                gia
                            </Typography>
                        </Flex>
                        <Flex>
                            <Typography style={{ fontSize: '25px', fontWeight: '600' }}>Country: </Typography>
                            <Typography style={{ fontWeight: '400', fontSize: '25px', marginLeft: '14px' }}>
                                {/* {userInfo.country} */}
                                pgan
                            </Typography>
                        </Flex>
                    </Flex>
                )}

                {!isAuthenticated && (
                    <Form layout="vertical" style={{ width: '70%' }}>
                        <Form.Item
                            label={
                                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}>
                                    Your full name
                                </Text>
                            }
                        >
                            <Input
                                placeholder="David"
                                style={{
                                    border: `2px solid ${customColors.lightGrayColor}`,
                                    backgroundColor: '#fff',
                                    width: '525px',
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
                                    width: '525px',
                                    height: '50px',
                                    fontSize: '16px',
                                }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '')
                                        .toLowerCase()
                                        .localeCompare((optionB?.label ?? '').toLowerCase())
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
                                    Full Address
                                </Text>
                            }
                        >
                            <Input
                                placeholder="This field is optional"
                                style={{
                                    border: `2px solid ${customColors.lightGrayColor}`,
                                    backgroundColor: '#fff',
                                    width: '525px',
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
                                    width: '525px',
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
                                    width: '525px',
                                    height: '50px',
                                    fontSize: '16px',
                                }}
                            />
                        </Form.Item>
                    </Form>
                )}

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
                                fontWeight: '600',
                            }}
                        >
                            Product
                        </Text>

                        <Text
                            style={{
                                fontSize: '25px',
                                fontWeight: '600',
                                textAlign: 'right',
                            }}
                        >
                            Price
                        </Text>
                        {/* 
                        <Text
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: customColors.colorQuaternaryText,
                            }}
                        >
                            Assgaard sofa x 1
                        </Text>
                        <Text style={{ fontSize: '16px', fontWeight: '400', textAlign: 'right' }}>Rs. </Text>
                        <Text
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: customColors.colorQuaternaryText,
                            }}
                        >
                            Subtotal
                        </Text>
                        <Text style={{ fontSize: '16px', fontWeight: '400', textAlign: 'right' }}>Rs. 250,000.00</Text> */}

                        {cartItems.items.map((item) => (
                            <>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: customColors.colorQuaternaryText,
                                    }}
                                >
                                    {`${item.name} x ${item.quantity}`}
                                </Text>
                                <Text style={{ fontSize: '16px', fontWeight: '400', textAlign: 'right' }}>
                                    ${Number(item.price) * Number(item.quantity)}
                                </Text>
                            </>
                        ))}
                    </Flex>
                    <Flex
                        style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <Text style={{ fontSize: '18px', fontWeight: '400' }}>Total</Text>
                        <Text
                            style={{
                                fontSize: '25px',
                                fontWeight: '400',
                                color: token.colorPrimary,
                                textAlign: 'right',
                            }}
                        >
                            ${cartItems.totalPrice}
                        </Text>
                    </Flex>
                    <Row
                        style={{
                            border: `1px solid ${customColors.colorQuaternaryText}`,
                            width: '100%',
                            marginTop: '10px',
                        }}
                    ></Row>

                    <Radio.Group onChange={onchangePaymentMethod} value={paymentMethod}>
                        <Space direction="vertical">
                            <Radio value={'banking'}>
                                <Typography.Title style={{ margin: '8px 5px' }} level={4}>
                                    Direct Bank Transfer
                                </Typography.Title>
                            </Radio>
                            <Text
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '300',
                                    color: customColors.colorQuaternaryText,
                                }}
                            >
                                Make your payment directly into our bank account. Please use your Order ID as the
                                payment reference. Your order will not be shipped until the funds have cleared in our
                                account.
                            </Text>

                            <Radio value={'cash'}>
                                <Typography.Title style={{ margin: '8px 5px' }} level={4}>
                                    Cash On Delivery
                                </Typography.Title>
                            </Radio>
                            <Text
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '300',
                                    color: customColors.colorQuaternaryText,
                                }}
                            >
                                Pay for your order in cash upon delivery at your doorstep. No advance payment required.
                            </Text>
                        </Space>
                    </Radio.Group>
                    {/* <Col>
                        <Row
                            style={{
                                width: '100%',
                                marginTop: '25px',
                            }}
                        >
                            <Radio style={{ fontSize: '18px', fontWeight: '400' }}> </Radio>
                        </Row>
                       
                    </Col>
                    <Col>
                        <Row
                            style={{
                                width: '100%',
                                marginTop: '25px',
                            }}
                        >
                            <Radio style={{ fontSize: '18px', fontWeight: '400' }}> Cash On Delivery</Radio>
                        </Row>
                       
                    </Col> */}
                    <Text style={{ fontSize: '16px', fontWeight: '400', marginTop: '25px', textAlign: 'justify' }}>
                        Your personal data will be used to support your experience throughout this website, to manage
                        access to your account, and for other purposes described in our <b>privacy policy</b>.
                    </Text>
                    <Button
                        style={{
                            color: token.colorPrimary,
                            padding: '25px 50px',
                            fontSize: '16px',
                            fontWeight: '400',
                            marginTop: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: `2px solid ${token.colorPrimary}`,
                            backgroundColor: 'transparent',
                        }}
                        onClick={handlePlaceOrder}
                    >
                        Place order
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
