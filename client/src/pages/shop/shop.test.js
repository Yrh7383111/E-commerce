import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ShopPage from './shop.component';


export const createMockStore = ({ state, reducers }) => {
    const store = createStore(combineReducers(reducers), state);
    return {
        ...store,
        persistor: {
            persist: () => null
        }
    };
};

describe('ShopPage component', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        const mockReducer = (
            state = {
                isFetching: true
            },
            action
        ) => state;
        const mockState = {
            shop: {
                isFetching: true
            }
        };
        store = createMockStore({
            state: mockState,
            reducers: { shop: mockReducer }
        });
        const mockMatch = {
            path: ''
        };
        const mockProps = {
            match: mockMatch,
        };

        wrapper = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <ShopPage {...mockProps} />
                </Provider>
            </BrowserRouter>
        );
    });

    test('should render ShopPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});