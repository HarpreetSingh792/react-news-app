import React, { Component } from 'react'

export class Items extends Component {
    static defaultProps={
        title:"News"
    }
    render() {
        let {urlToImage,title,description,url,source,author,published}=this.props;
        return (
            <>
                
                <div className='card'>
                                <div className='card-img'>
                                    <img src={!urlToImage?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":urlToImage} alt="..." />
                                </div>
                                <div id="card-details">
                                    <h5>{title.slice(0,50)}...</h5>
                                    <p>{description?description.slice(0,60):title.slice(0,60)}...</p>
                                </div>
                                <div id='source-tag'>{source}</div>
                                <div id="source-info">
                                <p><i>author:</i> <b>{author?author:"unknown"}</b></p>
                                <p><i>published:</i> <b>{new Date().toUTCString(published)}</b></p>
                                </div>
                                <button target="_blank" onClick={()=>{
                                    window.open(url,'_blank')
                                    
                                }} id="card-btn">Read More</button>
                            </div>

            </>
        )
    }
}

export default Items