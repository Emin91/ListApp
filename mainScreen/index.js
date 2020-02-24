import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './style';
import {titles} from '../constants/stringConstants';
import IconComponent from '../components/iconComponent';
import ItemComponent from '../components/itemComponent';
import SliderComponent from '../components/sliderComponent';

const img = require('../components/car.jpg');
const img2 = require('../components/car2.jpg');

const items = [
  {text: titles.TEXT_1},
  {text: titles.TEXT_2},
  {text: titles.TEXT_3},
  {text: titles.TEXT_4},
  {text: titles.TEXT_5},
  {text: titles.TEXT_6},
  {text: titles.TEXT_7},
];

const header = titles => {
  return (
    <View style={styles.subHeaderRows}>
      <View style={styles.subHeaderIcon}>
        <IconComponent name={'flag-variant'} />
      </View>
      <View style={styles.subHeaderTextView}>
        <Text style={styles.subHeaderTitle}>{titles}</Text>
      </View>
      <View style={styles.subHeaderCountView}>
        <Text style={styles.subHeaderCount}>0/7</Text>
      </View>
    </View>
  );
};

const menuItems = () => {
  return (
    <View style={styles.itemsViewRows}>
      {items.map(({text}) => {
        return (
          <TouchableOpacity activeOpacity={0.7}>
            <ItemComponent text={text} count="0%" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRows}>
        <View style={styles.headerMainTile}>
          <Text style={styles.headerTitle}>{titles.HEADER}</Text>
        </View>
        <View style={styles.headerIconOne}>
          <TouchableOpacity>
            <IconComponent name={'weather-lightning'} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerIconTwo}>
          <TouchableOpacity>
            <IconComponent name={'lighthouse'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex: 0.9}}>
        <View>
          <View style={styles.sliderView}>
            <ScrollView style={{width: '100%', height: 200}} horizontal>
              <SliderComponent source={img} />
              <SliderComponent source={img2} />
            </ScrollView>
          </View>
          {header(titles.HEADER_SUB_TITLE_ONE)}
          {menuItems()}
          {header(titles.HEADER_SUB_TITLE_TWO)}
          {menuItems()}
          {header(titles.HEADER_SUB_TITLE_THREE)}
          {menuItems()}
          {header(titles.HEADER_SUB_TITLE_FOUR)}
          {menuItems()}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
