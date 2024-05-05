import { ThemeConfig } from 'antd';

export const customColors = {
    colorRedBadge: '#E97171',
    colorGreenBadgeColor: '#2EC1AC',
    colorOverlay: '#3A3A3A',
};

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#B88E2F',
        colorBgContainer: '#FFF3E3',
        colorPrimaryText: '#000000',
        colorPrimaryTextHover: '#9F9F9F',
        colorSecondaryText: '#E97171',
        colorTertiaryText: '#3A3A3A',
        colorQuaternaryText: '#898989',
    },
    components: {
        Menu: {
            groupTitleFontSize: 18,
        },
    },
};
