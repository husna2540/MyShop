import React, { useEffect, useState } from "react";
import SQLite from 'react-native-sqlite-storage';
import { CommonActions } from '@react-navigation/native';
import { View, Text, Alert } from "react-native";
import { Button } from '@rneui/themed';

import { useRoute } from '@react-navigation/native';
//Custom Component
import HeaderComponent from "../../components/headerComponent";

import styles from './styles'

const db = SQLite.openDatabase(
  {
    name: 'MYSHOP',
    location: 'default',
  },
  () => { },
  error => { console.log(error) }
);

const DetailProductScreen = ({ navigation }) => {

  const route = useRoute();
  const [itemData, setItemData] = useState({})
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.itemData !== undefined) {
        setItemData(route.params.itemData)
        setIsLoad(false)
      }
    }
  }, [])

  const showAlert = () =>
    Alert.alert(
      'แจ้งเตือน',
      'ท่านต้องการลบรายการใช่หรือไม่ ?',
      [
        {
          text: 'ยืนยัน',
          onPress: () => removeData(),
        },
        {
          text: 'ยกเลิก',
          style: 'cancel',
        }
      ],
    );

  const removeData = async () => {
    try {
      // await AsyncStorage.clear();
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM Product where product_ID=?",
          [itemData.product_ID],
          () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'Home' },
                ],
              })
            );
          },
          error => { console.log(error) }
        )
      })
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <View style={styles.container}>
      <HeaderComponent
        title={'รายละเอียดสินค้า'}
        onPressArrowLeft={() => navigation.goBack()}
        isShowArrowLeft={true}
        isHideCloseIcon={true}
      />
      <View style={styles.boxDetail}>
        <Text style={styles.procNm}>{`รายการสินค้า : ${itemData.Product_name}`}</Text>
        <Text style={styles.procNm}>{`จำนวนสินค้าคงเหลือ : ${itemData.numberOfProduct}`}</Text>
        <Text style={styles.procNm}>{`หมายเหตุ : ${itemData.Product_remark === null ? '-' : itemData.Product_remark}`}</Text>
      </View>
      <View style={styles.fixToText}>
        <Button
          title="แก้ไข"
          onPress={() => navigation.navigate('ManageData', { itemData , type: 'EditList' })}
          buttonStyle={[styles.btnSty, { backgroundColor: 'rgba(78, 116, 289, 1)' }]}
          containerStyle={styles.btnConSty}
          titleStyle={styles.btnTitleStyle}
        />
        <Button
          title="ลบรายการ"
          onPress={() => showAlert()}
          buttonStyle={styles.btnSty}
          containerStyle={styles.btnConSty}
          titleStyle={styles.btnTitleStyle}
        />
      </View>
    </View>

  )
}

export default DetailProductScreen