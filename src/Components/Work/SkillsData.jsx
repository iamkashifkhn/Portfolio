import { FaHtml5, FaUser}  from '../../../node_modules/react-icons/fa';
import {DiCss3, DiReact, DiWordpress} from '../../../node_modules/react-icons/di';
import {IoLogoJavascript} from '../../../node_modules/react-icons/io';


const SkillsData = [
    {
        icon : <FaHtml5/>,
        title: "HTML5",
        details: "I Design beautiful pages using HTML5 for my clients"
    },
    {
        icon : <DiCss3/>,
        title: "CSS3",
        details: "I Style my pages using modern CSS like SASS and Tailwind to make it responsive"
    },
    {
        icon : <IoLogoJavascript/>,
        title: "JavaScript",
        details: "I use ES6 to make my websites interactive and Client side validations too"
    },
    {
        icon : <DiReact/>,
        title: "React.Js",
        details: "I Use React for my projects to make my components resuable"
    },
    {
        icon : <FaUser/>,
        title: "UX/UI",
        details: "To make my websites user friendly i design my own UI using AdobeXD"
    },
    {
        icon : <DiWordpress/>,
        title: "WordPress",
        details: "I have handled various projects using WordPress too"
    },
]
export default SkillsData;