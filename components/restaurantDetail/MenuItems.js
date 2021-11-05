
import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'; 
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox'; 
import {useDispatch, useSelector} from 'react-redux'; 


const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection : "row", 
        justifyContent : "space-evenly",
        marginRight: 20,
        marginLeft: 20, 
        marginTop: 20, 
        marginBottom: 20, 
    }, 

    titleStyle : {
        fontSize: 19, 
        fontWeight: "600", 
    }, 
}); 




export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {  
    
    // react redux code
    const dispatch = useDispatch(); 

    const selectItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART", 
        payload : { ...item, restaurantName: restaurantName, checkboxValue : checkboxValue},
    });

    // retrieve the entire array of items from the redux store. 
    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items 
    ); 

    // maintain the state when user revisits the screen from the previous parent screen
    const isFoodInCart = (food, cartItems) => 
        Boolean(cartItems.find( (item)  => item.title == food.title));      


    return (
        
        <ScrollView>
        {foods.map((food, index) => (

            <View key={index}>
                <View  style={styles.menuItemStyle}>    
                        { hideCheckbox ? (<></>) : <BouncyCheckbox
                            iconStyle={{borderColor: "lightgray", borderRadius: 5}} 
                            fillColor="lightgreen"
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            isChecked={isFoodInCart(food, cartItems)}
                            />}
                        <FoodInfo  food={food} />
                        <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />

                </View> 
                <Divider width={0.5} orientation="vertical" />
            </View>

        ) )}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{
        width: 240, justifyContent: "space-evenly"
    }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.desc}</Text>
        <Text>{props.food.price}</Text>
    </View>
);  


const FoodImage = ({marginLeft, ...props}) => (
    <View>
        <Image 
            source = {{uri: props.food.image}}
            style  = {{width: 80, height: 80, borderRadius: 8, marginLeft: marginLeft}}
        />
    </View>
); 
