import React from 'react';
import { shallow } from 'enzyme';
import CollectionPreview from './collection-preview.component';


describe('CollectionPreview component', () => {
    let wrapper;

    const mockRouteName = 'hats';
    const mockHistory = {
        push: jest.fn()
    };
    const mockMatch = {
        path: '/shop'
    };
    const mockProps = {
        title: 'hats',
        items: [],
        routeName: mockRouteName,
        history: mockHistory,
        match: mockMatch,
    };

    
    beforeEach(() => {
        wrapper = shallow(<CollectionPreview {...mockProps} />);
    });

    test('should render CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test('should call history.push with the right string when TitleContainer clicked', () => {
    //     wrapper.find('TitleContainer').simulate('click');
    //     expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`);
    // });
});
