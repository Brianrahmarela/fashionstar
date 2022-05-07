import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemYangDiseleksi: {},
    };
  }
  render() {
    console.log('props detail', this.props);
    // console.log('state detail', this.state);
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
        <View style={{flexDirection: 'row', margin: 20}}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
              Product
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="ellipsis-h" size={22} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1}}>
          <Image
            style={{width: '100%', height: 400}}
            source={{
              uri: this.props.route.params.imageUrl,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            <Image
              style={{width: 40, height: 40, borderRadius: 20}}
              source={{
                uri: this.props.route.params.profileImage,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>
                {this.props.route.params.nama}
              </Text>
              <Text style={{fontSize: 12}}>
                {this.props.route.params.handle}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Icon name="bookmark" size={22} color="#878787" />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 20, marginBottom: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {this.props.route.params.productTitle}
            </Text>
            <Text style={{marginTop: 2}}>
              {this.props.route.params.productDescription}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'right',
                fontSize: 18,
                marginTop: 10,
              }}>
              Rp.{' '}
              {this.props.route.params.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Size</Text>
            <View style={{marginTop: 10}}>
              <FlatList
                data={this.props.route.params.sizeList}
                horizontal
                // style={{marginRight: 10}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    style={{
                      borderWidth:
                        this.state.itemYangDiseleksi === item ? 3 : 1,
                      borderColor:
                        this.state.itemYangDiseleksi === item
                          ? '#0096FF'
                          : '#bdbdbd',
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}
                    onPress={() => this.setState({itemYangDiseleksi: item})}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color:
                          this.state.itemYangDiseleksi === item
                            ? '#0096FF'
                            : '#bdbdbd',
                      }}>
                      {item.size}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            marginHorizontal: 20,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 2,
          }}>
          <Text style={{color: '#fff'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Detail;
