import { Row, Flex, Select, Input, Typography, Menu, MenuProps, Button } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navBarHeight } from 'src/theme';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

type Props = {};
// type MenuItem = Required<MenuProps>['items'][number];
// const items: MenuItem[] = [
//     {
//         key: '1',
//         icon: <MailOutlined />,
//         label: 'Navigation One',
//         children: [
//             { key: '11', label: 'Option 1' },
//             { key: '12', label: 'Option 2' },
//             { key: '13', label: 'Option 3' },
//             { key: '14', label: 'Option 4' },
//         ],
//     },
//     {
//         key: '2',
//         icon: <AppstoreOutlined />,
//         label: 'Navigation Two',
//         children: [
//             { key: '21', label: 'Option 1' },
//             { key: '22', label: 'Option 2' },
//             {
//                 key: '23',
//                 label: 'Submenu',
//                 children: [
//                     { key: '231', label: 'Option 1' },
//                     { key: '232', label: 'Option 2' },
//                     { key: '233', label: 'Option 3' },
//                 ],
//             },
//             {
//                 key: '24',
//                 label: 'Submenu 2',
//                 children: [
//                     { key: '241', label: 'Option 1' },
//                     { key: '242', label: 'Option 2' },
//                     { key: '243', label: 'Option 3' },
//                 ],
//             },
//         ],
//     },
//     {
//         key: '3',
//         icon: <SettingOutlined />,
//         label: 'Navigation Three',
//         children: [
//             { key: '31', label: 'Option 1' },
//             { key: '32', label: 'Option 2' },
//             { key: '33', label: 'Option 3' },
//             { key: '34', label: 'Option 4' },
//         ],
//     },
// ];

// interface LevelKeysProps {
//     key?: string;
//     children?: LevelKeysProps[];
// }

// const getLevelKeys = (items1: LevelKeysProps[]) => {
//     const key: Record<string, number> = {};
//     const func = (items2: LevelKeysProps[], level = 1) => {
//         items2.forEach((item) => {
//             if (item.key) {
//                 key[item.key] = level;
//             }
//             if (item.children) {
//                 func(item.children, level + 1);
//             }
//         });
//     };
//     func(items1);
//     return key;
// };

// const levelKeys = getLevelKeys(items as LevelKeysProps[]);

export const AdminProfilePage = (props: Props) => {
    // const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

    // const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    //     const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    //     // open
    //     if (currentOpenKey !== undefined) {
    //         const repeatIndex = openKeys
    //             .filter((key) => key !== currentOpenKey)
    //             .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

    //         setStateOpenKeys(
    //             openKeys
    //                 // remove repeat key
    //                 .filter((_, index) => index !== repeatIndex)
    //                 // remove current level all child
    //                 .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
    //         );
    //     } else {
    //         // close
    //         setStateOpenKeys(openKeys);
    //     }
    // };
    return (
        <Flex style={{ flexDirection: 'column', paddingTop: `${navBarHeight}` }}>
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
                    </svg>{' '}
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Button>Users</Button>
                    </Flex>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Button>Products</Button>
                    </Flex>
                </Row>
                <Row style={{ gap: '40px' }}>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: '500' }}>Category</Typography>
                    </Flex>

                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: '500' }}>Sorted by</Typography>
                    </Flex>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Typography style={{ fontSize: '18px', fontWeight: '500' }}>Search</Typography>
                        <Input.Search size="large" placeholder="Enter product" allowClear style={{ width: '80%' }} />
                    </Flex>
                </Row>
            </Row>
            {/* <Menu
                mode="inline"
                defaultSelectedKeys={['231']}
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
                items={items}
            /> */}
        </Flex>
    );
};
