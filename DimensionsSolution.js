The solution uses the `useEffect` hook and optional chaining to handle the asynchronous nature of the `Dimensions` API.

```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsSolution = () => {
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions(window);
    });

    setWindowDimensions(Dimensions.get('window'));

    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Window Width: {windowDimensions?.width || 0}</Text>
      <Text>Window Height: {windowDimensions?.height || 0}</Text>
    </View>
  );
};

export default DimensionsSolution;
```