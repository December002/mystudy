import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let[title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setLike ] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [aTitle, setAtitle] = useState(0)
 
 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
    
    <button onClick={()=>{
      let copy=[...title]
      copy.sort();
      setTitle(copy)
    }}>가나다순 정렬</button>

      <button onClick={()=>{
        //...은 괄호를 벗겨주는 역할 독립적인 array를 만들어주는 형식 
        let copy=[...title];
        copy[0]="여자코트 추천";
        setTitle(copy)
      }}>글 수정</button>

      {/* <div className='list'>
        <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>👍</span>
        {like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          //!modal 을 사용해서  클릭시 true false 구분
          setModal(!modal)
        }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function(a , i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true); setAtitle(i)}}>
                {title[i]}
                <span onClick={()=>{
                  let copy = [...like]
                  copy[i]=copy[i]+1
                  setLike(copy)
                }}>👍</span>{like[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      
      {
        modal == true ? <Modal title={title} setTitle={setTitle} aTitle={aTitle}/> : null
      }

    </div>  
      
  );
}




function Modal(props){
  

  return(
    <div className='modal'>
        <h4>{props.title[props.aTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{}}>글 수정</button>
      </div>
  )
}



export default App;
