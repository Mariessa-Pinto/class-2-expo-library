import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar, Card, CheckBox, ButtonGroup, Icon, Tab } from '@rneui/themed';
import stylesHome from './Home.styles';
import { useState } from 'react';

export default function Home({navigation}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Check out my awesome page using React Native Elements!</Text>
            <StatusBar style="auto" />
            <View style={stylesHome.avatars}>
                <Avatar
                    size={64}
                    icon={{ name: "pencil", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "#9700b9" }}
                />
                <Avatar
                    size={64}
                    icon={{ name: 'rowing' }}
                    containerStyle={{ backgroundColor: '#00a7f7' }}
                    />
                <Avatar
                    size={64}
                    icon={{ name: 'heartbeat', type: 'font-awesome' }}
                    containerStyle={{ backgroundColor: '#eb1561' }}
                />
            </View>
            <Card>
                <Text>Word of the Day</Text>
                <Text h4>be-nev-o=lent</Text>
                <Text>adjective</Text>
                <Text>
                    well meaning and kindly.{"\n"}
                    {'"a benevolent smile"'}
                </Text>
                <Button size="sm" type="clear" title="Learn More">
                </Button>
            </Card>
            <View row align="center" spacing={4}>
                <CheckBox checked title="Label" />
                <CheckBox checked disabled title="Label" />
            </View>
            <Tab value={index} onChange={setIndex} dense>
                <Tab.Item>Tab</Tab.Item>
                <Tab.Item>Tab</Tab.Item>
            </Tab>
            <ButtonGroup
                buttonStyle={{ padding: 10 }}
                selectedButtonStyle={{ backgroundColor: '#e2e2e2' }}
                buttons={[
                <Icon name="format-align-left" />,
                <Icon name="format-align-center" />,
                <Icon name="format-align-right" />,
                ]}
                selectedIndex={selectedIndex}
                onPress={setSelectedIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
