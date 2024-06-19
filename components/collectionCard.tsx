import { Collection as CollctionType } from "@/common/types/collection.type";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CollectionCard = ({ name, thumbnail, count }: CollctionType) => {
  const navigation = useNavigation();

  const navigateToCollection = (name: string) => {
    navigation.navigate("Collection", { name });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToCollection(name)}>
        <Image
          source={thumbnail as any /* will be a url which is a string */}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{count}</Text>
      </TouchableOpacity>
      {/* </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    width: "45%",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
});

export default CollectionCard;
