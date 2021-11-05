import React, { useEffect, useState }  from "react";
import {View, Text, TouchableOpacity} from 'react-native'; 
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";




export default function BottomTabs(){

    return (

            <View style={{
                flexDirection : "row", 
                margin: 10, 
                marginHorizontal: 20, 
                justifyContent: "space-between",
            }}>
                <Icon icon="home" text="Home"></Icon>
                <Icon icon="search" text="Browse"></Icon>
                <Icon icon="shopping-bag" text="Grocery"></Icon>
                <Icon icon="receipt" text="Orders"></Icon>
                <Icon icon="user" text="Account"></Icon>

            </View>
    
    ); 

}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 
                name={props.icon}
                size={25} 
                style={{marginBottom : 3, alignSelf: "center"}}
            ></FontAwesome5>
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

