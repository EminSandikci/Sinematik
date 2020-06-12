import React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import Color from '../utils/color';
import { Html5Entities } from 'html-entities'; 

export default class KampanyaList extends React.Component{
    state = {
        loading:true,
    }

    onHandler = () => {
        this.setState({
            loading:false,
        });
    };

    render(){
        const { id, kampanyaAdi, kampanyaUrl } = this.props;
        const { loading } = this.state;
        const entities = new Html5Entities();

        return(
            <View style={styles.container}>
                <View style={styles.ustKisim}>
                    {loading && (
                        <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'}/>
                    )}
                    <Image style={StyleSheet.absoluteFill} source={{uri: kampanyaUrl}} onLoad={this.onHandler}/>
                </View>
                <View style={styles.yazilar}>
                    <Text style={styles.isimYazisi}>{entities.decode(kampanyaAdi)}</Text>
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
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)'
    },
    yazilar:{
        flex:1,
        marginVertical:10
    },
    isimYazisi:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:5,
        color: Color.activeColor
    }
});
