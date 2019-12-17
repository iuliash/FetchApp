import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getPost} from './actions'

class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isVisibleText: false
        }
    }
    
    /*async componentDidMount(){
        const url ='http://demo.wp-api.org/wp-json/wp/v2/posts/1';
        const response = await fetch(url);
        const post = await response.json();
        let changing_post = post;
        changing_post.title = 'The White Dog';
        changing_post.content = 'One night the woman was reading her newspaper' +  
            'just before going to sleep. She shivered and pulled the comforter' +
            'up around her as she read that a mental patient had wandered off from a nearby hospital.';
        this.props._getPost({post: changing_post});
    }*/

    clickComponent = () => {
        let {isVisibleText} = this.state;
        
        if (!isVisibleText) {
            const url ='http://demo.wp-api.org/wp-json/wp/v2/posts/';
            fetch(url+this.props.post.id)
                .then (response => {
                    if (response.status !== 200 ) {
                        throw new Error ('Error code: ', response.status);
                    }
                    response.json()
                        .then (post => {
                            let contentPost = {id: post.id, content: post.content.rendered}
                            this.props._getPost({post: contentPost});
                        })
                })
                .catch(err => {
                    console.log('Error: ', err);
                })
        }
        
        setTimeout(() => {this.setState({isVisibleText: !isVisibleText})}, 1000);
    }

    render(){
        return(
            <div onClick = {this.clickComponent}>
                <h1>{this.props.post.title}</h1>
                {this.state.isVisibleText && 
                <p dangerouslySetInnerHTML={{__html: this.props._post.content}}></p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      _post: state.Post.post
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        _getPost: getPost
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);