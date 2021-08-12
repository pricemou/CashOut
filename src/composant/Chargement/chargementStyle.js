import { StyleSheet } from 'react-native';
  
const Styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fond:{
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      marginTop:100
    },
    button: {
      flex:1,
      justifyContent:"flex-end"
    },
    text :{
      fontSize:19,
      marginTop:17,
      fontWeight: 'bold'
    },
    paragraphe:{
      width: 300,
      fontSize: 20,
      textAlign: 'center'
    },
    btnView:{
      padding:10,
      width:"100%",
      flexDirection:'row',
      justifyContent:"space-evenly"
    },
    btnAction:{
      backgroundColor:'white',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      padding:15,
      width:150,
      marginVertical:10,
      borderColor:'grey'
    },
    btnSelected:{
      backgroundColor:'black',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      padding:15,
      width:150,
      marginVertical:10
    },
    btnText:{
      color:'black',
      fontSize:17

    },
    btnTextSelected:{
      color:'white',
      fontSize:17

    },
    Radio:{
     justifyContent:'flex-start',
      flexDirection:'row',
     padding:10,
      
    },
    images:{
     padding:10,
     width:80,
     height:80,
     borderRadius: 100,
    },
    profileImgContainer: {
     marginLeft:8,
     height: 80,
     width: 80,
     borderRadius: 40,
   },
    Content:{
     flexDirection:'row',
     justifyContent:'flex-end',
    },
    ContentText:{ 
      padding:10,
      fontSize:18,
      fontWeight:'bold',
      textAlign:"justify"
    },
   RadioButtons:{
     fontSize:12,
   }
});

export default Styles