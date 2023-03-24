import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Fonts } from "../../../utill/constans/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    statusbar: {
        width: '100%',
        height: getStatusBarHeight(),
    },
    headerView: {
        height: 50,
        justifyContent:'center',
        flexDirection:'row'
    },
    headerText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: Fonts.SukhumvitSet_Bold,
        fontSize: 18

    },
    flexRightLeft:{
        flex:0.1,
        justifyContent:'center'
    },
    flexcenter:{
        flex:0.8,
        justifyContent:'center'
    },
    closeIcon:{
        width:15,
        height:15,
        alignSelf:'center',
        tintColor:'#ffffff'
    },
    arrowIcon:{
        width:25,
        height:20,
        alignSelf:'center',
        tintColor:'#ffffff'
    }
})

export default styles