import React, { useEffect, useState } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Button, Tab } from '@rneui/themed';

//Custom Component
import HeaderComponent from "../../components/headerComponent";
import SQLite from 'react-native-sqlite-storage';

import styles from './styles'

const db = SQLite.openDatabase(
  {
    name: 'MYSHOP',
    location: 'default',
  },
  () => { },
  error => { console.log(error) }
);

const HomeScreen = ({ navigation }) => {

  const [isLoad, setIsLoad] = useState(true)
  const [productData, setProductData] = useState([]) // data All Product
  const [index, setIndex] = React.useState(0);
  const [isEmpty, setIsEmpty] = useState(false)


  useEffect(() => {
    createTable();
    getData();
  }, [])

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Product"
        + "(product_ID INTEGER PRIMARY KEY AUTOINCREMENT, Product_name TEXT, Product_remark TEXT,  numberOfProduct INTEGER);"
      )
    })
  }

  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Product",
          [],
          (tx, results) => {
            let temp = [];
            if (results.rows.length === 0) {
              setIsEmpty(true)
              setIsLoad(false)
            } else {
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              temp.reverse() // เรียงลำดับให้ล่าสุดอยู่ด้สนบน
              setProductData(temp)
              setIsLoad(false)
              setIsEmpty(false)
            }

          },
          error => {
            setProductData([])
            setIsLoad(false)
            setIsEmpty(true)
          }
        )
      })
    } catch (error) {
      console.log(error);
    }
  }


  const randerLoad = () => {
    return (
      <View style={styles.EmptyView}>
        <ActivityIndicator color={'rgba(78, 116, 289, 1)'} />
      </View>
    )

  }

  const onChangeTab = (e) => {
    setIndex(e)
    console.log(e)
    setIsLoad(true)
    switch (e) {
      case 0: getData()
        break;

      case 1: {
        let sql = "SELECT * FROM Product Where numberOfProduct < 10 AND numberOfProduct > 0"
        let arr = []
        filterData(sql, arr)
      }

        break;
      case 2: {
        let sql = "SELECT * FROM Product Where numberOfProduct = 0"
        let arr = []
        filterData(sql, arr)
      }

        break;

      default:
        break;
    }

  }

  const filterData = (sql, arr) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          arr,
          (tx, results) => {
            console.log(results)
            let temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
              temp.push(results.rows.item(i));
            }

            temp.reverse() // เรียงลำดับให้ล่าสุดอยู่ด้สนบน
            setProductData(temp)
            setIsLoad(false)
          },
          error => {
            setProductData([])
            setIsLoad(false)
          }
        )
      })
    } catch (error) {
      setIsLoad(false)
      console.log(error);
    }
  }


  return (
    <View style={styles.container}>
      <HeaderComponent
        title={'สินค้า'}
        isHideCloseIcon={true}
      />
      <Tab
        value={index}
        onChange={(e) => onChangeTab(e)}
        indicatorStyle={{
          backgroundColor: undefined,
          // height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="ทั้งหมด"
          titleStyle={styles.tabtext}
        />
        <Tab.Item
          title="ใกล้หมด"
          titleStyle={styles.tabtext}
        />
        <Tab.Item
          title="หมด"
          titleStyle={styles.tabtext}
        />
      </Tab>
      <ScrollView>

        {isLoad ? randerLoad() :
          productData.length > 0 ? (
            productData.map((item, index) => {
              return (
                <View style={styles.cardList} key={index}>
                  <View style={styles.subCard}>
                    <Image source={require('../../assets/product.png')} style={styles.productIcon} />
                    <View style={styles.viewProductText}>
                      <Text style={styles.productText}>{item.Product_name}</Text>
                      <Text style={styles.numOfProductTxt}>{`จำนวนสินค้าคงเหลือ: ${item.numberOfProduct}`}</Text>
                    </View>
                  </View>
                  <View style={styles.fixToText}>
                    <Button
                      title="รายละเอียด"
                      onPress={() => navigation.navigate('DetailProduct', { itemData: item })}
                      buttonStyle={styles.btnSty}
                      containerStyle={styles.btnConSty}
                      titleStyle={styles.btnTitleStyle}
                    />
                    <Button
                      title="เบิกสินค้า"
                      onPress={() => navigation.navigate('ManageData', { itemData: item, type: 'Edit' })}
                      buttonStyle={styles.btnSty}
                      containerStyle={styles.btnConSty}
                      titleStyle={styles.btnTitleStyle}
                    />
                    <Button
                      title="เพิ่มสินค้า"
                      onPress={() => navigation.navigate('ManageData', { itemData: item, type: 'AddMore' })}
                      buttonStyle={styles.btnSty}
                      containerStyle={styles.btnConSty}
                      titleStyle={styles.btnTitleStyle}
                    />
                  </View>
                </View>
              )
            })
          ) :
            isEmpty ?
              <View style={styles.EmptyView}>
                <Text style={styles.EmptyText}>{'กดปุ่ม + เพื่อเพิ่มรายการสินค้า'}</Text>
              </View>
              :
              <View style={styles.EmptyView}>
                <Text style={styles.EmptyText}>{'ไม่มีรายการ'}</Text>
              </View>}

      </ScrollView>

      <TouchableOpacity style={styles.cicleAdd} onPress={() => navigation.navigate('ManageData', { type: 'Add' })}>
        <Image source={require('../../assets/plus.png')} style={styles.plusIcon} />
      </TouchableOpacity>

    </View>

  )
}

export default HomeScreen