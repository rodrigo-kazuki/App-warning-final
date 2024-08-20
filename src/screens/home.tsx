import React, { useState } from 'react';
import { StyleSheet,Text, Button, Image, View, Touchable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { EmergencyBtn } from '../components/emergencyBtn/emergencyBtn';
import siren from './../../assets/siren.png'
import { styles } from './homeStyle';
import { Form } from '../components/form/form';
import { FormBtn } from '../components/formBtn/formBtn';

export default function Home() {
    const [page, setPage] = useState(true)
    const [called, setCalled] = useState(false)

    function statusHandler() {
        setPage(prevPage => !prevPage);
    }
    function statusCalled() {
        setCalled(true);
    }
    return (
        <View style={styles.container}>
            
            <View style={page ? styles.container : styles.hiddenContainer}>
                <Image
                    source={siren}
                    style={styles.siren} />
                <TouchableOpacity onPress={statusHandler}>
                    <EmergencyBtn />
                </TouchableOpacity>
            </View>
            <View style={page ? styles.hiddenContainer : styles.container}>
                <Form></Form>
                <TouchableOpacity onPress={()=>{statusHandler();statusCalled()}}>
                    <FormBtn />
                </TouchableOpacity>

            </View>
            <View style={called ? styles.emergencyCalled : styles.hiddenContainer}>
                <Text style={styles.textCalled}>Emergency called</Text>
            </View>
        </View>
    );
}    