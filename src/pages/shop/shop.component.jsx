import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";



// match - comes from App component which utilizes react-router-dom
class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }


    // Rendering
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`}
                       component={CollectionPageContainer} />
            </div>
        );
    }
}


// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});



export default connect(null, mapDispatchToProps)(ShopPage);