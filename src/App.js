import logo from './logo.svg';
import './index.css';
import './output.css';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';

function LeftSideButton({text, emoji}){
  if(text && emoji)
  return <button className="leftButton flex gap-5 items-center p-4 rounded-full hover:bg-zinc-900">
    <img src={emoji} className="w-7 h-7"/>
    <div className="btnText text-xl narrow:hidden">{text}</div>
  </button>
  else if(!text)
  return <button className="leftButton flex gap-5 items-center p-4 rounded-full hover:bg-zinc-900">
    <img src={emoji} className="w-7 h-7"/>
  </button>
  else
  return <button className="leftButton narrow:w-fit mt-5 bg-cyan-400 flex gap-5 items-center justify-center p-4 rounded-full hover:bg-cyan-500 w-64">
    <div className="btnText text-xl font-bold">{text}</div>
  </button>
}

function LeftSide(){
  return <div className="leftSideParent narrow3:hidden narrow:min-w-20 narrow:w-20 min-w-64 w-64">
    <div className="leftSide flex flex-col narrow:w-fit justify-between pb-2 w-64 fixed overflow-hidden h-screen">
      <div>
        <LeftSideButton emoji={require("./images/twitter-154-svgrepo-com.png")}/>
        <LeftSideButton text="Home" emoji={require("./images/home-1393-svgrepo-com.png")}/>
        <LeftSideButton text="Explore" emoji={require("./images/search-alt-2-svgrepo-com.png")}/>
        <LeftSideButton text="Notifications" emoji={require("./images/notifications-outline-svgrepo-com.png")}/>
        <LeftSideButton text="Messages" emoji={require("./images/mail-svgrepo-com.png")}/>
        <LeftSideButton text="Grok" emoji={require("./images/compass-svgrepo-com.png")}/>
        <LeftSideButton text="Lists" emoji={require("./images/list-check-svgrepo-com.png")}/>
        <LeftSideButton text="Bookmarks" emoji={require("./images/bookmark-svgrepo-com.png")}/>
        <LeftSideButton text="Communities" emoji={require("./images/people-svgrepo-com.png")}/>
        <LeftSideButton text="Premium" emoji={require("./images/twitter-154-svgrepo-com.png")}/>
        <LeftSideButton text="Verified Orgs" emoji={require("./images/thunder-svgrepo-com.png")}/>
        <LeftSideButton text="Profile" emoji={require("./images/profile-round-1342-svgrepo-com.png")}/>
        <LeftSideButton text="More" emoji={require("./images/more-svgrepo-com.png")}/>
        <LeftSideButton text="Post"/>
      </div>
      <div className="leftSideProfile w-full narrow:w-fit flex items-center justify-between hover:bg-zinc-900 rounded-full p-3 cursor-pointer">
        <div className="flex gap-3">
          <img src={require("./images/IMG_20231230_195611.jpg")} className="pfp rounded-full object-cover"/>
          <div className="narrow:hidden">
            <h1 className="font-bold">Teo Kocev</h1>
            <h1 className="text-sm text-slate-500">@teokocev</h1>
          </div>
        </div>
        <div className="flex gap-1 narrow:hidden">
          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
}

function Tabs(){
  return <div className="tabs narrow3:w-screen narrow2:w-518 flex justify-around fixed bg-black/60 backdrop-blur-lg">
  <div className="forYou flex flex-col items-center gap-3 w-1/2 pt-4 text-center cursor-pointer text-lg font-bold">For You</div>
  <div className="following flex flex-col items-center gap-3 w-1/2 py-4 text-center cursor-pointer text-lg text-slate-500">Following</div>
</div>
}

