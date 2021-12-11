import React, { useEffect } from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Button,
    Alert
} from "react-native";

export const DetailsScreen = ({ navigation, route }) => {
    console.log(props.route.params.bus)

    const { idbusiness, detailsbusiness } = route.params;

    const [business, setBusiness] = useState({
        name: detailsbusiness.name,
        type: detailsbusiness.type,
        pic: detailsbusiness.pic,
        cellphone: detailsbusiness.cellphone,
        direction: detailsbusiness.direction,
        lat: detailsbusiness.lat,
        lng: detailsbusiness.lng,
    });

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.headContainer}>
                <Image
                    source={{ uri: business.pic }}
                    style={styles.image}
                />
                <Text style={styles.listText}>{business.name}</Text>
                <Text style={styles.Text}>{business.cellphone}. {business.type}</Text>
                <Text style={styles.Text}>{business.direction}. {business.lat} | {business.lat}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    flatList: {
        width: "100%",
    },
    listText: {
        color: "white",
        fontSize: 30,
        marginStart: 20,
        marginTop: 5,
    },
    listItem: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: "#2f4f4f",
        padding: 15,
        borderRadius: 5,
    },
    headContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
    },
    image: {
        marginStart: 5,
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 35,
    },
    Text: {
        color: "white",
        fontSize: 15,
        marginStart: 5,
        marginTop: 5,
    }
});