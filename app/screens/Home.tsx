import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Collection } from "../../common/types/collection.type";
import CollectionCard from "@/components/collectionCard";

const MyCatalog = () => {
  const [collections, setCollections] = React.useState<Array<Collection>>([]);

  const fetchData = async () => {
    try {
      // const response = await fetch("YOUR_API_URL"); // Replace with your actual API URL
      const response = [
        {
          name: "Burgers",
          thumbnail: require("@/assets/images/icon.png"),
          count: 131,
        },
        {
          name: "Thailand",
          thumbnail: require("@/assets/images/icon.png"),
          count: 131,
        },
        {
          name: "Bar",
          thumbnail: require("@/assets/images/icon.png"),
          count: 131,
        },
        {
          name: "Nature",
          thumbnail: require("@/assets/images/icon.png"),
          count: 131,
        },
        {
          name: "Pizza",
          thumbnail: require("@/assets/images/icon.png"),
          count: 131,
        },
      ];
      setCollections(response);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message
    }
  };

  React.useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const renderCollection = (collection: Collection) => (
    <CollectionCard
      name={collection.name}
      thumbnail={collection.thumbnail}
      count={collection.count}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Catalog</Text>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        data={collections}
        renderItem={({ item }) => renderCollection(item)}
        numColumns={2}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    marginTop: 48,
    textAlign: "center",
  },
  contentContainer: {
    marginTop: 16,
    rowGap: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
});

export default MyCatalog;
