import React from 'react';
import { View,FlatList,Text} from 'react-native';
import DataItem from '../DataItem';
import Indicator from '../Indicator';
const DataList = ({data}) => {
if(data && data.length){
  return(
    <View>
      <FlatList
       data={data}
       keyExtractor={(item, index) => 'key' + index}
       renderItem={({item})=>{
         return(
          <DataItem item={item}/>
         )
       }}
      />
    </View>

  )
}
return <Indicator/>
}
export default DataList