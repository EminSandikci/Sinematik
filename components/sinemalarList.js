import React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import Color from '../utils/color';
import { Html5Entities } from 'html-entities'; 

export default class SinemalarList extends React.Component{

    render(){
        const { id, sinemaAdi, adresBilgisi } = this.props;
        const entities = new Html5Entities();

        return(
            <View style={styles.container}>
                <View style={styles.ustKisim}>
                    <Text style={styles.ustYazi}>{entities.decode(sinemaAdi)}</Text>
                </View>
                <View style={styles.altKisim}>
                    <Text style={styles.altYazi}>{entities.decode(adresBilgisi)}</Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:10,
        borderBottomColor:'lightgray',
        borderBottomWidth:1
    },
    ustKisim:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.02)'
    },
    ustYazi:{
        fontWeight:'bold',
        fontSize:20,
        color: Color.activeColor
    },
    altKisim:{
        flex:1,
        marginVertical:15
    },
    altYazi:{
        fontWeight:'bold',
        fontSize:12,
        marginLeft:5,
        color: Color.inactiveColor
    }
});
