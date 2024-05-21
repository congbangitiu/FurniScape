import { Flex, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { assets } from '../../assets';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const { Text } = Typography;

type BannerProps = {
    title: string;
};

export const Banner = ({ title }: BannerProps) => {
    return (
        <Flex style={{ position: 'relative' }}>
            <img style={{ width: '100vw' }} src={assets.background} alt="" />
            <Flex
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={assets.logoImage} alt="Logo" style={{ width: '80px', height: '80px' }} />
                <Text style={{ fontSize: '50px', fontWeight: '500', margin: '10px 0' }}>{title}</Text>
                <Flex
                    style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                    }}
                >
                    <b>Home</b> <FontAwesomeIcon icon={faGreaterThan} /> {title}{' '}
                </Flex>
            </Flex>
        </Flex>
    );
};
