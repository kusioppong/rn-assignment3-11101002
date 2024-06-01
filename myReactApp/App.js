import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import profilePic from './assets/profile.jpeg';
import studyPic from './assets/study.png';
import excersicePic from './assets/excersice.svg';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUp}>
          <Text style={styles.greeting}>Hello,  Devs</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <Image
          source={profilePic} 
          style={styles.avatar}
        />
      </View>

      <View style={styles.searchSection}>
      <View style={styles.inputContainer}>
      <Ionicons name="search" size={24} color="#000" style={styles.icon} /> 
        <TextInput  style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
      
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        <View style={styles.category}>
          
          <Text style={styles.categoryText}>Exercise</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>

          <Image
            source={excersicePic}
            style={styles.categoryImage}
          />
        </View>
        <View style={styles.category}>
          
          <Text style={styles.categoryText}>Study</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>

          <Image
            source={studyPic}
            style={styles.categoryImage}
          />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Mobile App Development</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Web Development</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Push Ups</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 240, 232)',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerUp: {
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: 10,
  },
  greeting: {
    fontSize: 36,
  },
  taskCount: {
    color: '#888',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
    position: 'relative', 
  },
  icon: {
    position: 'absolute',
    left: 15,
    zIndex: 1, 
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    padding: 15,
    paddingLeft: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    elevation: 2,
  },
  filterButton: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: 'rgb(240, 82, 47)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  filterIcon: {
    width: 15,
    height: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    width: '49%',
    height: 160,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryImage: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
    height: 100,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
    marginBottom: 5,
  },
  categoryTaskCount: {
    color: '#888',
  },
  taskCard: {
    height: 100,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
});
