import { useState } from 'react';
import { Flex, Row, Typography, Input, Select, theme } from 'antd';
import { Banner } from '../../components/banner';
import { Products } from '../../components/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const { Text } = Typography;

export const ShopPage = () => {
    const { token } = theme.useToken();
    const pages = [1, 2, 3, 4, 5, 6];
    const [activePage, setActivePage] = useState<number>(1);

    const handlePageClick = (newPage: number) => {
        const updatedPage = Math.max(1, Math.min(newPage, pages.length));
        setActivePage(updatedPage);
    };

    return (
        <Flex style={{ flexDirection: 'column', alignItems: 'center', width: '100vw', paddingTop: '50px' }}>
            <Banner title="Shop" />
            <Row
                style={{
                    width: '100%',
                    backgroundColor: '#F9F1E7',
                    padding: '20px 100px',
                    justifyContent: 'space-between',
                    marginBottom: '50px',
                }}
            >
                <Row style={{ alignItems: 'center', gap: '5px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M18.6667 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1416C15.5354 20.4852 15.1667 19.5949 15.1667 18.6667C15.1667 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6667 15.1667C19.5949 15.1667 20.4852 15.5354 21.1415 16.1918C21.7979 16.8482 22.1667 17.7384 22.1667 18.6667C22.1667 19.5949 21.7979 20.4852 21.1415 21.1416C20.4852 21.7979 19.5949 22.1667 18.6667 22.1667ZM9.33334 22.1667C8.40508 22.1667 7.51484 21.7979 6.85846 21.1416C6.20208 20.4852 5.83334 19.5949 5.83334 18.6667C5.83334 17.7384 6.20208 16.8482 6.85846 16.1918C7.51484 15.5354 8.40508 15.1667 9.33334 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1416C11.1518 21.7979 10.2616 22.1667 9.33334 22.1667ZM18.6667 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1667 10.2616 15.1667 9.33334C15.1667 8.40509 15.5354 7.51485 16.1918 6.85847C16.8482 6.20209 17.7384 5.83334 18.6667 5.83334C19.5949 5.83334 20.4852 6.20209 21.1415 6.85847C21.7979 7.51485 22.1667 8.40509 22.1667 9.33334C22.1667 10.2616 21.7979 11.1518 21.1415 11.8082C20.4852 12.4646 19.5949 12.8333 18.6667 12.8333ZM9.33334 12.8333C8.40508 12.8333 7.51484 12.4646 6.85846 11.8082C6.20208 11.1518 5.83334 10.2616 5.83334 9.33334C5.83334 8.40509 6.20208 7.51485 6.85846 6.85847C7.51484 6.20209 8.40508 5.83334 9.33334 5.83334C10.2616 5.83334 11.1518 6.20209 11.8082 6.85847C12.4646 7.51485 12.8333 8.40509 12.8333 9.33334C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33334 12.8333Z"
                            fill="black"
                        />
                    </svg>
                    <Text style={{ fontSize: '18px', fontWeight: '400' }}>Showing 1-16 of 32 results</Text>
                </Row>
                <Row style={{ gap: '40px' }}>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Text style={{ fontSize: '18px', fontWeight: '500' }}>Show</Text>
                        <Input style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: 'none' }} />
                    </Flex>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Text style={{ fontSize: '18px', fontWeight: '500' }}>Shorted by</Text>
                        <Select
                            style={{
                                width: '200px',
                                height: '40px',
                                backgroundColor: '#fff',
                                border: 'none',
                                fontSize: '18px',
                            }}
                        >
                            <Select.Option value="increasingPrice">Increasing price</Select.Option>
                            <Select.Option value="decreasingPrice">Decreasing price</Select.Option>
                            <Select.Option value="category">Category</Select.Option>
                        </Select>
                    </Flex>
                </Row>
            </Row>
            <Products />
            <Flex style={{ gap: '40px', marginTop: '50px' }}>
                <Flex
                    style={{
                        width: '40px',
                        height: '40px',
                        fontSize: '18px',
                        fontWeight: '500',
                        color: '#fff',
                        backgroundColor: token.colorPrimary,
                        borderRadius: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    className={activePage <= 1 ? 'disabled' : 'normal'}
                    onClick={() => handlePageClick(activePage - 1)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Flex>
                <Flex style={{ gap: '20px' }}>
                    {pages.map((page, index) => (
                        <Flex
                            style={{
                                width: '40px',
                                height: '40px',
                                fontSize: '18px',
                                fontWeight: '500',
                                backgroundColor: token.colorPrimary,
                                borderRadius: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            key={index}
                            onClick={() => handlePageClick(page)}
                            className={activePage === page ? 'active' : 'normal'}
                        >
                            {page}
                        </Flex>
                    ))}
                </Flex>
                <Flex
                    style={{
                        width: '40px',
                        height: '40px',
                        fontSize: '18px',
                        fontWeight: '500',
                        color: '#fff',
                        backgroundColor: token.colorPrimary,
                        borderRadius: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    className={activePage >= pages.length ? 'disabled' : 'normal'}
                    onClick={() => handlePageClick(activePage + 1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </Flex>
            </Flex>
        </Flex>
    );
};
