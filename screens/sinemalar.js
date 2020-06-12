import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import {sinemalar} from '../utils/api';
import SinemalarList from '../components/sinemalarList';

const keyExtractor = ({ sinemaAdi }) => sinemaAdi;

export default class Sinemalar extends React.Component {
    state = {
        contacts: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const contacts = await sinemalar();

            this.setState({
                contacts,
                loading: false,
                error: false,
            });
        } catch (e) {
            this.setState({
                loading: false,
                error: true,
            });
        }
    }

    renderContact = ({ item }) => {
        const { id, sinemaAdi, adresBilgisi } = item;

        return <SinemalarList id={id} sinemaAdi={sinemaAdi} adresBilgisi={adresBilgisi} />;
    };

    render() {
        const { loading, contacts, error } = this.state;

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size="large" />}
                {error && <Text>Error...</Text>}
                {!loading &&
                    !error && (
                        <FlatList
                            data={contacts}
                            keyExtractor={keyExtractor}
                            renderItem={this.renderContact}
                        />
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
});