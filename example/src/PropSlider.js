import React, { Component } from 'react';
import { FlatList, Dimensions, Button, View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import DatePicker from 'react-native-date-picker-x';

const { width, height } = Dimensions.get('screen')

export default class PropSlider extends Component {

    render() {
        return (
            <FlatList
                horizontal
                style={styles.list}
                data={this.data()}
                renderItem={this.renderItem}
                contentContainerStyle={styles.content}
                keyExtractor={item => item.name}
            />
        )
    }

    data = () => this.props.data.map(prop => (prop.selected = this.props.selectedProp === prop.name, prop))

    onPress = index => () => this.props.onSelect(this.props.data[index].name)

    renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={item.name}
            style={[styles.item, this.getStyle(item)]}
            onPress={this.onPress(index)}
        >
            <Text key={item.name}>{item.name}</Text>
        </TouchableOpacity>
    )

    getStyle = (item) => ({
        backgroundColor: item.selected ? '#82e584' : '#abcdef',
        width: this.props.width ? this.props.width : 100,
        height: 30,
    })

}

const styles = StyleSheet.create({
    list: {
        width,
    },
    content: {
        padding: 20,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
    },
})