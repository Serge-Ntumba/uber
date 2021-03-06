import React, { useContext, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon, Avatar } from "@rneui/base";
import { colors, parameters } from "../global/styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_APIKEY } from "@env";
import { OriginContext } from "../contexts/contests";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
navigator.geolocation = require("react-native-geolocation-service");

const DestinationScreen = ({ navigation }) => {
  const { dispatchOrigin } = useContext(OriginContext);
  const textImput1 = useRef(4);
  const textImput2 = useRef(5);
  return (
    <>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Icon
            type="Material-community"
            name="arrow-back"
            color={colors.grey1}
            size={32}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <TouchableOpacity>
          <View style={{ top: 25, alignItems: "center" }}>
            <View style={styles.view3}>
              <Avatar
                rounded
                avatarStyle={{}}
                size={30}
                source={require("../../assets/blankProfilePic.jpg")}
              />
              <Text style={{ marginLeft: 5 }}> For Someone</Text>
              <Icon
                type="Material-community"
                name="expand-more"
                color={colors.grey1}
                size={26}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <GooglePlacesAutocomplete
        currentLocation={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        placeholder="Going To"
        listViewDisplayed="auto"
        debounce={400}
        ref={textImput1}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails={false}
        autoFocus={true}
        styles={autoComplete}
        query={{
          key: GOOGLE_MAP_APIKEY,
          language: "en",
        }}
        onPress={(data, details = null) => {
          console.log(details);
          dispatchOrigin({
            type: "ADD_ORIGIN",
            payload: {
              latitude: details.geometry.latitude,
              longitude: details.geometry.longitude,
              address: details.formatted_address,
              name: details.name,
            },
          });
          navigation.goBack();
        }}
      />
    </>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: parameters.statusBarHeight,
  },

  view1: {
    position: "absolute",
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 10,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    height: 30,
    zIndex: 10,
  },

  view2: { backgroundColor: colors.white, zIndex: 4, paddingBottom: 10 },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8,
  },
});

const autoComplete = {
  textInput: {
    backgroundColor: colors.grey6,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.white,
  },

  textInputContainer: {
    flexDirection: "row",
  },
};
