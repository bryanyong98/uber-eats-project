import React from 'react';
import {View, Text, SafeAreaView, Image, _View} from 'react-native'; 
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
    {
        title: "Lasagna", 
        desc : "With butter lettuce", 
        price : "$13.50", 
        image : "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Homemade-Ground-Beef-Lasagna-with-Melted-Cheese.png", 
    }, 

    {
        title: "Chicken Chop", 
        desc : "Freshly grilled", 
        price : "$19.50", 
        image : "https://i.ytimg.com/vi/kHc_DgWGQDE/maxresdefault.jpg",
    }, 

    {
        title: "Traditional Ramen", 
        desc : "Traditional flavour", 
        price : "$12.50", 
        image : "https://www.kikkoman.eu/fileadmin/user_upload/03-recipes/WEB_Traditional_Fukuoka_Ramen.jpg",
    }, 

    {
        title: "Fish and Chips", 
        desc : "Crispy, served with chips", 
        price : "$15.50", 
        image : "https://images.says.com/uploads/story_source/source_image/587144/0ca1.jpg",
    }, 

    {
        title: "Katsu Curry Chicken Rice", 
        desc : "Add some spice to your life", 
        price : "$10.90", 
        image : "https://dinnerthendessert.com/wp-content/uploads/2020/06/Japanese-Curry-4x3-1-688x516.jpg",
    }, 

]; 


export default function RestaurantDetail({ route, navigation }) {
    return (
        <SafeAreaView style={{
            marginTop : 20, 
            backgroundColor : "#eee", flex: 1,
        }}>

            <ScrollView>
                <About route={route} />
                <Divider width={1.8} style={{marginVertical: 20}} />
                <MenuItems restaurantName={route.params.name} foods={foods} />
                <View style={{margin : 30}}></View>
            </ScrollView>
            <ViewCart navigation={navigation} restaurantName={route.params.name} />

        </SafeAreaView>
    );
}



