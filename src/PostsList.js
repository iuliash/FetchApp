import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getAllPost} from './actions'
import Post from './Post'


class PostsList extends React.Component {

    async componentDidMount(){
        const url ='http://demo.wp-api.org/wp-json/wp/v2/posts/';
        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts);
        let titlePosts = [];
        posts.forEach(item => {titlePosts.push({id: item.id, title: item.title.rendered})});
        this.props._getAllPost({posts: titlePosts})
    }
    
    render(){
        return(
            <div>
                {this.props._posts.map(item => (
                    <Post 
                        post = {item}
                    />
                ))}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      _posts: state.AllPosts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        _getAllPost: getAllPost
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);