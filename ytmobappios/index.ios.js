"use strict";
 
import React, { Component } from 'react';
 
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';
 

import LoginView from './component/LoginView';
 
class mainApp extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                barTintColor='#ffffcc'
                //Defining routes
                initialRoute={{
                  title: "Y E L L O W T I N",
                  backButtonTitle: 'Back',
                  component: LoginView,
                }} 
            />
        );
    }
};
 
var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('ytmobappios', () => mainApp);
