import React, { useState } from "react";

const ChildComponent = React.memo(({ childState }) => {
    console.log("child comp rerender");
    return (
        <div className="child-box">
            <p>childState: {childState}</p>
        </div>
    );
});

const ReactMemo = () => {
    const [childState, setChildState] = useState("true");
    const [parentState, setParentState] = useState("true");

    return (
        <div className="parent-box">
            <div className="state-control">
                <p>parentState: {parentState}</p>
                <button onClick={() => setParentState(parentState === "true" ? "false" : "true")}>
                    change parent
                </button>
                <button onClick={() => setChildState(childState === "true" ? "false" : "true")}>
                    change child
                </button>
            </div>
            <ChildComponent childState={childState} />
        </div>
    );
};

export default ReactMemo;
