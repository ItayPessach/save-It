import { Collection } from "@/common/types/collection.type";
import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const CollectionCard = ({ name, thumbnail, count }: Collection) => {
  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/collection/[name]",
          params: { name },
        }}
        asChild
      >
        <Pressable>
          <Image
            source={thumbnail as any /* will be a url which is a string */}
            style={styles.image}
          />
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{count}</Text>
        </Pressable>
      </Link>
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
