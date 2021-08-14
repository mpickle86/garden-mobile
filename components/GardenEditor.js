import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import Square from "./Square";
import {createStyleSheet} from "../styles/editor-styles.js";

function GardenEditor(props) {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [gridArr, setGridArr] = useState([]);
  const styles = createStyleSheet(width);

  useEffect(() => {
    setGridArr([]);
    for (i = 0; i < (width * height); i++) {
      setGridArr(prev => [
        ...prev,
        <Square key={prev.length} id={prev.length} />
      ]);
    }
  }, [width, height]);

  return (
    <View style={styles.gridContainer}>
      {gridArr}
    </View>
  )
}

export default GardenEditor;