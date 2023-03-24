import { StyleSheet } from "react-native";
import { Fonts } from "../../../utill/constans/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeef2'
    },
    boxDetail:{
        width:'90%',
        marginTop:20,
        backgroundColor:'#ffffff',
        paddingHorizontal:15,
        paddingVertical:20,
        // height:50,
        alignSelf:'center',
        borderRadius: 6
    },
    procNm:{
        fontSize: 16,
        fontFamily: Fonts.SukhumvitSet_Bold,
        color: '#67696b'
    },
    deleteText:{
        fontSize: 16,
        fontFamily: Fonts.SukhumvitSet_Bold,      
    },
    btnDelete:{
        marginTop:15,
        position:'absolute',
        bottom: 25,
        alignSelf:'center'
    },
    btnSty: {
        backgroundColor: '#fe3c3c',
        borderRadius: 6,

    },
    btnConSty: {
        width: '48%',
        alignSelf:'center',
        marginTop:15

    },
    btnTitleStyle: {
        fontSize: 16,
        fontFamily: Fonts.SukhumvitSet_Bold
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf:'center'
    },
})

export default styles