
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg) center/55% repeat-x #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 30px;
    color: #FFFFFF;
    line-height: 1
`;


const Banner = () => {
    
    return (
        <Image>
            <Heading>Lets, Explore Raw Life Journey's!</Heading>
            
        </Image>
    )
}

export default Banner;