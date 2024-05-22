import { Link } from 'react-router-dom';
import { Flex, Row, Typography, Input, Button, Image, theme } from 'antd';
import { customColors } from '../../theme';
import { assets } from '../../assets';
import './style.css';

type Props = {};
const { Text } = Typography;

export const Footer = (props: Props) => {
    const { token } = theme.useToken();
    return (
        <Flex style={{ flexDirection: 'column' }}>
            <Flex
                style={{
                    width: '100vw',
                    height: '200px',
                    justifyContent: 'space-around',
                    backgroundColor: customColors.colorBgSecondary,
                    marginTop: '50px',
                }}
            >
                <Row style={{ gap: '10px', alignItems: 'center' }}>
                    <img src={assets.highQuality} style={{ width: '60px', height: '60px' }} alt="" />
                    <Flex style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: '25px', fontWeight: '600' }}>High Quality</Text>
                        <Text style={{ fontSize: '20px', fontWeight: '500', color: customColors.lightGrayColor }}>
                            Crafted from top materials
                        </Text>
                    </Flex>
                </Row>
                <Row style={{ gap: '10px', alignItems: 'center' }}>
                    <img src={assets.warrantyProtection} style={{ width: '60px', height: '60px' }} alt="" />
                    <Flex style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: '25px', fontWeight: '600' }}>Warranty Protection</Text>
                        <Text style={{ fontSize: '20px', fontWeight: '500', color: customColors.lightGrayColor }}>
                            Over 2 years
                        </Text>
                    </Flex>
                </Row>
                <Row style={{ gap: '10px', alignItems: 'center' }}>
                    <img src={assets.freeShipping} style={{ width: '60px', height: '60px' }} alt="" />
                    <Flex style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: '25px', fontWeight: '600' }}>Free Shipping</Text>
                        <Text style={{ fontSize: '20px', fontWeight: '500', color: customColors.lightGrayColor }}>
                            Order over $150
                        </Text>
                    </Flex>
                </Row>
                <Row style={{ gap: '10px', alignItems: 'center' }}>
                    <img src={assets.support} style={{ width: '60px', height: '60px' }} alt="" />
                    <Flex style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: '25px', fontWeight: '600' }}>24/7 Support</Text>
                        <Text style={{ fontSize: '20px', fontWeight: '500', color: customColors.lightGrayColor }}>
                            Dedicated support
                        </Text>
                    </Flex>
                </Row>
            </Flex>
            <Flex style={{ justifyContent: 'space-around', padding: '30px 0' }}>
                <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image src={assets.logoImage} alt="" preview={false} style={{ width: '80px' }} />
                    <Text style={{ fontSize: '24px', fontWeight: '700' }}>FurniScape</Text>
                    <Text
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            color: customColors.colorQuaternaryText,
                            marginTop: '20px',
                        }}
                    >
                        Quarter 6, Thu Duc City, Ho Chi Minh City, Vietnam
                    </Text>
                </Flex>
                <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            color: customColors.colorQuaternaryText,
                        }}
                    >
                        Links
                    </Text>
                    <Link
                        to="/"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        Home
                    </Link>
                    <Link
                        to="/shop"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        Shop
                    </Link>
                    <Link
                        to="/about"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        Contact
                    </Link>
                </Flex>
                <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            color: customColors.colorQuaternaryText,
                        }}
                    >
                        Help
                    </Text>
                    <Link
                        to="/"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        Payment Options
                    </Link>
                    <Link
                        to="/"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        Returns
                    </Link>
                    <Link
                        to="/"
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#000',
                        }}
                        className="link"
                    >
                        Privacy Policies
                    </Link>
                </Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            color: customColors.colorQuaternaryText,
                        }}
                    >
                        Newsletter
                    </Text>
                    <Flex style={{ marginTop: '20px', gap: '10px' }}>
                        <Input
                            placeholder="Enter your email address"
                            style={{ backgroundColor: 'transparent', borderColor: token.colorPrimary }}
                        />
                        <Button>Subcribe</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
