import { useState, Dispatch, SetStateAction } from 'react';
import { Button, Flex, Form, Typography, Input, Image, Row, theme } from 'antd';
import { customColors } from '../../theme';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import Avatar from '../../assets/images/avatar.jpg';

const { Text } = Typography;

interface ChangeInformationProps {
    setIsChangeInfo: Dispatch<SetStateAction<boolean>>;
}

export const ChangeInformation = ({ setIsChangeInfo }: ChangeInformationProps) => {
    const { token } = theme.useToken();
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: '20px 50px 30px 50px',
                borderRadius: '20px',
            }}
        >
            <Text style={{ fontSize: '30px', fontWeight: '500' }}>Change Information</Text>
            <Form layout="vertical" style={{ marginTop: '40px' }}>
                <Flex style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '0 30px' }}>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: customColors.colorQuaternaryText,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Fullname
                            </Text>
                        }
                    >
                        <Input
                            placeholder="Enter your fullname here"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: customColors.colorQuaternaryText,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Old Password
                            </Text>
                        }
                    >
                        <Input.Password
                            placeholder="Enter your old password"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: customColors.colorQuaternaryText,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Email address
                            </Text>
                        }
                    >
                        <Input
                            placeholder="Enter your email here"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: customColors.colorQuaternaryText,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                New Password
                            </Text>
                        }
                    >
                        <Input.Password
                            placeholder="Enter your old password"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: customColors.colorQuaternaryText,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Choose an avatar (optional)
                            </Text>
                        }
                    >
                        <Row style={{ alignItems: 'center', gap: '20px' }}>
                            <Image
                                src={Avatar}
                                alt="Avatar"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50px',
                                    border: `2px solid ${token.colorPrimary}`,
                                    objectFit: 'cover',
                                    aspectRatio: '1 / 1',
                                }}
                                preview={{ mask: null }}
                            />
                            <Input
                                type="file"
                                name="photo"
                                id="customFile"
                                accept=".jpg, .png, .jpeg, .webp"
                                style={{ display: 'none' }}
                            />
                            <label
                                htmlFor="customFile"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    backgroundColor: token.colorPrimary,
                                    color: '#fff',
                                    padding: '10px 20px',
                                    borderRadius: ' 5px',
                                    cursor: 'pointer',
                                }}
                            >
                                Upload photo
                            </label>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label={
                            <Text
                                style={{
                                    color: customColors.colorQuaternaryText,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                }}
                            >
                                Confirm New Password
                            </Text>
                        }
                    >
                        <Input.Password
                            placeholder="Enter your old password"
                            style={{
                                border: `2px solid ${customColors.lightGrayColor}`,
                                backgroundColor: '#fff',
                                width: '520px',
                                height: '50px',
                                fontSize: '16px',
                            }}
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                </Flex>

                <Flex style={{ justifyContent: 'center', gap: '100px', marginTop: '20px' }}>
                    <Button
                        type="primary"
                        style={{
                            width: '100px',
                            height: '50px',
                            border: `2px solid ${token.colorPrimary}`,
                            backgroundColor: '#fff',
                            color: token.colorPrimary,
                            boxShadow: `0 0 10px 0px ${token.colorPrimary}`,
                            fontSize: '16px',
                            fontWeight: '500',
                        }}
                        onClick={() => setIsChangeInfo(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        style={{
                            width: '100px',
                            height: '50px',
                            fontSize: '16px',
                            fontWeight: '500',
                        }}
                    >
                        Change
                    </Button>
                </Flex>
            </Form>
        </Flex>
    );
};
