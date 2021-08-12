import React,{useState} from 'react';
import { View,SafeAreaView,Text,ScrollView ,Image,TouchableOpacity,} from 'react-native'
// import {RadioButton,Button  } from 'react-native-paper';
// import packer
// import { Appbar } from 'react-native-paper';
import Styles from './chargementStyle.js';


const Chargement = () => {
    const [checked, setChecked] = useState('');
    const [clik, setClik] = useState(checked?'envoyer':'');

    return (
      <>
        <View style={Styles.container}>
          <View style= {Styles.fond}>
            <Image source={require('../assets/orannge.png')} style={Styles.images}/>
            <Text style={Styles.text}> Veuillez patienter..</Text>
            <Text style={Styles.paragraphe}> Nous Cherchons une agence autour de vous faire Cash-in (Dépot) </Text>
          </View>
        </View>

        <View style={Styles.button}>                           
          <View style={Styles.btnView}>
            <TouchableOpacity style={clik==='annuler'? Styles.btnSelected:Styles.btnAction}onPress={()=>setClik('annuler')} >
                <Text style={clik==='annuler'? Styles.btnTextSelected:Styles.btnText}>Annuler</Text>
            </TouchableOpacity>
         </View>
        </View>
      </>
    );
  };
  
export default Chargement;