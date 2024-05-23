import { ThemeConfig } from 'antd';
import { ButtonConfig } from 'antd/es/config-provider/context';

export const customColors = {
    colorRedBadge: '#E97171',
    colorGreenBadgeColor: '#2EC1AC',
    colorOverlay: '#3A3A3A',
    lightGrayColor: 'rgb(220 220 220)',
    colorSecondaryText: '#E97171',
    colorTertiaryText: '#3A3A3A',

    colorQuaternaryText: '#898989',
    colorBgSecondary: '#F9F1E7',
    colorYellow: '#FFC700',
};

export const theme: ThemeConfig = {
    token: {
        // fontFamily: 'BlinkMacSystemFont',
        colorPrimary: '#B88E2F',
        colorBgContainer: '#FFF3E3',
        colorPrimaryText: '#000000',
        colorPrimaryTextHover: '#9F9F9F',
    },
    components: {
        Menu: {
            groupTitleFontSize: 18,
        },
        // Button: {
        //     borderRadius: 0,
        // },
    },
};
