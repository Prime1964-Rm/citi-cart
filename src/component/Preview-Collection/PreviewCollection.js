import React from 'react'
import CollectionItem from '../Collection-item/CollectionItem'
import './PreviewCollection.scss';

function PreviewCollection({title, items, id}) {
    return (
        <div className="preview-collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx)=> idx < 4 )
                    .map(({id, ...otheritemprops})=>(
                        <CollectionItem key={id} {...otheritemprops}/>
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