function PostSec(){
  return <div className="postSection p-5 flex flex-col gap-4 w-full">
    <div className="flex gap-4 items-center">
      <img src={require("./images/IMG_20231230_195611.jpg")} className="pfp object-cover rounded-full"/>
      <input type="text" placeholder="What is happening?" className="bg-transparent outline-none text-xl text-white"></input>
    </div>
    <div className="flex w-full justify-between">
      <div className="flex text-lg ml-14">
        <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-900">
          <img src={require("./images/image-square-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-900">
          <img src={require("./images/gif-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-900">
          <img src={require("./images/list-ol-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-900">
          <img src={require("./images/smile-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-900">
          <img src={require("./images/location-pin-alt-1-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
      </div>
      <button className="font-bold hover:bg-cyan-500 bg-cyan-400 rounded-full px-5">Post</button>
    </div>
  </div>
}

function ShowPosts({numPosts}){
  return <div className="showPosts cursor-pointer hover:bg-zinc-900 w-full flex justify-center py-4">
    <h1 className="text-cyan-500">Show {numPosts} posts</h1>
  </div>
}

function Post({stats, pfp, name, username, date, title, isVerified, contentFile}){
  let verified = isVerified ? <img src={require("./images/verified-check-svgrepo-com.png")} className="min-w-4 min-h-4 w-4 h-4"/> : null;

  for(let i in stats){
    if(stats[i] >= 1000000)
      stats[i] = parseInt(stats[i] / 1000000).toString() + "M";
    else if(stats[i] >= 1000)
      stats[i] = parseInt(stats[i] / 1000).toString() + "K";
  }
  let comments = stats.comments, likes = stats.likes, reposts = stats.reposts, views = stats.views;

  return <div className="post p-5 flex flex-col gap-3 hover:bg-white/5 cursor-pointer">
    <div className="postTitle flex justify-between w-full">
      <div className="flex gap-2">
        <img src={pfp} className="pfp cursor-pointer rounded-full object-cover"/>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <h1 className="profileName cursor-pointer font-bold">{name}</h1>
            <h1 className="verified">{verified}</h1>
            <h1 className="username text-slate-500">@{username}</h1>
            <div className="dot w-1 h-1 bg-slate-500 rounded-full"></div>
            <h1 className="postDate text-slate-500">{date.month} {date.day} {date.year}</h1>
          </div>
          <div className="title">{title}</div>
        </div>
      </div>
      <div className="dotDotDot flex items-center justify-center rounded-full gap-1 cursor-pointer min-w-7 min-h-7 w-7 h-7 hover:bg-zinc-900">
        <div className="bg-slate-500 w-1 h-1 rounded-full"></div>
        <div className="bg-slate-500 w-1 h-1 rounded-full"></div>
        <div className="bg-slate-500 w-1 h-1 rounded-full"></div>
      </div>
    </div>
    <img src={contentFile} className="cursor-pointer w-3/4 mx-auto border-2 border-zinc-900 rounded-2xl"/>
    <div className="postImpressions border-box flex w-full justify-between">
      <div className="comments group text-slate-500 cursor-pointer flex items-center gap-1 hover:text-cyan-500">
        <div className="w-7 h-7 rounded-full group-hover:bg-cyan-500/30 flex justify-center items-center">
          <img src={require("./images/comment-1-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        {comments}
      </div>
      <div className="reposts group text-slate-500 cursor-pointer flex items-center gap-1 hover:text-green-500">
        <div className="w-7 h-7 rounded-full group-hover:bg-green-500/30 flex justify-center items-center">
          <img src={require("./images/repost-round-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        {reposts}
      </div>
      <div className="likes group text-slate-500 cursor-pointer flex items-center gap-1 hover:text-red-600">
        <div className="w-7 h-7 rounded-full group-hover:bg-red-600/30 flex justify-center items-center">
          <img src={require("./images/heart-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        {likes}
      </div>
      <div className="views group text-slate-500 cursor-pointer flex items-center gap-1 hover:text-cyan-500">
        <div className="w-7 h-7 rounded-full group-hover:bg-cyan-500/30 flex justify-center items-center">
          <img src={require("./images/eye-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
        {views}
      </div>
      <div className="saveAndShare flex">
        <div className="text-slate-500 cursor-pointer flex items-center justify-center p-2 hover:bg-zinc-900 rounded-full">
          <img src={require("./images/bookmark-svgrepo-com1.png")} className="w-5 h-5"/>
        </div>
        <div className="text-slate-500 cursor-pointer flex items-center justify-center p-2 hover:bg-zinc-900 rounded-full">
          <img src={require("./images/upload-svgrepo-com.png")} className="w-5 h-5"/>
        </div>
      </div>
    </div>
  </div>
}

function Posts(){
  return <div className="posts flex flex-col w-full">
    <Post contentFile={require("./images/image1.jpg")} isVerified={true} pfp={require("./images/pfp1.jpg")} name="Elon Musk" username="elonmusk" date={{month:"July", day:28, year:2024}} stats={{views:52000000,likes:727000,reposts:112000,comments:34000}} title="It's been three years."/>
    <Post contentFile={require("./images/image2.jpg")} isVerified={true} pfp={require("./images/pfp2.jpg")} name="Bill Gates" username="BillGates" date={{month:"July", day:9, year:2024}} stats={{views:619000,likes:1700,reposts:602,comments:100}} title="With Khanmigo’s assistance, teachers at First Avenue Elementary are finding it easier to personalize learning for each individual student."/>
    <Post contentFile={require("./images/image3.jpg")} isVerified={true} pfp={require("./images/pfp1.jpg")} name="Elon Musk" username="elonmusk" date={{month:"July", day:23, year:2024}} stats={{views:954000,likes:6500,reposts:984,comments:408}} title="Dojo pics"/>
    <Post contentFile={require("./images/image4.jpg")} isVerified={true} pfp={require("./images/pfp3.jpg")} name="JavaScript Daily" username="JavaScriptDaily" date={{month:"June", day:11, year:2024}} stats={{views:21000,likes:81,reposts:9,comments:3}} title="PROTIP: Go grab npkill – https://npkill.js.org – run it on your project and do some much needed spring cleaning of your node_modules folders. npx npkill"/>
    <Post contentFile={require("./images/image5.png")} isVerified={true} pfp={require("./images/pfp4.jpg")} name="Web Design Museum" username="WebDesignMuseum" date={{month:"Sep", day:21, year:2023}} stats={{views:54000,likes:373,reposts:79,comments:9}} title="Happy 27th Birthday JScript 1.0. In September 1996, Microsoft implemented JavaScript into Internet Explorer 3.0 under the name JScript 1.0. By changing the name to JScript, Microsoft wanted to avoid potential patent litigation with Sun Microsystems. https://webdesignmuseum.org/web-design-history/jscript-1-0-1996"/>
  </div>
}

function Middle(){
  return <div className="middle narrow2:w-520 narrow2:max-w-520 narrow2:min-w-520 narrow3:w-noScBar narrow3:min-w-noScBar narrow3:max-w-noScBar narrow3:border-0">
    <Tabs/>
    <PostSec/>
    <ShowPosts numPosts={23}/>
    <Posts/>
  </div>
}

function SearchBar(){
  return <div className="search shadow-md shadow-black w-80 flex fixed top-2 items-center gap-3 bg-zinc-900
  rounded-full py-3 px-5">
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <input className="bg-transparent border-none outline-none w-full" type="text" placeholder="Search"/>
  </div>
}

function RightSec2(){
  return <div className="premium flex flex-col gap-2 items-start p-3 rounded-2xl">
    <h1 className="font-bold text-xl">Subscribe to Premium</h1>
    <p className="text-white/80">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
    <button className="font-bold px-5 py-2 bg-cyan-400 rounded-full hover:bg-cyan-500">Subscribe</button>
  </div>
}

function Trend({cat, name, numPosts}){
  if(numPosts >= 1000000)
    numPosts = parseInt(numPosts / 1000000).toString() + "M";
  else if(numPosts >= 1000)
    numPosts = parseInt(numPosts / 1000).toString() + "K";
  
  return <div className="trend cursor-pointer flex justify-between p-3 border-box w-full hover:bg-white/5">
    <div>
      <h1 className="text-white/50 text-sm">{cat} - Trending</h1>
      <h1 className="font-bold text-lg">{name}</h1>
      <h1 className="text-white/50 text-sm">{numPosts} posts</h1>
    </div>
    <div className="group flex gap-1 flex justify-center items-center rounded-full w-8 h-8 hover:bg-cyan-500/20">
      <div className="w-1 h-1 bg-white/50 group-hover:bg-cyan-400 rounded-full"></div>
      <div className="w-1 h-1 bg-white/50 group-hover:bg-cyan-400 rounded-full"></div>
      <div className="w-1 h-1 bg-white/50 group-hover:bg-cyan-400 rounded-full"></div>
    </div>
  </div>
}

function RightSec3(){
  return <div className="rightSec3 rounded-2xl flex flex-col">
    <div className="followThisAction m-2 bg-cyan-600 cursor-pointer p-4 rounded-2xl flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-lg">#Paris2024</h1>
        <h1>Follow this action</h1>
      </div>
      <div className="rounded-full bg-zinc-900/30 hover:bg-zinc-900/40 w-fit p-1">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </div>
    <div className="trendsForYou">
      <h1 className="font-bold text-xl p-3">Trends for you</h1>
      <Trend cat="Politics" name="The FBI" numPosts={314000}/>
      <Trend cat="Programming" name="C++" numPosts={116000}/>
      <Trend cat="News" name="USA" numPosts={699000}/>
      <Trend cat="Technology" name="LeetCode" numPosts={50000}/>
      <Trend cat="Events" name="Paris" numPosts={10223}/>
      <Trend cat="Sports" name="Olympics" numPosts={23000}/>
      <Trend cat="Politics" name="#WeAreNotGoingBack" numPosts={40000}/>
      <Trend cat="Technology" name="React.js" numPosts={56000}/>
    </div>
  </div>
}

function RightSide(){
  return <div className="w-80 min-w-80 min-h-full narrow1:hidden"> 
    <div className="rightSide fixed w-80 flex flex-col gap-4">
      <SearchBar/>
      <div className="flex flex-col gap-4">
      <RightSec2/>
      <RightSec3/>
      </div>
    </div>
  </div>
}

function App() {
  const[scroll, setScroll] = useState(0);
  const[prevScroll, setPrevScroll] = useState(0);
  // useGSAP(() => {
  //   gsap.from(".leftButton", {duration:.2, x:"-100%", stagger:.1});
  // })
  const[screenAlert, setScreenAlert] = useState(true)
  if(window.innerWidth <= 610 && screenAlert){
    alert("Please open on a bigger screen, the UI was not made for small screens.");
  }
  if(screenAlert){
    alert("This project was about the User Interface, so clicking on any buttons won't do anything!")
    setScreenAlert(false);
  }
  window.addEventListener("scroll", () => {
    let scrollAmount = window.scrollY - prevScroll;
    let el = document.querySelector(".rightSide");
    let style;
    let newScroll = scroll + scrollAmount;
    if(prevScroll < window.scrollY){
      if(scroll ==  el.offsetHeight - window.innerHeight + 20)
        return
      if(newScroll <= el.offsetHeight - window.innerHeight + 20)
        setScroll(scroll + scrollAmount);
      else{
        newScroll = el.offsetHeight - window.innerHeight + 20;
        setScroll(newScroll);
      }
    }
    else{
      if(scroll == 0)
        return
      if(newScroll >= 0)
        setScroll(newScroll);
      else{
        newScroll = 0;
        setScroll(0);
      }
    }
    style = "top:-" + newScroll + "px";
    document.querySelector(".rightSide").style = style;
    setPrevScroll(window.scrollY);
  })
  return <div className="container flex justify-center gap-10 overflow-hidden min-w-fit">
    <LeftSide/>
    <Middle/>
    <RightSide/>
  </div>
}

export default App;
