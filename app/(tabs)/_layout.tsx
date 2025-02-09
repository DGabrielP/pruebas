
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="two" options={{ title: "Segunda Pestaña" }} />
    </Tabs>
  );
}
