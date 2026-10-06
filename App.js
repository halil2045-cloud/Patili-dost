import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

const PETS_DATA = [
  {
    id: '1',
    name: 'Gümüş',
    type: 'Kedi (Scottish Shorthair)',
    age: '2 Yaşında',
    status: 'Aşı Zamanı Geldi',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500',
  },
  {
    id: '2',
    name: 'Limon',
    type: 'Muhabbet Kuşu',
    age: '1 Yaşında',
    status: 'Sağlıklı',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500',
  },
];

export default function App() {
  const [pets, setPets] = useState(PETS_DATA);

  const renderPetItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.petImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.petName}>{item.name}</Text>
        <Text style={styles.petType}>{item.type}</Text>
        <Text style={styles.petAge}>{item.age}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🐾 Patili Dostumuz</Text>
        <Text style={styles.headerSubtitle}>Evcil Hayvan Takip ve Bakım</Text>
      </View>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetItem}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
        <Text style={styles.addButtonText}>+ Yeni Dost Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E9F2',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222B45',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#8F9BB3',
    marginTop: 4,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  petImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222B45',
  },
  petType: {
    fontSize: 14,
    color: '#8F9BB3',
    marginTop: 2,
  },
  petAge: {
    fontSize: 12,
    color: '#C5CEE0',
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#FF3D7115',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  badgeText: {
    color: '#FF3D71',
    fontSize: 11,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#3366FF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
