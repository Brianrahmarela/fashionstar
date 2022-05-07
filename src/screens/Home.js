import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          handle: 'gusnando',
          image:
            'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        },
        {
          handle: 'brian',
          image:
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        },
        {
          handle: 'ralp',
          image:
            'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
        },
        {
          handle: 'meliodas',
          image:
            'https://images.unsplash.com/photo-1577565177023-d0f29c354b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
          handle: 'escanor',
          image:
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
          handle: 'albert',
          image:
            'https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80',
        },
        {
          handle: 'saya',
          image:
            'https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
        },
      ],

      postData: [
        {
          nama: 'Brian Rahmarela',
          handle: '@brian_rahmarela',
          image:
            'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          profileImage:
            'https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          productTitle: 'Kumpulan Shirt High Quality',
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          sizeList: [
            {size: 'S', stock: 10},
            {size: 'M', stock: 10},
            {size: 'L', stock: 10},
            {size: 'XL', stock: 8},
          ],
          price: 200000,
        },
        {
          nama: 'Meliodas Ban',
          handle: '@meliodas_ban',
          image:
            'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80',
          profileImage:
            'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          productTitle: 'Top Wear Woman',
          productDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          sizeList: [
            {size: 'S', stock: 10},
            {size: 'M', stock: 10},
            {size: 'L', stock: 10},
          ],
          price: 500000,
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
        <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
        <View style={{flexDirection: 'row', margin: 20}}>
          <TouchableOpacity>
            <Icon name="home" size={22} color="#000" />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
              Home
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={this.state.data}
            horizontal
            style={{marginHorizontal: 10}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View>
                <View
                  style={{
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    elevation: 2,
                    marginBottom: 10,
                    marginRight: 10,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                  }}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 25}}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Text>{item.handle}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={{flex: 1, marginHorizontal: 20}}>
          <FlatList
            data={this.state.postData}
            // horizontal
            style={{marginHorizontal: 10}}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor: '#fff',
                  elevation: 2,
                  marginBottom: 20,
                }}>
                <View style={{flexDirection: 'row', margin: 20}}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 25}}
                    source={{
                      uri: item.profileImage,
                    }}
                  />
                  <View style={{marginLeft: 10, flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      {item.nama}
                    </Text>
                    <Text>{item.handle}</Text>
                  </View>
                  <Icon name="ellipsis-v" size={22} color="#878787" />
                </View>

                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      imageUrl: item.image,
                      nama: item.nama,
                      handle: item.handle,
                      profileImage: item.profileImage,
                      productTitle: item.productTitle,
                      productDescription: item.productDescription,
                      sizeList: item.sizeList,
                      price: item.price
                    })
                  }>
                  <Image
                    style={{width: 380, height: 300, borderRadius: 15}}
                    source={{
                      uri: item.image,
                    }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity>
                    <Icon name="heart" size={22} color="#878787" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginHorizontal: 20}}>
                    <Icon name="comment" size={22} color="#878787" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="paper-plane" size={22} color="#878787" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Icon name="bookmark" size={22} color="#878787" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: '#212121',
            paddingVertical: 15,
            flexDirection: 'row',
            elevation: 2,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="home" size={22} color="#fff" />
            <Text style={{color: '#fff', fontSize: 12}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="chart-line" size={22} color="#878787" />
            <Text style={{color: '#878787', fontSize: 12}}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="plus" size={22} color="#878787" />
            <Text style={{color: '#878787', fontSize: 12}}>Baru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="user" size={22} color="#878787" />
            <Text style={{color: '#878787', fontSize: 12}}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="cog" size={22} color="#878787" />
            <Text style={{color: '#878787', fontSize: 12}}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
