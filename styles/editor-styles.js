import {StyleSheet, Dimensions} from 'react-native';

const darkGreen = "rgb(0,75,20)";
const mediumGreen = "rgb(0,100,30)";
const lightGreen = "rgb(0,125,40)";
const cream = "rgb(255,255,225)";
const darkCream = "rgb(200, 200, 150)";
const brown = "rgb(50,30,0)";
const boldFont = "Solway_700Bold";
const lightFont ="Solway_400Regular";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

function createStyleSheet(width, height) {
  let gridWidth = windowWidth - 30;
  let squareSize = (gridWidth - 4) / width;

  if (height > width) {
    squareSize = (gridWidth - 4) / height;
    gridWidth = squareSize * width + 4;
  }

  return StyleSheet.create({

    editorContainer: {
      flexDirection: "column",
      alignItems: "center"
    },

    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: darkGreen,
      padding: 10,
      paddingVertical: 5,
      marginBottom: 15,
      elevation: 5
    },

    gardenName: {
      color: cream,
      fontFamily: lightFont,
      fontSize: 16
    },

    arrow: {
      color: cream,
      fontSize: 30
    },

    trashIcon: {
      color: cream,
      fontSize: 20
    },

    sizePickerRow: {
      flexDirection: "row",
      marginBottom: 15
    },

    pickerContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: cream,
      borderWidth: 2,
      borderColor: darkCream,
      borderRadius: 5,
      width: 138,
      paddingVertical: 5,
      paddingLeft: 10,
      paddingRight: 0,
      margin: 5,
      elevation: 5
    },

    pickerLabel: {
      color: darkGreen,
      fontFamily: lightFont,
      fontSize: 14
    },

    picker: {
      color: darkGreen,
      marginLeft: -5,
      width: 88,
      transform: [
        { scaleX: 0.9 }, 
        { scaleY: 0.9 },
     ],
    },

    gridContainer: {
      backgroundColor: "blue",
      flexDirection: "row",
      flexWrap: "wrap",
      width: gridWidth,
      borderWidth: 2,
      borderColor: "tan"
    },

    square: {
      backgroundColor: brown,
      borderColor: darkCream,
      borderWidth: 2,
      width: squareSize,
      height: squareSize
    }

  });
}

export {createStyleSheet};