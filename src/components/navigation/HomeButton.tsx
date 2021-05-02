import { withRouter } from "react-router-dom";



const HomeButton = withRouter(({ history }) => (
    <button
    type='button'
    onClick={() => { history.push('/new-location') }}>
        Click Me!
    </button>
));

export default HomeButton;