import { StyleSheet } from "react-native";
import { Fonts } from "../../../utill/constant/fonts";

const styles = StyleSheet.create({

    input:{
        height:45,
        borderBottomColor:'#c7c9d4',
        borderBottomWidth:1,
        fontFamily:Fonts.SukhumvitSet_Text,
        marginBottom: 15,
        width:'90%',
        alignSelf:'center'
    },
    reqText:{
        color:'red',
        fontSize:16
    }
  });
  

  export default styles