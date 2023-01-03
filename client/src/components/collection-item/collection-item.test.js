import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import CollectionItem from './collection-item.component';


describe('CollectionItem component', () => {
    let wrapper;
    let useDispatch;

    let mockAddItem;
    const imageUrl = 'www.testImage.com';
    const mockName = 'black hat';
    const mockPrice = 10;

    beforeEach(() => {
        const mockProps = {
            item: {
                imageUrl: imageUrl,
                price: mockPrice,
                name: mockName
            }
        };
        mockAddItem = jest.fn();

        useDispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(mockAddItem);
        wrapper = shallow(<CollectionItem {...mockProps} />);
    });

    afterEach(() => {
       useDispatch.mockClear();
    });

    test('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call addItem when AddToCartContainer clicked', () => {
        wrapper.find('AddToCartContainer').simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });

    test('should render imageUrl as a prop on ImageContainer', () => {
        expect(wrapper.find('ImageContainer').prop('imageUrl')).toBe(imageUrl);
    });

    test('should render name prop in NameContainer', () => {
        expect(wrapper.find('NameContainer').text()).toBe(mockName);
    });

    test('should render price prop in PriceContainer', () => {
        expect(parseInt(wrapper.find('PriceContainer').text())).toBe(mockPrice);
    });
});
