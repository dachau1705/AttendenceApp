import React, { useState } from 'react';
import { Button, Dimensions, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Create a simple calendar component
const AttendanceScreen = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState({
        '2024-10-01': { present: true },
        '2024-10-02': { present: false },
        '2024-10-03': { present: true },
        '2024-10-04': { present: true },
        '2024-10-05': { present: false },
        '2024-10-06': { present: true },
        '2024-10-07': { present: true },
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getCalendarDays = () => {
        const month = currentMonth.getMonth();
        const year = currentMonth.getFullYear();
        const daysInMonth = getDaysInMonth(month, year);
        const firstDay = new Date(year, month, 1).getDay();

        let daysArray = Array.from({ length: daysInMonth + firstDay }, (_, index) => {
            if (index < firstDay) return null;
            return `${year}-${String(month + 1).padStart(2, '0')}-${String(index - firstDay + 1).padStart(2, '0')}`;
        });

        const totalCells = 7;
        const emptyCells = (totalCells - (daysArray.length % totalCells)) % totalCells;

        daysArray = [...daysArray, ...Array(emptyCells).fill(null)];

        return daysArray;
    };

    const handleDayPress = (date) => {
        setSelectedDate(date);
        setModalVisible(true);
    };

    const renderDay = ({ item }) => {
        if (!item) return <View style={styles.emptyDay} />;

        const isPresent = attendanceData[item]?.present;
        return (
            <TouchableOpacity
                style={[styles.day, isPresent ? styles.present : styles.absent]}
                onPress={() => handleDayPress(item)}
            >
                <Text style={styles.dayText}>{Number(item.split('-')[2])}</Text>
                {isPresent && <View style={styles.dot} />}
            </TouchableOpacity>
        );
    };

    const handlePreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Attendance Calendar</Text>
            <Text style={styles.month}>
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </Text>

            <View style={styles.monthNavigation}>
                <TouchableOpacity onPress={handlePreviousMonth} style={styles.navButton}>
                    <Text style={styles.navButtonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextMonth} style={styles.navButton}>
                    <Text style={styles.navButtonText}>Next</Text>
                </TouchableOpacity>
            </View>

            {/* Weekdays Row */}
            <View style={styles.weekdaysContainer}>
                {weekdays.map((day) => (
                    <View style={styles.weekday} key={day}>
                        <Text style={styles.weekdayText}>{day}</Text>
                    </View>
                ))}
            </View>

            <FlatList
                data={getCalendarDays()}
                renderItem={renderDay}
                keyExtractor={(item) => item || Math.random().toString()}
                numColumns={7}
                style={styles.calendar}
                contentContainerStyle={styles.calendarContent}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Attendance Information</Text>
                        {selectedDate && (
                            <Text style={styles.modalText}>
                                Date: {selectedDate}{'\n'}
                                Status: {attendanceData[selectedDate]?.present ? 'Present' : 'Absent'}
                            </Text>
                        )}
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    month: {
        fontSize: 18,
        marginBottom: 20,
    },
    monthNavigation: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    navButton: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    navButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    weekdaysContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    weekday: {
        width: Dimensions.get('window').width / 7,
        alignItems: 'center',
    },
    weekdayText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    calendar: {
        flexGrow: 0,
        width: '100%',
    },
    calendarContent: {
        alignItems: 'center',
    },
    day: {
        width: Dimensions.get('window').width / 7,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
    },
    emptyDay: {
        width: Dimensions.get('window').width / 7,
        height: 70,
    },
    present: {
        backgroundColor: '#E8F5E9',
    },
    absent: {
        backgroundColor: '#FFEBEE',
    },
    dayText: {
        fontSize: 20,
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default AttendanceScreen;
