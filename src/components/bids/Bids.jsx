import React from 'react'
import './bids.css'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import Game from '../../assets/Game.gif'
import readingbook from '../../assets/readingbook.gif'
import audiobook from '../../assets/audiobook.gif'
import News from '../../assets/News.gif'
import Contest from '../../assets/Contest.gif'
import Crypto from '../../assets/Crypto.gif'
import Music from '../../assets/Music.gif'
import Radio from '../../assets/Radio.gif'
import Memes from '../../assets/Memes.gif'
import chatbot from '../../assets/chatbot.gif'
import Podcast from '../../assets/Podcast.gif'
import Anonymous from '../../assets/Anonymous.gif'

// import { Link } from 'react-router-dom';

const Bids = ({title}) => {
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>Club Features</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Game} className="image-responsive" alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Games</p>
              <div className='overlay'>Play Multiple Domain Games</div>
              {/* </Link> */}
              </div>
              {/* <div className="bids-card-bottom">
                <p>1.25 <span>ETH</span></p>
                <p> <AiFillHeart /> 92</p>
              </div> */}
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={readingbook} className="image-responsive" alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Books</p>
              <div className='overlay'>Get Some stuff and Read the Books</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={audiobook} className="image-responsive" alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Audio Books</p>
              <div className='overlay'>Very lazy to read the books,listen the books</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={News} className="image-responsive" alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">News</p>
              <div className='overlay'>Daily Updated Real News</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Contest} className="image-responsive" alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Contests</p>
              <div className='overlay'>On Everything Participate and Win Rewards</div>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Crypto} className="image-responsive" alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">NFT'S</p>
              <div className='overlay'>Check Nfts and Crypto Things</div>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Music} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Music</p>
              <div className='overlay'>Listen to Music Freely, no Ads</div>
              {/* </Link> */}
              </div>
           
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Radio} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Radio</p>
              <div className='overlay'>Listen to Multiple station Radios</div>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={chatbot} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Chatbot</p>
              <div className='overlay'>Lucy Chat bot, which will entertain with voice and talks in chat</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Memes} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Memes</p>
              <div className='overlay'>Explore all memes</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Podcast} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Podcasts</p>
              <div className='overlay'>Listen to Podcasts All over the World</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Anonymous} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Anonymous</p>
              <div className='overlay'>Anyone can Securely post anything, as truth as hard,as Anonymous</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Bids
