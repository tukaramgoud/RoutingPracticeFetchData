import {Component} from 'react'
import {Circles} from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

// const blogsData = [
//   {
//     id: 1,
//     title: 'Blog 1',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
//   {
//     id: 2,
//     title: 'Blog 2',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
// ]

class BlogsList extends Component {
  state = {usersList: [], isLoading: true}

  componentDidMount = () => {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const userData = await fetch('https://apis.ccbp.in/blogs')
    const response = await userData.json()
    // console.log(response)

    const newUserData = response.map(eachUser => ({
      author: eachUser.author,
      imageUrl: eachUser.image_url,
      avatarUrl: eachUser.avatar_url,
      id: eachUser.id,
      title: eachUser.title,
      topic: eachUser.topic,
    }))
    // console.log(newUserData)

    this.setState({usersList: newUserData, isLoading: false})
  }

  render() {
    const {usersList, isLoading} = this.state
    console.log(isLoading)
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Circles
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            // visible={true}
          />
        ) : (
          usersList.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
