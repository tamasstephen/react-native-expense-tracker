import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { useModal } from "@/store/modalStore";
import ManageExpenseModal from "@/components/ManageExpenseModal";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { onOpen } = useModal();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerTitleStyle: {
            color: "white",
          },
          sceneStyle: {
            backgroundColor: Colors.background,
          },
          headerRight: () => (
            <View style={{ marginRight: 24 }}>
              <Pressable
                onPress={onOpen}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
                android_ripple={{ color: "#f2f2f2" }}
              >
                <Ionicons name="add" size={24} color="white" />
              </Pressable>
            </View>
          ),
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {
              backgroundColor: Colors.secondary,
            },
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Recent",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="all"
          options={{
            title: "All Expenses",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>
      <ManageExpenseModal />
    </>
  );
}
