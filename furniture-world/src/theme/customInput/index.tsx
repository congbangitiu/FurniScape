import styled from '@emotion/styled';
import { Input } from 'antd';
import { customColors } from '..';

export const CustomInputFooter = styled(Input)({
    border: 'none',
    borderBottom: '1px solid',
    borderRadius: 0,
    backgroundColor: 'transparent',
});

// Checkout input
export const CustomInputCheckout = styled(Input)({
    border: `1px solid ${customColors.lightGrayColor}`,
    backgroundColor: '#fff',
    width: '520px',
    height: '50px',
    fontSize: '16px',
});
