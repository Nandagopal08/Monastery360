import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WeatherScreen({ onBack }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      // Simulate API call for Sikkim weather
      // In production, you would use a real weather API
      setTimeout(() => {
        setWeatherData({
          location: "Gangtok, Sikkim",
          temperature: 18,
          condition: "Partly Cloudy",
          humidity: 75,
          windSpeed: 12,
          visibility: 8,
          forecast: [
            { day: "Today", high: 20, low: 15, condition: "partly-sunny" },
            { day: "Tomorrow", high: 22, low: 16, condition: "sunny" },
            { day: "Thursday", high: 19, low: 14, condition: "rainy" },
            { day: "Friday", high: 21, low: 15, condition: "cloudy" },
          ]
        });
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to fetch weather data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Weather</Text>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4682B4" />
          <Text style={styles.loadingText}>Loading weather data...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Weather</Text>
        </View>
        <View style={styles.errorContainer}>
          <Ionicons name="warning" size={48} color="#FF6B6B" />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchWeatherData}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weather</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Current Weather */}
        <View style={styles.currentWeather}>
          <Text style={styles.location}>{weatherData.location}</Text>
          <Text style={styles.temperature}>{weatherData.temperature}°C</Text>
          <Text style={styles.condition}>{weatherData.condition}</Text>
        </View>

        {/* Weather Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Ionicons name="water" size={20} color="#4682B4" />
            <Text style={styles.detailLabel}>Humidity</Text>
            <Text style={styles.detailValue}>{weatherData.humidity}%</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="speedometer" size={20} color="#4682B4" />
            <Text style={styles.detailLabel}>Wind Speed</Text>
            <Text style={styles.detailValue}>{weatherData.windSpeed} km/h</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="eye" size={20} color="#4682B4" />
            <Text style={styles.detailLabel}>Visibility</Text>
            <Text style={styles.detailValue}>{weatherData.visibility} km</Text>
          </View>
        </View>

        {/* Forecast */}
        <View style={styles.forecastContainer}>
          <Text style={styles.forecastTitle}>4-Day Forecast</Text>
          {weatherData.forecast.map((day, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.forecastDay}>{day.day}</Text>
              <Ionicons name={day.condition} size={24} color="#4682B4" />
              <Text style={styles.forecastTemp}>{day.high}°/{day.low}°</Text>
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
    backgroundColor: '#4682B4',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
  retryButton: {
    backgroundColor: '#4682B4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  currentWeather: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4682B4',
    marginBottom: 5,
  },
  condition: {
    fontSize: 16,
    color: '#888',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailLabel: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  forecastContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  forecastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  forecastDay: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
});