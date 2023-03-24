import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Fonts } from "../../../utill/constant/fonts";

const styles = StyleSheet.create({
    statusbar: {
        width: '100%',
        height: getStatusBarHeight(),
    },
    centeredView: {
      flex: 1,
    },
    modalView: {
      width: '100%',
      height: '100%',
      backgroundColor: '#eaeef2',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    //   paddingHorizontal:15
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    closeIcon:{
        width:15,
        height:15
    },
    header:{
        flexDirection:"row",
        backgroundColor:'#4388ea'
    },
    flexRightLeft:{
        flex:0.2
    },
    flexcenter:{
        flex:0.6
    },
    headerText:{
        fontFamily:Fonts.SukhumvitSet_Bold,
        fontSize: 16,
        textAlign:'center'
    },
    boxInput:{
        width:'90%',
        marginTop:20,
        backgroundColor:'#ffffff',
        paddingHorizontal:15,
        paddingVertical:20,
        // height:50,
        alignSelf:'center',
        borderRadius: 6
    },
    input:{
        height:45,
        borderBottomColor:'#c7c9d4',
        borderBottomWidth:1,
        fontFamily:Fonts.SukhumvitSet_Text,
        marginBottom: 15,
        width:'90%',
        alignSelf:'center'
    },
    btnSty: {
        backgroundColor: 'rgba(78, 116, 289, 1)',
        borderRadius: 6,

    },
    btnConSty: {
        width: '48%',
        alignSelf:'center',
        marginTop:10

    },
    btnTitleStyle: {
        fontSize: 16,
        fontFamily: Fonts.SukhumvitSet_Bold
    },
    procNm:{
        fontSize: 16,
        fontFamily: Fonts.SukhumvitSet_Bold,
        color: '#67696b'
    }
  });
  

  export default styles