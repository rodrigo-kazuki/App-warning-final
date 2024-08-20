import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { styles } from './emergencyBtnStyle';

export function EmergencyBtn() {
    return (
            <Text style={styles.emergencyBtn}>Emergency</Text>
    );
}