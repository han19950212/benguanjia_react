import styled from 'styled-components'

export const TobbarWrapper = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    display:flex;
    border-top:1px solid #dcdcdc;
    height:52.5px;
`
export const TobbarBotton = styled.div`
    flex:1;
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