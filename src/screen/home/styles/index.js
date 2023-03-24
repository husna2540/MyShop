import { StyleSheet } from "react-native";
import { Fonts } from "../../../utill/constans/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeef2'
    },
    cardList: {
        width: '90%',
        // height: 100,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'center',
        padding: 15
    },
    productIcon: {
        width: 30,
        height: 30
    },
    subCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewProductText: {
        marginLeft: 10
    },
    productText: {
        fontFamily: Fonts.SukhumvitSet_Bold,
        fontSize: 16,
        color: '#67696b'
    },
    numOfProductTxt: {
        fontFamily: Fonts.SukhumvitSet_Text,
        fontSize: 12
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    btnSty: {
        backgroundColor: 'rgba(78, 116, 289, 1)',
        borderRadius: 6,

    },
    btnConSty: {
        width: '30%',

    },
    btnTitleStyle: {
        fontSize: 16,
        fontFamily: Fonts.SukhumvitSet_Bold
    },
    cicleAdd: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'rgba(78, 116, 289, 1)',
        position: 'absolute',
        bottom: 50,
        right: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: 'center',
    },
    PlusText: {
        fontFamily: Fonts.SukhumvitSet_Bold,
        // fontSize:50,
        color: '#ffffff',
        textAlign: 'center'
    },
    plusIcon: {
        width: 30,
        height: 30,
        tintColor: '#ffffff',
        alignSelf: 'center'
    },
    EmptyView: {
        justifyContent: 'center',
        marginTop: '50%'
    },
    EmptyText: {
        fontFamily: Fonts.SukhumvitSet_Bold,
        fontSize: 14,
        textAlign: 'center',
        color: '#6e6f71'
    },
    tabtext: {
        fontFamily: Fonts.SukhumvitSet_Bold,
        fontSize: 14,
        color: '#ffffff'
    }

})

export default styles