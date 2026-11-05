
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";

export default function CourseCard({
  id,
  code,
  title,
  units,
  schedule,
}) {

  // Get updated screen dimensions
  const { width } = useWindowDimensions();

  // Responsive card width
  const cardWidth = width * 0.92;

  // Platform-specific shadow
  const cardShadow = Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },

    android: {
      elevation: 4,
    },

    default: {},
  });

  return (
    <View
      style={[
        styles.card,
        { width: cardWidth },
        cardShadow,
      ]}
    >

      {/* Course Information */}
      <View style={styles.courseRow}>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {code}
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.courseTitle}>
            {title}
          </Text>

          <Text style={styles.schedule}>
            {schedule}
          </Text>
        </View>

      </View>

      {/* Course Tags */}
      <View style={styles.tagContainer}>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            {units} units
          </Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            Lecture
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    alignSelf: "center",
  },

  courseRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  badge: {
    width: 65,
    height: 35,
    backgroundColor: "#25205E",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  textContainer: {
    flex: 1,
  },

  courseTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#25205E",
    marginBottom: 5,
  },

  schedule: {
    fontSize: 12,
    color: "#777777",
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
    gap: 8,
  },

  tag: {
    backgroundColor: "#F0F0F5",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  tagText: {
    fontSize: 11,
    color: "#555555",
  },

});
