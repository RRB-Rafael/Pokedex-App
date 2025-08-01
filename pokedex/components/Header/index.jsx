import { Image, Text, View, Pressable } from "react-native";
import { Styles } from "./styles";
import {Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSource = require("@/assets/images/header.jpg");

export default function Header({tittle, back = false }) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image}/>
            </View>
        </View>
    )
}
