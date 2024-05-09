import { Flex, Row, Col, Typography, Form, Input, Button } from 'antd';
import { customColors } from '../theme';

const { Text } = Typography;
const { TextArea } = Input;

export const CartPage = () => {
    return (
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                position: 'relative',
                paddingTop: '50px',
            }}
        >
            Cart Page
        </Flex>
    );
};
