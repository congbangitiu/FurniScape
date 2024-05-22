import { ThemeConfig } from 'antd';

export const customColors = {
    colorRedBadge: '#E97171',
    colorGreenBadgeColor: '#2EC1AC',
    colorOverlay: '#3A3A3A',
    lightGrayColor: '#9F9F9F',
    colorSecondaryText: '#E97171',
    colorTertiaryText: '#3A3A3A',
    colorQuaternaryText: '#898989',
    colorBgSecondary: '#F9F1E7',
    colorYellow: '#FFC700',
};

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#B88E2F',
        colorBgContainer: '#FFF3E3',
        colorPrimaryText: '#000000',
        colorPrimaryTextHover: '#9F9F9F',
    },
    components: {
        Menu: {
            groupTitleFontSize: 18,
        },
    },
};
