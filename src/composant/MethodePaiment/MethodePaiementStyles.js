import { StyleSheet } from 'react-native';
  
const Styles = StyleSheet.create({
    container: {
      flex:1,
      paddingVertical:30,
      alignItems:'center',
      marginTop:30,
      justifyContent:'center',
     
      },
      Appbar:{
            backgroundColor:'black'
      },
      Choix:{
        marginTop:30,
        elevation:8,
        backgroundColor: "white",
        width:300,
        borderRadius: 15,
        paddingVertical: 25,
         alignItems:'center',
         justifyContent:'center',
  
       },
     
       button: {
         flex:1,
         justifyContent:"flex-end"
        
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
        width:50,
        height:50,
        borderRadius: 100,
        // borderRadius:10
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