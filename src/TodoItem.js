import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {MEDIA_QUERY_MD ,MEDIA_QUERY_LG} from './constants/style';

// const titleStyle = {
//   color: 'red',
//   textAlign: 'center'
// }

const TitleWrapper = styled.h1`
display: flex;
color: blue;

&:hover {
  color: red;
}

span {
  color: yellow
}

`

function Title({size}) {
  //css inline style的寫法
  // return (
  //   <h1 style={titleStyle}>Hello</h1>
  // )

  //css 一般來說會這樣寫 ,但偽元素 ,hover都不行
  return ( 
    <TitleWrapper>Hello<span>yo</span></TitleWrapper>
  )
}
const Description = styled.p`
color: red;
padding: 20px;
border: 1px solid black;
`

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 8px 16px;
  border: 1px solid black; 
  & + & {
    margin-top : 10px;
  }
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.red_300};//引入theme的props
  font-size: 12px;

  ${props => props.size === 'XL' && `
    font-size: 20px;
  `}
`

const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: black;
  font-size: 20px;
  &:hover {
    color: red;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 12px;
  }

  // button 之後的button
  & + & { 
    margin-left: 4px;
  }
`

const RedButton = styled(Button)`
  color: red;
`

export default function TodoItem ({ className, size, todo, handleDelete}) {
  return (
    <TodoItemWrapper className={className}>
      <TodoContent size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button>已完成</Button>
        <RedButton onClick={() => {handleDelete(todo.id)}}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}

