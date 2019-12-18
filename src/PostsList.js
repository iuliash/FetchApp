import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getAllPost, getContentVisible, changeContentVisible} from './actions'
import Post from './Post'


class PostsList extends React.Component {
    constructor(){
        super(); 
        
        this.state = {
            flag: false
        }
    }

    async componentDidMount(){
        const url ='http://demo.wp-api.org/wp-json/wp/v2/posts/';
        const response = await fetch(url);
        const posts = await response.json();
        let titlePosts = [];
        posts.forEach(item => {titlePosts.push({id: item.id, title: item.title.rendered})});
        this.props._getAllPost({posts: titlePosts});
        let visiblePosts = [];
        for (let i = 0; i < titlePosts.length; i ++) {
            visiblePosts[i] = false;
        }
        this.props._getContentVisible({isVisibleContentPost: visiblePosts});
        console.log(posts)
    }

    clickComponent = (index) => {
        let isVisible = this.props._isVisibleContent;
        if (isVisible[index]) {
            isVisible[index] = !isVisible[index];
            this.props._changeContentVisible({isVisibleContentPost: isVisible});
            this.setState({flag: false})
        } else {
            this.setState({flag: true})
            for (let i = 0; i < isVisible.length; i++) {
                if (i === index) {
                    isVisible[i] = true;
                } else {
                    isVisible[i] = false;
                }
            }
            this.props._changeContentVisible({isVisibleContentPost: isVisible});
        }
        this.forceUpdate();
    }

    
    render(){
        return(
            <div className="posts">
                <div className="title-list">
                    {this.props._posts.map(item => (
                        <h1 
                            onClick = {() => this.clickComponent(this.props._posts.indexOf(item))}
                            className={this.state.flag ? "title-list__item min" : "title-list__item"}
                        >{item.title}</h1>
                    ))}
                </div>
                {this.props._isVisibleContent.map(item => (
                    item && <Post />
                )) }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      _posts: state.AllPosts.posts, 
      _isVisibleContent: state.VisiblePosts.isVisibleContentPost
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        _getAllPost: getAllPost, 
        _getContentVisible: getContentVisible, 
        _changeContentVisible: changeContentVisible
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsList);