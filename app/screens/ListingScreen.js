import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import Card from "../components/Card";
import Screen from "../components/Screen";
import plantsApi from "../api/plantList";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingScreen(props) {
    const [plants, setPlants] = useState([]);
    // const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      loadPlants();
    }, []);

    const loadPlants = async () => {
      setLoading(true);
      const response = await plantsApi.getPlants();
      setPlants(response.data);
      setLoading(false);

      if (!response.ok) return console.los("error loading");

      // setError(false);
      
      console.log(plants);

    
    };

  return (
    <Screen style={styles.container}>
       
          <ActivityIndicator animating={loading} />
          {plants ?
           <FlatList 
                data={plants}
                keyExtractor={(plants) => plants.id.toString()}
                renderItem={({ item }) => (
                  <Card
                    title={item.common_name}
                    subtitle={item.scientific_name}
                    imageUrl={item.image_url} />
                )}
              />:
              <>
                <AppText>Loading...</AppText>
                <AppButton title="Retry" onPress={loadPlants} />
              </>}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#f9f8ed", 
      padding: 20,
  }
});

export default ListingScreen;