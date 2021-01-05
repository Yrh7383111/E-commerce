import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, transformCollectionsSnapShot } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



// match - comes from App component which utilizes react-router-dom
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionsReference = firestore.collection('collections');

        // Update
        collectionsReference.get().then(collectionsSnapshot => {
            const transformedCollectionsSnapShot = transformCollectionsSnapShot(collectionsSnapshot);
            updateCollections(transformedCollectionsSnapShot);
            this.setState({ isLoading: false });
        });
    }


    // Rendering
    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={otherProps => (<CollectionsOverviewWithSpinner isLoading={isLoading} {...otherProps} />)}/>
                <Route path={`${match.path}/:collectionId`}
                       render={otherProps => (<CollectionPageWithSpinner isLoading={isLoading} {...otherProps} />)}/>
            </div>
        );
    }
}


// App component will do some Actions to change the cartItems property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});


export default connect(null, mapDispatchToProps)(ShopPage);