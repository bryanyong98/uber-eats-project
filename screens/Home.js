import React, { useEffect, useState }  from "react";
import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native'; 
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem, {localRestaurants} from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
// import RestaurantItem, {localRestaurants} from "../components/SearchBar"; 

const YELP_API_KEY = "ij2_BGrvmQITSxS5RlbEzYfR0GB-Heci9DkIFXYhlPtj2LA4hVseJROqg420Cq9H73kWedwwwEfyfVP9nJgGYkHF7c3hllOCcRCsgIaCKkyX90Tg6uetWIm34j1wYXYx"; 


export default function Home({navigation}){

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
    const [activeTab, setActiveTab] = useState("Delivery");
    const [city, setCity] = useState("San Francisco")



const getRestaurantsFromYelp = () => {
  
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
        headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };

    return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
        setRestaurantData(
            json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
            )
        )
        );
    };

    // when either city or active tab variable changes, then the component view will be refreshed. 
    useEffect( () => {
        getRestaurantsFromYelp(); 
    }, [city, activeTab]); 

    return (
        <SafeAreaView style={{
            marginTop : 20, 
            backgroundColor : "#eee", flex: 1,
            
        }}>
            <View style={{backgroundColor: "white", padding: 15,}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} /> 
                <Categories />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantItem 
                    restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>

            <Divider width={1} />
            <BottomTabs style={{bottom: 80,}}/>

        </SafeAreaView>
    ); 

}

