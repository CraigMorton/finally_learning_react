import React from 'react'
import ReactDOM from 'react-dom'

const USER_DATA = {
  name: "Chipper Dipper",
  username: "chipper",
  image: "https://i.ytimg.com/vi/XvUqB-mgLpA/hqdefault.jpg"
}

const ProfilePic = ({
  imageUrl
}) => (
  <img src={imageUrl} />
)

const ProfileLink = ({
  username
}) => (
  <div>
    <a href={'https://www.github.com/' + username}>
      {username}
    </a>
  </div>
)

const ProfileName = ({
  name
}) => (
  <div>{name}</div>
)

const Avatar = ({
  user
}) => (
  <div>
    <ProfilePic imageUrl={user.image} />
    <ProfileName name={user.name} />
    <ProfileLink username={user.username} />
  </div>
)

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'))
