import React from 'react';
import { StyleSheet,ScreenView, Text,Keyboard,TextInput, View,TouchableWithoutFeedback,Alert ,SafeAreaView,TouchableOpacity} from 'react-native';
const currencyPerRupee={
DOLLAR:0.014,
EURO :0.012,
POUND: 0.011,
RUBEL: 0.93,
AUSDOLLAR : 0.2,
CANDOLLAR: 0.019,
YEN :1.54,
DINAR:0.0043,
BITCOIN: 0.000041
};
export default class App extends React.Component {

constructor(props){
  super(props);
  this.state={
    inputValue: "",
    resultValue: "0.0 "
  };
}

buttonPressed = currency =>{
  if(this.state.inputValue === ""){
    Alert.alert("enter some value");
  }

let result = parseFloat(this.state.inputValue) *
currencyPerRupee[currency];

this.setState({resultValue: result.toFixed(2)});
};

  render(){
     
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <SafeAreaView style={styles.container}>
     <View style={styles.screenview}>
              
              <View style={styles.resultcontainer}>     
    <Text style={styles.resultValue}>
    {this.state.resultValue}</Text>
    </View>


    <View style={styles.inputcontainer}>
    <TextInput
    style={styles.inputs} 
    placeholder="enter value"
    value={this.state.inputValue}
    onChangeText={inputValue=>
      this.setState({inputValue
        }) }>
        </TextInput>
     
         </View>

<View style={styles.converterbuttoncontainer}>

<TouchableOpacity  
onPress={()=>this.buttonPressed("DOLLAR")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>$ </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("EURO")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>EURO </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("AUSDOLLAR")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>AUS </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("POUND")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}> POUND   </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("RUBEL")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>RUBEL </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("CANDOLLAR")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>CAN </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("YEN")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>YEN </Text>
</TouchableOpacity>


<TouchableOpacity  
onPress={()=>this.buttonPressed("DINAR")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>DINAR </Text>
</TouchableOpacity>

<TouchableOpacity  
onPress={()=>this.buttonPressed("BITCOIN")}
style={styles.converterbutton}>
<Text style={styles.converterbuttontext}>BITCION </Text>
</TouchableOpacity>






      </View>
      </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',    
    marginTop:20
  },
  screenview:{
    flex :1
  },
  resultcontainer:{
     marginTop: 20,
     height:70,
     borderColor:"#c1c1c1",
     borderWidth:2,
     alignItems:"center",
     backgroundColor:"#0A79DE",
     justifyContent: "center",
     

  },
  resultValue:{
     fontSize:20,
     fontWeight:"bold",
     color:"#FFF"
  },
  
  inputcontainer:{
     marginTop: 20,
     height:70,
     borderColor:"#c1c1c1",
     borderWidth:2,
     alignItems:"center",
     backgroundColor:"#0A79DE",
     justifyContent: "center"
  },
  inputs:{
    color:"#FFF",
    fontSize:30
  },
  converterbuttoncontainer:{
    flexDirection:"row",
    flexWrap: "wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  converterbutton:{
    alignItems :"center",
    justifyContent :"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.3%"
  },
  converterbuttontext:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
});
