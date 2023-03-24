import React, { useState, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { CommonActions } from '@react-navigation/native';

import { Alert, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

import { useRoute } from '@react-navigation/native';

import HeaderComponent from '../../components/headerComponent';
import InputComponent from '../../components/inputComponent';

import styles from './styles';


const db = SQLite.openDatabase(
  {
    name: 'MYSHOP',
    location: 'default',
  },
  () => { },
  error => { console.log(error) }
);


const ManageDataScreen = ({ navigation }) => {

  const route = useRoute();
  const [type, setType] = useState('add')
  const [dataItem, setDataItem] = useState({})

  const [inputData, setInputData] = useState({
    product_name: '',
    product_number: '',
    product_remark: ''
  });

  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.type !== undefined) {
        setType(route.params.type)

      }

      if (route.params.itemData !== undefined) {
        setDataItem(route.params.itemData)
        if (route.params.type === 'EditList') {
          setInputData({
            ...inputData,
            product_name: route.params.itemData.Product_name
          })
        }
      }
    }
  }, [])

  const onChangeText = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value
    })

  }

  const onSave = () => {
    switch (type) {
      case 'Edit': updateData(dataItem)
        break;
      case 'AddMore': updateData(dataItem)
        break;

      case 'Add': setData()
        break;

      case 'EditList': updateListName()
        break;

      default:
        break;


    }
  }

  const updateListName = () => {
    if (inputData.product_name === '') {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกชื่อสินค้า')
    } else {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "UPDATE Product SET Product_name=? where product_ID=?",
            [inputData.product_name, dataItem.product_ID],
            () => {
              Alert.alert('แจ้งเตือน', 'บันทึกข้อมูลเรีบยร้อยแล้ว')
              GoBackHome()
            },
            error => { console.log(error) }
          )
        })
      } catch (error) {
        console.log(error)
        Alert.alert('แจ้งเตือน', 'เกิดข้อผิดพลาดกับระบบ \nกรุณาลงใหม่ภายหลัง')
      }
    }
  }

  const updateData = async (item) => {
    if (inputData.product_number === '') {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกข้อมูลให้ครบถ้วน')
    } else {
      try {
        let currennm = parseInt(item.numberOfProduct)
        let nmInput = parseInt(inputData.product_number)
        let lastnm = 0
        let remark = ''
        if (inputData.product_remark === '') remark = item.Product_remark
        else remark = inputData.product_remark

        console.log(lastnm, remark, item.product_ID)

        // ตรวจสอบว่าเป็นการเบิกสินค้าหรือเพิ่มสินค้า
        if (type === 'Edit') lastnm = currennm - nmInput
        else lastnm = currennm + nmInput

        if (lastnm > 0 || lastnm === 0) {
          db.transaction((tx) => {
            tx.executeSql(
              "UPDATE Product SET numberOfProduct=?,  Product_remark=? where product_ID=?",
              [lastnm, remark, item.product_ID],
              () => {
                Alert.alert('แจ้งเตือน', type === 'Edit' ? 'เบิกสินค้าเรียบร้อย' : 'เพิ่มสินค้าเรียบร้อย')
                GoBackHome()
              },
              error => { Alert.alert('แจ้งเตือน', 'เกิดข้อผิดพลาดกับระบบ \nกรุณาลงใหม่ภายหลัง') }
            )
          })
        } else {
          Alert.alert('แจ้งเตือน', 'สินค้าในสต็อกไม่เพียงพอ.')
        }


      } catch (error) {
        console.log(error);
        Alert.alert('แจ้งเตือน', 'เกิดข้อผิดพลาดกับระบบ \nกรุณาลงใหม่ภายหลัง')
      }
    }
  }

  const setData = async () => {
    if (inputData.product_name === '' || inputData.product_number === '') {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกข้อมูลให้ครบถ้วน')
    } else {
      if (inputData.product_number > 0.9) {
        try {
          await db.transaction(async (tx) => {
            await tx.executeSql(
              "INSERT INTO Product (Product_name, numberOfProduct,  Product_remark ) VALUES (?,?,?)",
              [inputData.product_name, inputData.product_number, inputData.product_remark]
            );
            Alert.alert('แจ้งเตือน', 'บันทึกข้อมูลเรีบยร้อยแล้ว')
            GoBackHome()
          })

        } catch (error) {
          Alert.alert('แจ้งเตือน', 'เกิดข้อผิดพลาดกับระบบ \nกรุณาลงใหม่ภายหลัง')
        }

      } else {
        Alert.alert('แจ้งเตือน', 'จำนวนสินค้าไม่ถูกต้อง \n กรุณาตรวจสอบอีกครั้ง')
      }

    }
  }

  const GoBackHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Home' },
        ],
      })
    );
  }


  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <HeaderComponent
          title={type === 'Edit' ? 'เบิกสินค้า' : type === 'Add' ? 'เพิ่มรายการสินค้า' : 'เพิ่มสินค้า'}
          isShowArrowLeft={true}
          isHideCloseIcon={true}
          onPressArrowLeft={() => navigation.goBack()} />
        <View style={styles.boxInput}>
          {type === 'Edit' || type === 'AddMore' ?
            <Text style={styles.procNm}>{`รายการสินค้า : ${dataItem.Product_name}`}</Text> :
            <InputComponent
              value={inputData.product_name}
              name={'product_name'}
              onChangeText={onChangeText}
              isReq={true}
              isEdit={true}
              placeholder={"กรอกชื่อสินค้า"} />
          }
          {type !== 'EditList' && (
            <InputComponent
              value={inputData.product_number}
              isReq={true}
              name={'product_number'}
              isEdit={true}
              keyboardType={'number-pad'}
              onChangeText={onChangeText}
              placeholder={"กรอกจำนวนสินค้า"} />
          )}

          {type !== 'EditList' && (
            <InputComponent
              value={inputData.product_remark}
              isEdit={true}
              name={'product_remark'}
              onChangeText={onChangeText}
              placeholder={"หมายเหตุ"} />
          )}

          <Button
            title="บันทึก"
            buttonStyle={styles.btnSty}
            onPress={() => onSave()}
            containerStyle={styles.btnConSty}
            titleStyle={styles.btnTitleStyle}
          />
        </View>

      </View>
    </View>
  );
};


export default ManageDataScreen;