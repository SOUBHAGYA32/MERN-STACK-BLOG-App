import React from 'react'
import articles from './articleContent';
import articleContent from './articleContent';

import Article from '../Components/Articles';

const ArticleList = () => {
    return (
        <>
            <h1 className="sm:text-4xl mb-6 text-2xl font-bold mt-6 text-gray-900">Article List</h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Article articles={articleContent}/>
                </div>
            </div>
        </>
    )
}

export default ArticleList
