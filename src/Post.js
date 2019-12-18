import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getPost} from './actions'


class Post extends React.Component {

    async componentDidMount(){
        let id = this.findePost();
        const url ='http://demo.wp-api.org/wp-json/wp/v2/posts/';
        const response = await fetch(url + id);
        const post = await response.json();
        let contentPost = {id: post.id, title: post.title.rendered, content: post.content.rendered}
        this.props._getPost({post: contentPost});
    }

    findePost = () => {
        let index;
        this.props._isVisibleContent.forEach(item => {
            if (item)
                index = this.props._isVisibleContent.indexOf(item);
        })
        let post = this.props._posts[index];
        return post.id;
    }


    render(){
        return(
            <div className="content">
                <h1>{this.props._post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: this.props._post.content}}></div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        _posts: state.AllPosts.posts, 
        _post: state.Post.post,
        _isVisibleContent: state.VisiblePosts.isVisibleContentPost
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        _getPost: getPost
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);