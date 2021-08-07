import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';


const CollectionPage = ({ collection }) => {
  // useEffect(()=> {
  //   console.log("I am subscribing");
  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot));
    
  //   Cleanup function that does same thing the componentWillUnmount does
  //   return () =>{
  //     console.log("I am unsubscribing");
  //     unsubscribeFromCollections();
  //   };
  // }, []);
  const { title, items } = collection;
  console.log({title});
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items && items.map(item => (
          <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
