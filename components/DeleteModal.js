import React from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import styles from "../styles/styles";

function DeleteModal(props) {

  return (
    <Modal
      animationType="slide"
      visible={props.isDeleteModalVisible}
      transparent={true}
      onRequestClose={() => props.setIsDeleteModalVisible(false)}
    >
      <View style={styles.deleteModal}>
        <Text style={styles.deleteModalText}>Do you want to delete {"\n"}"{props.gardenName}"?</Text>
        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            onPress={() => props.deleteGarden(props.id)}
          >
            <Text style={styles.modalHeader}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.setIsDeleteModalVisible(false)}
          >
            <Text style={styles.modalHeader}>NO</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </Modal>
  );
}

export default DeleteModal;
  
  