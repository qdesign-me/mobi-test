import { useLocalSearchParams } from 'expo-router';
import React from 'react';

function Page() {
  const { id } = useLocalSearchParams();
  return <div>Page {id}</div>;
}

export default Page;
