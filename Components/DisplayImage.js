import React, { Component, Props } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Item, Icon, Button, Input, CameraRoll } from 'native-base';
import { Permissions, MediaLibrary } from 'expo';


class DisplayImage extends Component {

    render() {
        return (
            <View style={{ justifyContent: 'space-around', backgroundColor: "transparent" }}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: this.props.image }} />

                <Icon
                    onPress={
                        () => this.props.setImage(null)
                    }
                    name="md-close-circle"
                    style={{ color: "white", fontSize: 35, backgroundColor: "transparent", fontWeight: "bold", position: 'absolute', paddingHorizontal: 10, paddingTop: 20 }} />
            </View>
        )
    }


}
export default DisplayImage


