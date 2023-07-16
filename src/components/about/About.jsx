
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://th.bing.com/th/id/R.752f007078366cb7bab17f19e5c105ee?rik=SCVQWJtph9OfYg&riu=http%3a%2f%2fingenioushubs.com%2fTravel%2fdemo%2fimages%2fblog-banner.jpg&ehk=g%2bGuv75defEs%2bavZwphe%2bLySm%2bpP9oNaQ0Reuv2%2fTi8%3d&risl=&pid=ImgRaw&r=0);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Meet Babli!</Typography>
                <Text variant="h5">Hey there stranger, welcome! My name is Babli Murmu, and I’m the founder of this Blog Website.
<br />
 I'm currently a pre-final year student pursuing my B.Tech degree in Computer Science and Technology from National Institute of Technology.
                   
                    
                </Text>
                <Text variant="h5">
                If you are interested, you can view some of my some of the projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Babli2301" color="inherit" target="_blank">
                            <GitHub />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="bablimurmu00@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;