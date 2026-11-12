import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import {router} from 'expo-router';
import {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet,Alert,Image,ImageBackground,TouchableOpacity} from 'react-native';

export default function AddTaskScreen() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

    const saveTask = async () => {
        if (!moduleCode || !taskName) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {
            const existingTasks = await AsyncStorage.getItem('tasks');
            let taskaArray = existingTasks ? JSON.parse(existingTasks) : [];
