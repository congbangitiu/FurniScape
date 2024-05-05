import { useState } from 'react';
import { Image, Button, Row, theme } from 'antd';
import Banner from '../assets/images/Banner.png';
import Dining from '../assets/images/Dining.png';
import Living from '../assets/images/Living.png';
import Bedroom from '../assets/images/Bedroom.png';
import Syltherine from '../assets/images/Syltherine.png';
import { customColors } from './../theme/index ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Image1 from '../assets/images/Image1.png';
import Image2 from '../assets/images/Image2.png';
import Image3 from '../assets/images/Image3.png';
import Image4 from '../assets/images/Image4.png';
import Image5 from '../assets/images/Image5.png';
import Image6 from '../assets/images/Image6.png';
import Image7 from '../assets/images/Image7.png';
import Image8 from '../assets/images/Image8.png';
import Image9 from '../assets/images/Image9.png';
import Image10 from '../assets/images/Image10.png';
import Image11 from '../assets/images/Image11.png';
import Image12 from '../assets/images/Image12.png';
import Image13 from '../assets/images/Image13.png';
import Image14 from '../assets/images/Image14.png';
import Image15 from '../assets/images/Image15.png';
import Image16 from '../assets/images/Image16.png';

export const HomePage = () => {
    const { token } = theme.useToken();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const products = [
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            discount: 3500000,
            image: Syltherine,
        },
    ];

    const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
    ];

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
                <Image style={{ width: '100vw' }} preview={{ mask: null }} src={Banner} alt="Banner" />
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: token.colorBgContainer,
                        width: '500px',
                        right: '100px',
                        top: '25%',
                        borderRadius: '10px',
                        padding: '30px 50px',
                    }}
                >
                    <h4 style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '3px' }}>New Arrival</h4>
                    <h1 style={{ fontSize: '52px', fontWeight: '700', lineHeight: '65px', color: token.colorPrimary }}>
                        Discover Our New Collection
                    </h1>
                    <p style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis.
                    </p>
                    <Button
                        style={{
                            backgroundColor: token.colorPrimary,
                            color: '#FFF',
                            fontWeight: '700',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '25px 72px',
                            gap: '10px',
                        }}
                    >
                        BUY NOW
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '30px',
                    width: '80%',
                }}
            >
                <h4
                    style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: token.colorTertiaryText,
                        margin: '0',
                    }}
                >
                    Browse The Range
                </h4>
                <p
                    style={{
                        fontSize: '20px',
                        fontWeight: '400',
                        color: token.colorQuaternaryText,
                        margin: '10px 0 0 0',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Row style={{ justifyContent: 'space-around', width: '100%' }}>
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={Dining}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600' }}>Dining</p>
                    </span>
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={Living}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600' }}>Living</p>
                    </span>
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px' }}
                            src={Bedroom}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600' }}>Bedroom</p>
                    </span>
                </Row>

                <h4
                    style={{
                        fontSize: '40px',
                        fontWeight: '700',
                        color: token.colorTertiaryText,
                    }}
                >
                    Our Products
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '20px' }}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div
                                style={{
                                    padding: '25px',
                                    borderRadius: '10px',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                    position: 'relative',
                                }}
                            >
                                <Image
                                    style={{ borderRadius: '10px' }}
                                    src={Syltherine}
                                    alt="Banner"
                                    preview={{
                                        mask: null,
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '50px',
                                        height: '50px',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        backgroundColor: customColors.colorRedBadge,
                                        borderRadius: '100px',
                                        color: '#fff',
                                    }}
                                >
                                    -30%
                                </div>
                                <div
                                    style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '15px' }}
                                >
                                    <h4 style={{ fontSize: '24px', fontWeight: '600', margin: '0' }}>Syltherine</h4>
                                    <p
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: token.colorQuaternaryText,
                                            margin: '0',
                                        }}
                                    >
                                        Stylish cafe chair
                                    </p>
                                    <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ fontSize: '20px', fontWeight: '600', margin: '0' }}>
                                            Rp 2.500.000
                                        </h4>
                                        <p
                                            style={{
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                color: token.colorQuaternaryText,
                                                textDecoration: 'line-through',
                                                margin: '0',
                                            }}
                                        >
                                            Rp 3.500.000
                                        </p>
                                    </Row>
                                </div>
                            </div>
                            {hoveredIndex === index && (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 2,
                                        backgroundColor: customColors.colorOverlay,
                                        borderRadius: '10px',
                                        opacity: '0.9',
                                    }}
                                >
                                    <Button
                                        style={{
                                            backgroundColor: '#fff',
                                            color: token.colorPrimary,
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            textAlign: 'center',
                                            width: '60%',
                                            height: '50px',
                                            marginTop: '10px',
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                    <Row style={{ width: '90%', justifyContent: 'space-around', marginTop: '20px' }}>
                                        <span
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '16px',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                transition: 'color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = token.colorPrimary)}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                        >
                                            <FontAwesomeIcon icon={faShareFromSquare} /> Share
                                        </span>
                                        <span
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '16px',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                transition: 'color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = token.colorPrimary)}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                        >
                                            <FontAwesomeIcon icon={faCodeCompare} /> Compare
                                        </span>
                                        <span
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '16px',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                transition: 'color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = token.colorPrimary)}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                        >
                                            <FontAwesomeIcon icon={faHeart} /> Like
                                        </span>
                                    </Row>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <Button
                    style={{
                        backgroundColor: '#fff',
                        color: token.colorPrimary,
                        fontWeight: '600',
                        fontSize: '16px',
                        textAlign: 'center',
                        width: '250px',
                        height: '50px',
                        marginTop: '50px',
                        border: `2px solid ${token.colorPrimary}`,
                    }}
                >
                    Show more
                </Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                <h4 style={{ fontSize: '20px', fontWeight: '600', margin: '0', color: token.colorQuaternaryText }}>
                    Share your setup with
                </h4>
                <h2 style={{ fontSize: '40px', fontWeight: '700', margin: '10px 0 20px 0' }}>#FurniScapeFurniture</h2>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(8, 2fr)', margin: '20px' }}>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            style={{
                                objectFit: 'contain',
                                cursor: 'pointer',
                            }}
                            preview={{
                                mask: null,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
