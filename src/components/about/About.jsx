import '../about/about.scss';
import Header from '../header/Header';
import picture from '../../assets/images/tatevik.jpeg';

const About = () =>{
    return(
    <> 
        <Header/>
        <div className = 'about'>
            <div className = 'picture'>
                <img src = {picture} alt = 'picture'/>
            </div>
            <div className = 'introduction'>
                <h2>About Me</h2>
                Hi, I'm Tatevik Sargsyan. I used React and Redux to make this project over a couple of months. I got my data from The Movie Database and organized the movies into categories. Each movie has a summary that can be seen when clicked on and you can search for any movie on the site. If you would like me to create something like this for you, you can reach me at <a href = "mailto: ttasargsyan@gmail.com">ttasargsyan@gmail.com</a>
            </div>
        </div>
    </>  
    )
}

export default About;