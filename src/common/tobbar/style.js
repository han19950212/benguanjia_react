import styled from 'styled-components'

export const TobbarWrapper = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    border-top:1px solid #dcdcdc;
    height:52.5px;
    display:flex;
    .clickIconfont{
        color:red;
    }
    .link{ 
        flex:1;
        display:block;
    }
`
export const TobbarBotton = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size:12px;
    cursor:pointer;
    .iconfont{
        display:block;
        margin-bottom:5px;
    }
 
`;