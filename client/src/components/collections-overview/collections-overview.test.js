import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import CollectionsOverview from './collections-overview.component';


describe('CollectionsOverview component', () => {
    let wrapper;
    let useSelector;
    const mockCollections = [
        {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            price: 25
        },
        {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            price: 18
        }
    ];


    beforeEach(() => {
        useSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(mockCollections);
        wrapper = shallow(<CollectionsOverview />);
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    test('should render CollectionsOverview component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
