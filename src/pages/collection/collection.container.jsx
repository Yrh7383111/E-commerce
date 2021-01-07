import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';



// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

// Dispatch state to all Reducers
const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);



export default CollectionPageContainer;