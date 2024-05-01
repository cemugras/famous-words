import {useLocation} from "react-router-dom";

const Topic = () => {
    const location = useLocation();
    const category = location.state?.category;
    console.log(category);
}

export default Topic;
