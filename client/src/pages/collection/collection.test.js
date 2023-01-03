import React from 'react';
import Router from 'react-router-dom';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import CollectionPage from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

describe('CollectionPage component', () => {
    let wrapper;
    let useParams;
    let useSelector;

    const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const mockCollection = {
        title: 'Test',
        items: mockItems
    };
    const mockCollectionId = {
        collectionId: 1
    };


    beforeEach(() => {
        useParams = jest.spyOn(Router, 'useParams').mockReturnValue(mockCollectionId);
        useSelector = jest.spyOn(redux, 'useSelector').mockReturnValue(mockCollection);

        wrapper = shallow(<CollectionPage />);
    });

    afterEach(() => {
        useParams.mockClear();
        useSelector.mockClear();
    });

    test('should render the CollectionPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render the same number of CollectionItems as mockItems', () => {
        expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
    });
});