import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import {kampanyalar} from '../utils/api';
import KampanyaList from '../components/kampanyaList';

const keyExtractor = ({ kampanyaAdi }) => kampanyaAdi;

export default class Kampanya extends React.Component {
    state = {
        contacts: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const contacts = await kampanyalar();

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
        const { id, kampanyaAdi, kampanyaUrl } = item;

        return <KampanyaList id={id} kampanyaAdi={kampanyaAdi} kampanyaUrl={kampanyaUrl} />;
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