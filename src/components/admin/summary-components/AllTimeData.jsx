import { styled } from "styled-components";
import {useSelector} from "react-redux";
const AllTimeData = () => {

    const {items} = useSelector(state=>state.products);

    console.log(items);

    return ( 
    <Main>
        <h3>All time</h3>
        <Info>
            <Title>Users</Title>
            <Data>200</Data>
        </Info>
        <Info>
            <Title>Products</Title>
            <Data>{items.length}</Data>
        </Info>
        <Info>
            <Title>Orders</Title>
            <Data>200</Data>
        </Info>
        <Info>
            <Title>Earnings</Title>
            <Data>$20,000</Data>
        </Info>
    </Main>
    );
}
 
export default AllTimeData;

const Main = styled.div`
    background: rgb(48, 51, 78);
    color: rgba(234, 234, 255, 0.87);
    margin-top: 1.5rem;
    border-radius: 5px;
    padding: 1rem;
    font-size: 14px;
`;

const Info = styled.div`
    display: flex;
    margin-top: 1rem;
    padding: 0.3rem;
    border-radius: 3px;
    background: rgba(38, 198, 249, 0.12);
    &:nth-child(even){
        background: rgba(102, 108, 255, 0.12);
    }
`;
const Title = styled.div`
    flex: 1
`;
const Data = styled.div`
    flex: 1;
    font-weight: 700;
`;