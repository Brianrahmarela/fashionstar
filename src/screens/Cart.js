import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('cart');
      value = JSON.parse(value);

      if (value !== null) {
        this.setState({cart: value});
      }

      console.log('data cart berhasil di get', value);
    } catch (error) {
      console.log(error);
    }
  };
  saveData = async cart => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      console.log('data user detail disimpan');
    } catch (error) {
      console.log(error);
    }
  };

  editQty = (index, action) => {
    console.log('action editQty', action)
    let cart = this.state.cart
    if (action == "+"){
      console.log('msk +')
      cart[index].qty++;
    } else {
      console.log('msk -')
      cart[index].qty--;

      if(cart[index].qty < 1){
        cart.splice(index, 1)
      } 
    }
    this.setState({cart}, () => this.saveData(cart))
  }

  render() {
    //   console.log('this.state', this.state)
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
              Cart
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={22} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.cart}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  elevation: 2,
                  marginHorizontal: 10,
                  borderRadius: 6,
                  paddingVertical: 10,
                  marginTop:10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                  }}>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 3}}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                    }}
                  />
                </View>

                <View style={{justifyContent: 'center', flex: 1}}>
                  <Text style={{fontWeight: 'bold'}}>{item.namaProduk} ({item.size})</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 3,
                        width: 20,
                        height: 20,
                        borderColor: '#00BFFF',
                      }}
                      onPress={() => this.editQty(index, '-')}
                      >
                      <Icon name="minus" size={10} color="#000" />
                    </TouchableOpacity>
                    <View
                      style={{marginHorizontal: 10, justifyContent: 'center'}}>
                      <Text style={{fontSize: 16}}>{item.qty}</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',

                        borderWidth: 1,
                        borderRadius: 3,
                        width: 20,
                        height: 20,
                        borderColor: '#00BFFF',
                      }}
                      onPress={() => this.editQty(index, '+')}
                      >
                      <Icon name="plus" size={10} color="#000" />
                    </TouchableOpacity>
                  </View>
                  <Text style={{marginTop: 5}}>
                    Sisa Stock: <Text style={{color: 'crimson'}}>{item.sisaStock}</Text>
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      textAlign: 'right',
                      marginRight: 10,
                    }}>
                    Rp. {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default Cart;
