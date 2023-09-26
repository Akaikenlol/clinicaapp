import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const Page = () => {
	return (
		<SafeAreaView>
			<Stack.Screen options={{ title: "Clinica" }} />
			<ScrollView>
				<View style={styles.appbar}></View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Page;

const styles = StyleSheet.create({
	appbar: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
		height: 100,
	},
});
