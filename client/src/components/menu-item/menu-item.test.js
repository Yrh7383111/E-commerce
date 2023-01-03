import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import MenuItem from "../menu-item/menu-item.component";

describe('MenuItem component', () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const linkUrl = '/hats';
    const size = 'large';
    const imageUrl = 'testimage';

    beforeEach(() => {
        mockMatch = {
            url: '/shop'
        };
        mockHistory = {
            push: jest.fn()
        };
        const mockProps = {
            title: 'hats',
            imageUrl,
            size,
            linkUrl,
            history: mockHistory,
            match: mockMatch
        };
        wrapper = shallow(
            <BrowserRouter>
                <MenuItem {...mockProps} />
            </BrowserRouter>
        );
    });

    test('should render MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test('should call history.push with the right string when MenuItemContainer clicked', () => {
    //     wrapper.find('MenuItemContainer').simulate('click');
    //     expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
    // });
    //
    // test('should pass size to MenuItemContainer as the prop size', () => {
    //     expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
    // });
    //
    // test('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    //     expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl);
    // });
});
