import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

function Page() {
  return (
    <View>
      <Link href={`/(modals)/login`}>Login</Link>
      <Link href={`/(modals)/bookings`}>Bookings</Link>
      <Link href={`/listing/123`}>Listing</Link>
    </View>
  );
}

export default Page;
