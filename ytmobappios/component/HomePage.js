"use strict";
 
import React, { Component } from 'react';
 
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

var solaricon = require('./../assets/images/solarenergy1.png');
var settingSolarIcon = <Image source={solaricon} style={{width: 40, height: 40}}/>;

var solaricon2 = require('./../assets/images/solarenergy2.png');
var settingSolarIcon2 = <Image source={solaricon2} style={{width: 40, height: 40}}/>;


 
class HomePage extends Component {
 
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Solar energy Options
                </Text>
                <Card style={styles.card}>
                    <CardImage>
                        {settingSolarIcon}
                    </CardImage>
                    <CardTitle>
                      <Text style={styles.title}>PPA: Free Solar</Text>
                    </CardTitle>
                    <CardContent>
                      <Text style={{textAlign: 'right'}}>Upfront cost: $0.00</Text>
                      <Text style={{textAlign: 'right'}}>Savings in 25 years:$25,000 </Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardImage>
                        {settingSolarIcon}
                    </CardImage>
                    <CardTitle>
                      <Text style={styles.title}>Take a Loan</Text>
                    </CardTitle>
                    <CardContent>
                      <Text style={styles.cardinnertext}>Upfront cost: $0.00</Text>
                      <Text style={styles.cardinnertext}>Savings in 25 years:$25,000 </Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardImage>
                        {settingSolarIcon2}
                    </CardImage>
                    <CardTitle>
                      <Text style={styles.title}>Purchase Outright</Text>
                    </CardTitle>
                   <CardContent>
                      <Text style={styles.cardinnertext}>Upfront cost: $0.00</Text>
                      <Text style={styles.cardinnertext}>Savings in 25 years:$25,000 </Text>
                    </CardContent>
                </Card>

            </View>
        );
    }
 
};
 
var styles = StyleSheet.create({
   container: {
        padding: 30,
        marginTop: 65,
        alignItems: "center"

    },
    card:{
        width: 300
    },
    cardinnertext: {
        fontSize: 14,
        textAlign: "right"
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: "center",
        color: "#656565"
    },
    subheading: {
        color: "#cccccc"
    },
    title: {
        fontSize: 18,
        backgroundColor: 'transparent'
  },
});
 
module.exports = HomePage;