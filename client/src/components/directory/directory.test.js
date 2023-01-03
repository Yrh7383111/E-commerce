import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import Directory from './directory.component';
import MenuItem from '../menu-item/menu-item.component';


describe('Directory component', () => {
    let wrapper;
    let useSelector;

    const mockSections = [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'shop/hats'
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'shop/jackets'
        }
    ];


    beforeEach(() => {
        useSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(mockSections);
        wrapper = shallow(<Directory />);
    });

    afterEach(() => {
       useSelector.mockClear();
    });

    test('should render Directory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render the same number of MenuItems as mockSections', () => {
        expect(wrapper.find(MenuItem).length).toBe(mockSections.length);
    });
});
