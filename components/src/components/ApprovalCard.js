import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <dvv className="content">{props.children}</dvv>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Cancel</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;