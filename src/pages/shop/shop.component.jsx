import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, transformCollectionsSnapShot } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";



// match - comes from App component which utilizes react-router-dom
class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionsReference = firestore.collection('collections');
        collectionsReference.onSnapshot(async collectionsSnapshot => {
            const transformedCollectionsSnapShot = transformCollectionsSnapShot(collectionsSnapshot);
            updateCollections(transformedCollectionsSnapShot);
        })
    }

    // Rendering
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}


// App component will do some Actions to change the cartItems property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});


export default connect(null, mapDispatchToProps()) (ShopPage);