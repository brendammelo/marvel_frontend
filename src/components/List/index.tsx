import React from 'react';

import {Container, FlatList} from './styles'
import {ListItem} from '../../components/ListItem'
import { FlatListProps } from 'react-native';


export function List({data, ListFooterComponent, onEndReached, onEndReachedThreshold}: FlatListProps){
  return(
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
          image={item.thumbnail}
          title={item.title}
          description={item.description}
          />
        )}
        ListFooterComponent={ListFooterComponent}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
      />


    </Container>
  )

}
