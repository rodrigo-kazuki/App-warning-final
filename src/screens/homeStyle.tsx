import { StyleSheet } from 'react-native';
import { EmergencyBtn } from '../components/emergencyBtn/emergencyBtn';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      hiddenContainer: {
        display: 'none',
      },
      siren:{
        resizeMode:'contain',
        height:180,
        margin:20      
      },
      emergencyCalled:{
        display:'flex',
      },
      textCalled:{
        fontSize:30,
        color: 'red',
      }
});