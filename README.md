# React Native Dimensions API Undefined on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native on Android: the API returns `undefined` before the dimensions are available. This can lead to crashes or unexpected behavior if not handled correctly. 

The `DimensionsBug.js` file shows the incorrect usage leading to the error.  The `DimensionsSolution.js` file provides a solution to address this problem.

## Solution

The recommended solution involves using the `useEffect` hook to asynchronously get the dimensions after the component has mounted and using optional chaining or nullish coalescing to handle the initial `undefined` value.  This ensures that your code does not attempt to access the width and height properties until they have been set.