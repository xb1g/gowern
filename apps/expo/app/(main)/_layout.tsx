import { Provider } from 'app/provider'
import { Stack, Tabs } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="(feed)"
      >
        <Tabs.Screen name="(feed)" options={{ title: 'Home' }} />
        <Tabs.Screen
          name="([user])"
          initialParams={{ user: 'foobar' }}
          options={{ title: 'Profile' }}
        />
        <Tabs.Screen name="(explore)" options={{ title: 'Search' }} />
      </Tabs>
    </Provider>
  )
}
