import "./rightBar.scss"

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="container">
                <div className="menu">
                    <span>Notifications</span>
                    <div className="item">
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend sent you Friend Request!</li>
                    </div>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <span>Friend Suggestions</span>
                    <div className="item">
                       <li>Friend 1</li>
                       <li>Friend 2</li>
                       <li>Friend 3</li>
                       <li>Friend 4</li>
                       <li>Friend 5</li>
                    </div>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <span>Recently Read</span>
                    <div className="item">
                       <li>Book 1</li>
                       <li>Book 2</li>
                       <li>Book 3</li>
                       <li>Book 4</li>
                       <li>Book 5</li>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RightBar