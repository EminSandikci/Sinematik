import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import {vizyondakiler} from '../utils/api';
import VizyondaList from '../components/vizyondaList';

const keyExtractor = ({ filmAdi }) => filmAdi;

export default class Vizyonda extends React.Component {
    state = {
        contacts: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const contacts = await vizyondakiler();

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
        const { id, filmAdi, resimUrl, puan } = item;

        return <VizyondaList id={id} filmAdi={filmAdi} resimUrl={resimUrl} puan={puan} />;
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