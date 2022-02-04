import { StatusBar } from "expo-status-bar";
import {View,Text,ScrollView,TextInput,Pressable,Alert} from "react-native";
import React, { useState } from "react";
import styles from "./styles/Styles";
import { Picker } from "@react-native-picker/picker";
import RadioButton from "./components/RadioButton";

export default function App() {
  const [bottleSelect, setBottleSelect] = useState(1);
  const [timeSelect, setTimeSelect] = useState(1);
  const [genderSelect, setGenderSelect] = useState("male");
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState('');
  const [fontColor, setFontColor] = useState("#000000");

  //All the options for the Pickerlist
  const bottles = [
    { label: "1 bottle", value: 1 },
    { label: "2 bottles", value: 2 },
    { label: "3 bottles", value: 3 },
    { label: "4 bottles", value: 4 },
    { label: "5 bottles", value: 5 },
    { label: "6 bottles", value: 6 },
    { label: "7 bottles", value: 7 },
    { label: "8 bottles", value: 8 },
    { label: "9 bottles", value: 9 },
    { label: "10 bottles", value: 10 },
    { label: "11 bottles", value: 11 },
    { label: "12 bottles", value: 12 },
    { label: "13 bottles", value: 13 },
    { label: "14 bottles", value: 14 },
    { label: "15 bottles", value: 15 },
    { label: "16 bottles", value: 16 },
  ];

  const timeHours = [
    { label: "1 hours", value: 1 },
    { label: "2 hours", value: 2 },
    { label: "3 hours", value: 3 },
    { label: "4 hours", value: 4 },
    { label: "5 hours", value: 5 },
    { label: "6 hours", value: 6 },
    { label: "7 hours", value: 7 },
    { label: "8 hours", value: 8 },
    { label: "9 hours", value: 9 },
    { label: "10 hours", value: 10 },
    { label: "11 hours", value: 11 },
    { label: "12 hours", value: 12 },
  ];

  //Options for radio buttons
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  //Alert function for error
  function errorAlert() {
    Alert.alert(
      "Error",
      "You need to type in weight!",
    [
      {
        text: "Got it!",
      }
    ]
    );
  }

  //Function for calculating blood alcohol level
  function calculate() {
    let endResult = 0;
    
    //Check if weight has input. Check for default value 0 and "nothing" value ('') in case the user deleted text
    if (weight !== "" && weight !== 0) {
      let litres = bottleSelect * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      grams = grams - burning * timeSelect;

      if (genderSelect == "male") {
        endResult = grams / (weight * 0.7);
      } else {
        endResult = grams / (weight * 0.6);
      }

      //Result can't be negative, so convert it to zero.
      if (endResult < 0) {
        endResult = 0;
        setFontColor("#00ff00");
        //Set the font color for the result depending on what their blood level is. (Under 0.3 = green, 0.3-0.6 = yellow, over 0.6 = red)
      } else if (endResult <= 0.3) {
        setFontColor("#00ff00");
      } else if (endResult > 0.3 && endResult < 0.6) {
        setFontColor("#cccc00");
      } else {
        setFontColor("#ff3300");
      }

      //Set result for rendering
      setResult(endResult.toFixed(2));
    } else {
      errorAlert();
    }
  }

  return (
    <View style={styles.container}>
      {/* Author: Aleksi Hannula */}
      <ScrollView>
        <Text style={styles.heading}>Alcometer</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputHeading}>Weight</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="in kilograms"
            style={styles.textInput}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View>
          <Text style={styles.inputHeading}>Bottles</Text>
          {/* Bottles Picker list */}
          <Picker
            style={styles.inputSelection}
            selectedValue={bottleSelect}
            onValueChange={(itemValue) => setBottleSelect(itemValue)}
          >
            {bottles.map((bottle, index) => (
              <Picker.Item
                key={index}
                label={bottle.label}
                value={bottle.value}
              />
            ))}
          </Picker>

          <Text style={styles.inputHeading}>Time</Text>
          {/* Bottles Picker list */}
          <Picker
            style={styles.inputSelection}
            selectedValue={timeSelect}
            onValueChange={(itemValue) => setTimeSelect(itemValue)}
          >
            {timeHours.map((hour, index) => (
              <Picker.Item key={index} label={hour.label} value={hour.value} />
            ))}
          </Picker>
        </View>

        <Text style={styles.inputHeading}>Gender</Text>
        {/* Radio buttons for gender */}
        <RadioButton
          options={genders}
          onPress={(value) => setGenderSelect(value)}
          defaultValue={"male"}
        />

        {/* Font color is assigned in calculate function. Default is black just in case */}
        <Text style={[styles.result, { color: fontColor }]}>{result}</Text>
        <Pressable style={styles.button} onPress={() => calculate()}>
          <Text style={styles.buttonText}>CALCULATE</Text>
        </Pressable>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
