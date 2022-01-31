import { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0,
      cost:0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ cost: this.state.cost+this.state.counter }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.row}>  
            <TouchableOpacity style={styles.column} onPress={()=>{
              let num=this.state.cost+200;
              this.setState({cost:num})
            }}>
              <Image style={{height:200, width:200}} source={{uri:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'}}/>
              <Text style={{marginTop:10, marginLeft:10, fontSize:20}}>
                Cost: 200$
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.column} onPress={()=>{
              let num=this.state.cost+400;
              this.setState({cost:num})
            }}>
              <Image style={{height:200, width:200}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIOzzTmSEZjWIScs865U59oKTfIK0oz1K2A&usqp=CAU'}}/>
              <Text style={{marginTop:10, marginLeft:10, fontSize:20}}>
                Cost: 400$
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.row}>  
            <TouchableOpacity style={styles.column} onPress={()=>{
              let num=this.state.cost+100;
              this.setState({cost:num})
            }}>
              <Image style={{height:200, width:200}} source={{uri:'https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg'}}/>
              <Text style={{marginTop:10, marginLeft:10, fontSize:20}}>
                Cost: 100$
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.column} onPress={()=>{
              let num=this.state.cost+500;
              this.setState({cost:num})
            }}>
              <Image style={{height:200, width:200}} source={{uri:'https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'}}/>
              <Text style={{marginTop:10, marginLeft:10, fontSize:20}}>
                Cost: 500$
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.bottom}>
          <Text style={{marginTop:10, marginLeft:40, fontSize:30}}>
            Total: {this.state.cost} $ ({this.state.counter}/second)
          </Text>
          {this.state.cost>=100
          ?
          <TouchableOpacity style={styles.income} 
            onPress={()=>{
              this.setState({cost:this.state.cost-100})
              let num=this.state.counter+1;
              this.setState({counter:num})
            }}>
            <Text style={styles.text}>Upgrade income (-100$)</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.incomeDisabled}>
            <Text style={styles.text}>Upgrade income (100$)</Text>
          </TouchableOpacity>
        }
          
          <TouchableOpacity style={styles.button} onPress={()=>{this.setState({counter:0, cost:0})}}>
              <Text style={styles.text}>Clear All</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  top:{
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: '25%',
    textAlign:'center',
  },
  bottom:{
    position: 'absolute',
    top: '75%',
    right: 0,
    left: 0,
    bottom: 0,
    textAlign:'center',
    color:'#FFFFFF',
  },
  row:{
    flexDirection: 'row',
    height:'50%',
    
  },
  column:{
    flex:1,
    width: '50%',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop:10
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  income:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginTop:10
  },
  incomeDisabled:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
    marginTop:10
  },
});
