import React,{useState} from 'react';
import { View,SafeAreaView,Text,ScrollView ,Image,TouchableOpacity,} from 'react-native'
import {RadioButton,Button  } from 'react-native-paper';
// import packer
// import { Appbar } from 'react-native-paper';
import Styles from './MethodePaiementStyles';
import NavBar from '../NavBar/NavBar'


const MethodePaiment = () => {
    const [checked, setChecked] = useState('');
    const [clik, setClik] = useState(checked?'envoyer':'');

    return (
      <>
      <NavBar/>

      <View style={Styles.container}>

        <View style={Styles.Choix}>

          <View style={Styles.Radio}>
            <RadioButton
              style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}
              value="OpentPay"
              status={ checked === 'OpentPay' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('OpentPay')}/>
              
                <Image source={require('../assets/orannge.png')} style={Styles.images}/>

                <Text style={Styles.ContentText}> Opent Pay          </Text>
          </View>

          <View style={Styles.Radio}>
            <RadioButton
              style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}
              value="OrangeMonney"
              status={ checked === 'OrangeMonney' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('OrangeMonney')}/>

                <Image source={require('../assets/orannge.png')} style={Styles.images}/>
                <Text style={Styles.ContentText}> Orange monney</Text>
          </View>

          <View style={Styles.Radio}>
            <RadioButton
              style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}
              value="MoovMonney"
              status={ checked === 'MoovMonney' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('MoovMonney')}/>

                <Image source={require('../assets/moov.png')} style={Styles.images}/>
                <Text style={Styles.ContentText}> Moov monney    </Text>
          </View>

          <View style={Styles.Radio}>
            <RadioButton
              style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}
              value="MTNMonney"
              status={ checked === 'MTNMonney' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('MTNMonney')}/>

                <Image source={require('../assets/MTN.png')} style={Styles.images}/>
                <Text style={Styles.ContentText}> MTN monney    </Text>
          </View>

        </View>
        
        <View style={Styles.button}>                           
          <View style={Styles.btnView}>
            <TouchableOpacity style={clik==='annuler'? Styles.btnSelected:Styles.btnAction}onPress={()=>setClik('annuler')} >
                <Text style={clik==='annuler'? Styles.btnTextSelected:Styles.btnText}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={clik==='envoyer'? Styles.btnSelected:Styles.btnAction} onPress={()=>setClik('envoyer')}>
                <Text style={clik==='envoyer'? Styles.btnTextSelected:Styles.btnText}>valider</Text>
            </TouchableOpacity>
         </View>
        </View>

        <Text>{checked} </Text>
      
      </View>
      </>
    );
  };
  
export default MethodePaiment;