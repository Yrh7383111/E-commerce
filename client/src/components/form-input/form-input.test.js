import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './form-input.component';


describe('FormInput component', () => {
    let wrapper;
    let mockHandleChange;


    beforeEach(() => {
        mockHandleChange = jest.fn();
        const mockProps = {
            handleChange: mockHandleChange,
            value: 'test@gmail.com',
            label: 'email'
        };

        wrapper = shallow(<FormInput {...mockProps} />);
    });

    test('should render FormInput component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call handleChange method when input changes', () => {
        wrapper.find('FormInputContainer').simulate('change');
        expect(mockHandleChange).toHaveBeenCalled();
    });

    test('should render FormInputLabelContainer if there is a label', () => {
        expect(wrapper.exists('FormInputLabelContainer')).toBe(true);
    });

    test('should not render FormInputLabelContainer if there is no label', () => {
        const mockNewProps = {
            handleChange: mockHandleChange,
            value: 'test@gmail.com',
            label: ''
        };
        const newWrapper = shallow(<FormInput {...mockNewProps} />);

        expect(newWrapper.exists('FormInputLabelContainer')).toBe(false);
    });
});
