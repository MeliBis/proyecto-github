import {useState, useEffect} from 'react'
import styled from 'styled-components'
import props from './Profile-data'
import Button from './Button'
import Icon from '../icon'

const ProfileStyled = styled.div`
  grid-area: profile;

  .avatar{
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name{
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: auto.5rem;
  }
  .userName{
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  .info{
    color: var(--gray-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }
  .buttons{
    display: flex;
    gap: 1.5rem;
    margin-block-end: 1.5rem;
  }
`


function Profile  ()  {
  const {name,login,avatar_url,bio,followers,following,location,twitter_username,blog} = props
  const [coolName, setCoolName]= useState(name)
  useEffect(()=>{
    setTimeout(()=>{
      setCoolName(`Melissa Barrios ${new Date().toString()}`)
    },1000)
  },[])

  return (
    <ProfileStyled>
    
    
      <img src={avatar_url} className='avatar' width={278} height={278} alt="Meli" />
      <p className="name">{coolName}</p>
      <p className='userName'>{login}</p>
      <div className="buttons">
        <Button
          text="follow"  
          link="#" 
         /*  icon={  <Icon
              name="user"
              size={24}
              color= "pink"
              />} */
        />
        <Button
        text="Sponsor"
        icon={  <Icon
        name="heart"
          size={24}
          color= "var(--pink)"
          />}
        />
      </div>
      <p className="bio info">
       {bio}
      </p>
      <p className="followers info">
        ° {followers} <span>followers</span> <span>°</span> {following} <span>following</span>
      </p>
  {/*     <p className="stars info">
        ° 80 estrellas
      </p> */}
      <p className="location info">
        {location}
      </p>
      <a className='name info' href="https://melibarrios.com" target='blank' rel='noreferrer'>{blog}</a>
      <a className='userName info' href="https://twitter.com" target='blank' rel='noreferrer'>{twitter_username}</a>
      </ProfileStyled>
  )
}

export default Profile