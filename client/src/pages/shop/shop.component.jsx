import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


// match - comes from App component which utilizes react-router-dom
const ShopPage = ({ match }) => {
    // Dispatch Actions to all Reducers
    const dispatch = useDispatch();


    // Called when
    // 1. The component is first mounted
    // 2. fetchCollectionsStart changes
    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);


    // Rendering
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                   component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`}
                   component={CollectionPageContainer} />
        </div>
    );
}


export default ShopPage;
