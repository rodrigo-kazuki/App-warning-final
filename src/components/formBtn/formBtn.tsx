import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { styles } from './formBtnStyle';

export function FormBtn() {
    return (
            <Text style={styles.emergencyBtn}>Call Emergency</Text>
    );
}