
import React from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';
import Colors from '../../styles/Colors';

export const DropDown = ({ countries,  placeHolder }) => {
    const handleMajorSelection = (selectedItem, index) => { console.log(selectedItem, index); };
    return (

        <SelectDropdown
            data={countries}
            onSelect={handleMajorSelection}
            defaultButtonText={placeHolder?placeHolder:"Select graduation year"}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item, index) => item}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => (
                <AntDesign name={isOpened ? 'up' : 'down'} color={Colors.gray} size={18} />
            )}
            dropdownIconPosition="right"
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
        />
    )
}