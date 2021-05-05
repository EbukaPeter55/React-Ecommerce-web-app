import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import './directory.styles.scss';

import  { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';



const Directory = ({ sections }) => (

            <div className="directory-menu">
            {
                //Object destructuring the "section" array
           sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} 
                size={size}/>  ))
            }
            </div>
            );


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);