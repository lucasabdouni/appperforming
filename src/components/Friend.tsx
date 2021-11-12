import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

interface Props {
  data: {
    name: string;
    likes: number;
  };
}

function FriendComponent({ data }: Props) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>

      <TouchableOpacity>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
