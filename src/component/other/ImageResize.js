import React from 'react';
import { Image, View } from 'react-native';

function ImageResize({ uri, size = 40, radius }) {
    return (
        <View
            style={{
                width: size,
                height: size,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: radius || size,
                overflow: 'hidden',
            }}
        >
            <Image
                resizeMode="cover"
                source={
                    uri
                        ? { uri: uri, width: size - 5, height: size - 5 }
                        : require('../../../assets/icon.png')
                }
            />
        </View>
    );
}

export default ImageResize;
