
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

import CourseCard from "./CourseCard";

export default function CourseCatalog() {

  // Store the course information in state
  const [courses, setCourses] = useState([
    {
      id: "c1",
      code: "IT313",
      title: "Mobile Programming",
      units: 3,
      schedule: "MWF 8:00–9:00 AM",
    },
    {
      id: "c2",
      code: "IT311",
      title: "Systems Integration",
      units: 3,
      schedule: "TTh 9:30–11:00 AM",
    },
    {
      id: "c3",
      code: "IT321",
      title: "Information Assurance",
      units: 3,
      schedule: "MWF 1:00–2:00 PM",
    },
    {
      id: "c4",
      code: "IT331",
      title: "Web Systems & Technologies",
      units: 3,
      schedule: "TTh 1:00–2:30 PM",
    },
    {
      id: "c5",
      code: "IT341",
      title: "Human-Computer Interaction",
      units: 3,
      schedule: "MWF 3:00–4:00 PM",
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          IT313 Course Catalog
        </Text>

        <Text style={styles.headerSubtitle}>
          {courses.length} courses this semester
        </Text>
      </View>

      {/* Scrollable Course List */}
      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            code={course.code}
            title={course.title}
            units={course.units}
            schedule={course.schedule}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F8",
  },

  header: {
    backgroundColor: "#25205E",
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  headerSubtitle: {
    fontSize: 13,
    color: "#D8D5F0",
    marginTop: 6,
  },

  listContainer: {
    paddingTop: 22,
    paddingBottom: 30,
  },
});
