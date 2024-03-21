import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

function Page() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <View>
      <Text>{JSON.stringify(isSignedIn)}</Text>
      <Link href={`/(modals)/login`}>Login</Link>
      <Link href={`/(modals)/booking`}>Bookings</Link>
      <Link href={`/listing/123`}>Listing</Link>
    </View>
  );
}

export default Page;
