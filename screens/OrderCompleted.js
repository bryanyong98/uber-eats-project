import React, { Component, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; 
import LottieView from 'lottie-react-native'; 
import MenuItems from '../components/restaurantDetail/MenuItems';
import firebase from '../firebase'; 
import { ScrollView } from 'react-native-gesture-handler';


export default function OrderCompleted(){

    const [lastOrder, setLastOrder] = useState({
        items: [
          {
            title: "Bologna",
            description: "With butter lettuce, tomato and sauce bechamel",
            price: "$13.50",
            image:
              "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
          },
        ],
      });


    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems); 

    // the accumulative variable that calculates the total price. 
    const total = items
      .map((item) => Number(item.price.replace('$', "")))
      .reduce((prev, curr) => prev + curr, 0)


    const totalUSD = total.toLocaleString("en", {
      style : "currency",     
      currency : "USD",
    }); 

    const styles = StyleSheet.create({

        safeAreaContainer: {
            marginTop: 50, 
            flex: 1, 
            backgroundColor: "white", 
          },   
    })

    useEffect(() => {

        const db = firebase.firestore(); 
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            });
            });

        return () => unsubscribe(); 

    }, [])

    return (


        <SafeAreaView style={styles.safeAreaContainer}>

            <View style={{
                margin: 15, 
                alignItems: "center", 
                height: "100%", 
            }}>

                    {/*Green checkmark*/}
                    <LottieView style={{height: 100, alignSelf: "center", marginBottom: 30}}
                                source={require("../assets/animations/check-mark.json")}
                                autoPlay
                                speed={0.5}
                                loop={false}
                    />

                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                        Your order at {restaurantName} has been placed. 
                    </Text>

                    <ScrollView>
                    {/*Menu items*/}
                    <MenuItems foods={lastOrder.items} hideCheckbox={true} />

                    {/*Cooking*/}
                    <LottieView style={{height: 200, alignSelf: "center", marginBottom: 30}}
                                source={require("../assets/animations/cooking.json")}
                                autoPlay
                                speed={0.5}
                    />
                    </ScrollView>



            </View>




        </SafeAreaView>
    ); 
}