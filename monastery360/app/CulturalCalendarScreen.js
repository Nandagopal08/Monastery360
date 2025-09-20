import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CulturalCalendarScreen({ onBack }) {
  const [events, setEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  useEffect(() => {
    loadCulturalEvents();
  }, []);

  const loadCulturalEvents = () => {
    // Mock cultural events data for Sikkim
    const culturalEvents = [
      {
        id: 1,
        title: "Losar Festival",
        date: "February 10-12, 2024",
        month: 1,
        description: "Tibetan New Year celebration at monasteries across Sikkim",
        monastery: "Rumtek Monastery",
        type: "Religious Festival"
      },
      {
        id: 2,
        title: "Buddha Jayanti",
        date: "May 15, 2024",
        month: 4,
        description: "Celebration of Buddha's birthday with special prayers",
        monastery: "All Monasteries",
        type: "Religious Festival"
      },
      {
        id: 3,
        title: "Hemis Festival",
        date: "June 20-21, 2024",
        month: 5,
        description: "Traditional mask dances and cultural performances",
        monastery: "Hemis Monastery",
        type: "Cultural Festival"
      },
      {
        id: 4,
        title: "Pang Lhabsol",
        date: "August 28, 2024",
        month: 7,
        description: "Festival dedicated to Mount Khangchendzonga",
        monastery: "Various Monasteries",
        type: "State Festival"
      },
      {
        id: 5,
        title: "Diwali Celebrations",
        date: "November 1, 2024",
        month: 10,
        description: "Festival of lights celebrated across monasteries",
        monastery: "All Monasteries",
        type: "Religious Festival"
      },
      {
        id: 6,
        title: "Kagyed Dance",
        date: "December 15-17, 2024",
        month: 11,
        description: "Sacred Cham dance performed by monks",
        monastery: "Phodong Monastery",
        type: "Religious Dance"
      }
    ];
    setEvents(culturalEvents);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const filteredEvents = events.filter(event => 
    selectedMonth === -1 || event.month === selectedMonth
  );

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Religious Festival': return '#8E44AD';
      case 'Cultural Festival': return '#E74C3C';
      case 'State Festival': return '#3498DB';
      case 'Religious Dance': return '#F39C12';
      default: return '#95A5A6';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cultural Calendar</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Month Filter */}
        <View style={styles.filterContainer}>
          <Text style={styles.filterTitle}>Filter by Month:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.monthFilter}>
            <TouchableOpacity
              style={[styles.monthButton, selectedMonth === -1 && styles.selectedMonth]}
              onPress={() => setSelectedMonth(-1)}
            >
              <Text style={[styles.monthText, selectedMonth === -1 && styles.selectedMonthText]}>
                All
              </Text>
            </TouchableOpacity>
            {months.map((month, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.monthButton, selectedMonth === index && styles.selectedMonth]}
                onPress={() => setSelectedMonth(index)}
              >
                <Text style={[styles.monthText, selectedMonth === index && styles.selectedMonthText]}>
                  {month.substring(0, 3)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Events List */}
        <View style={styles.eventsContainer}>
          <Text style={styles.sectionTitle}>
            {selectedMonth === -1 ? 'All Events' : `${months[selectedMonth]} Events`}
          </Text>
          
          {filteredEvents.length === 0 ? (
            <View style={styles.noEventsContainer}>
              <Ionicons name="calendar-outline" size={48} color="#ccc" />
              <Text style={styles.noEventsText}>No events found for this period</Text>
            </View>
          ) : (
            filteredEvents.map((event) => (
              <View key={event.id} style={styles.eventCard}>
                <View style={styles.eventHeader}>
                  <View style={styles.eventTitleContainer}>
                    <Text style={styles.eventTitle}>{event.title}</Text>
                    <View style={[styles.eventType, { backgroundColor: getEventTypeColor(event.type) }]}>
                      <Text style={styles.eventTypeText}>{event.type}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.eventDetails}>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="calendar" size={16} color="#666" />
                    <Text style={styles.eventDate}>{event.date}</Text>
                  </View>
                  
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="location" size={16} color="#666" />
                    <Text style={styles.eventLocation}>{event.monastery}</Text>
                  </View>
                </View>
                
                <Text style={styles.eventDescription}>{event.description}</Text>
                
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn More</Text>
                  <Ionicons name="chevron-forward" size={16} color="#4682B4" />
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>Event Types:</Text>
          {['Religious Festival', 'Cultural Festival', 'State Festival', 'Religious Dance'].map((type, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: getEventTypeColor(type) }]} />
              <Text style={styles.legendText}>{type}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6e3',
  },
  header: {
    backgroundColor: '#CD853F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  monthFilter: {
    flexDirection: 'row',
  },
  monthButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedMonth: {
    backgroundColor: '#CD853F',
    borderColor: '#CD853F',
  },
  monthText: {
    fontSize: 14,
    color: '#666',
  },
  selectedMonthText: {
    color: 'white',
    fontWeight: 'bold',
  },
  eventsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  noEventsContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noEventsText: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  eventHeader: {
    marginBottom: 15,
  },
  eventTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  eventType: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 10,
  },
  eventTypeText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  eventDetails: {
    marginBottom: 10,
  },
  eventDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    fontWeight: '600',
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
    marginBottom: 15,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  learnMoreText: {
    fontSize: 14,
    color: '#4682B4',
    fontWeight: '600',
    marginRight: 5,
  },
  legendContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
});