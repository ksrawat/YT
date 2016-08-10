"use strict"


import React, { Component } from 'react';
import {
	AlertIOS,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';
import HomePage from './HomePage';


var settingIcon = require('./../assets/images/setting.png');
var settingImageIcon = <Image source={settingIcon} style={{width: 40, height: 40}}/>;

class LoginView extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: "react",
			password: "native"
		}
	}

	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.title}>
					Link Your PGE Account
				</Text>

				 <View>
                    <TextInput
                        placeholder="Username"
                        onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.username} />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
                        <Text style={styles.buttonText}>Authorize</Text>
                    </TouchableHighlight>
                </View>
			</View>
		);
	}
	onSubmitPressed() {
		const uname = this.state.username;
		const pwd = this.state.password;
		if(uname.trim().length > 0 && pwd.trim().length > 0){
	        this.props.navigator.push({
	            title: "Y E L L O W T I N",
                component: HomePage,
                rightButtonTitle: 'Setting',
                passProps: {username: uname, password: pwd},

                onRightButtonPress: () => {
                    AlertIOS.alert('Setting clicked');
                }
	        });
    	}else
    	{
			AlertIOS.alert(
				'Login Validation',
				'usernmae/password can not be empty'
			);
    	}
    }
};

var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        alignSelf: "center",
        fontSize: 18,
        marginBottom: 10

    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});

module.exports = LoginView;