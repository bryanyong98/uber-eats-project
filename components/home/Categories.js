import React from "react";
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native'; 
import HeaderTabs from "../home/HeaderTabs";
import SearchBar from "../home/SearchBar";

const items = [
    {
        image : require("../../assets/images/shopping-bag.png"),
        text  : "Pick-up", 
    }, 

    {
        image : require("../../assets/images/soft-drink.png"),
        text  : "Soft Drinks", 
    },

    {
        image : require("../../assets/images/bread.png"),
        text  : "Bakery Items", 
    }, 

    {
        image : require("../../assets/images/fast-food.png"),
        text  : "Fast Food", 
    }, 

]; 

export default function Categories(){

    return (

        <View style={{
            marginTop : 5, 
            backgroundColor: "#fff", 
            paddingVertical : 10, 
            paddingLeft : 20, 
        }}>

                <ScrollView horizontal>
                    {items.map((item, index) => (

                        <View key={index} style={{alignItems : "center", marginRight: 30}}>
                        <Image source={item.image} 
                            style={{
                                width: 50, 
                                height: 40, 
                                resizeMode : "contain", 
                                }}                
                        />
                        <Text style={{fontSize : 13, fontWeight: "900"}}>
                            {item.text}
                        </Text>

                    </View>

                    ))}

                </ScrollView>


        </View>




    ); 

}