import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, FlatList, View } from 'react-native';
import Card from "../components/Card";
import Screen from "../components/Screen";
import plantsApi from "../api/plantList";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import SmallButton from '../components/SmallButton';
import AppTextInput from "../components/AppTextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";


function ListingScreen(props) {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredPlantList, setFilteredPlantList] = useState([]);
    const [searchState, setSearchState] = useState(false);

  
    useEffect(() => {
      loadPlants();
    }, []);

    const loadPlants = (async () => {
      setLoading(true);
      const response = await plantsApi.getPlants();
      setPlants(response.data.data);
      setLoading(false);

      if (!response.ok) return console.log("error loading");
      
    });

    const handleSearch = (searchInput) => {
      console.log("searching")
      const stateCopy = [...plants];
      const filteredPlantList = stateCopy.filter((item) =>
        item.common_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.scientific_name.toLowerCase().includes(searchInput.toLowerCase()));
      
      setSearchState(true);
      setFilteredPlantList(filteredPlantList);
    }

  return (
    
    <Screen style={styles.container}>
        <AppTextInput placeholder="Search..." onChangeText={handleSearch} icon="magnify" /> 
            {searchState ? 
              <FlatList 
                    data={filteredPlantList}
                    keyExtractor={(filteredPlantList) => filteredPlantList.id.toString()}
                    renderItem={({ item }) => (
                      
                    <Card
                        title={item.common_name}
                        subtitle={item.scientific_name}
                        imageUrl={{ uri: item.image_url}} 
                      />  
                    )}
                  />
                  
            :

            
              <FlatList 
                    data={plants}
                    keyExtractor={(plants) => plants.id.toString()}
                    renderItem={({ item }) => (
                  
                      <Card
                          title={item.common_name}
                          subtitle={item.scientific_name}
                          imageUrl={{ uri: item.image_url}} 
                        />  
                    )}
                
              />
              
            }
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#f9f8ed", 
      padding: 20,
  }, 
  buttonContainer: {
    position: "absolute",
    right: 10,
    bottom: 35,
  }
});

export default ListingScreen;