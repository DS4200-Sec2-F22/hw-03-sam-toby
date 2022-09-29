

function buttonClicked1() {
    let newText = `<h3>Marks</h3>
    <ul>
        <li>States on map = Area</li>
        <li>Total votes bar = Lines</li>
        <li>Individual electoral votes = Points</li>
    </ul>
    <h3>Channels</h3>
    <ul>
        <li>Hue</li>
        <ul>
            <li>The hue represents the attribute of the vote, which is Categorical - Identity.</li>
            <li>This is a good mapping because the hues of red and blue are easily distinguishable, and 
                readily associated with their respective political parties in the Unites States.</li>
        </ul>
        <li>Length</li>
        <ul>
            <li>The length of the relative bars on the top of the visual represent the size of the respective votes, which is Quantitative - Magnitude.</li>
            <li>This is a good mapping because the relative sizes are to scale, and represent the entire electoral college.</li>
        </ul>
    </ul>`;
    let buttonDiv = document.getElementById("req1");
    buttonDiv.innerHTML = newText; 
}

function buttonClicked2() {
    let newText =`<h3>Colormap(s)</h3>
    <ul>
        <li>Political Party</li>
        <ul>
            <li>This colormap represents the political party of the votes, which is Categorical.</li>
            <li>This is a good mapping because the two party system in America is not a continuum, 
                and the electoral votes only go to people of one of two categories. </li>
        </ul>
    </ul>` ;
    let buttonDiv = document.getElementById("req2");
    buttonDiv.innerHTML = newText; 
}

function buttonClicked3() {
    let newText = `<h3>Marks</h3>
    <ul>
        <li>Batted Balls = Points</li>
    </ul>
<h3>Channels</h3>
    <ul>
        <li>Position</li>
        <ul>
            <li>The position of the points on the visualization are both horizontal and vetical, and represent Ordinal - Identity / Magnitude.</li>
            <li>This is a good mapping because it displays the trends and relationships between the exit velocity and hit angle.</li>
        </ul>
        <li>Hue</li>
        <ul>
            <li>The hue represents whether the ball was above or below the average LWTS, which is Categorical - Identity.</li>
            <li>This is a good mapping it clearly shows the relationship of the position on the visualization to the score of the hit. 
                The trend becomes readily visible.</li>
        </ul>
        <li>Saturation</li>
        <ul>
            <li>The saturation of the points determines just how good or bad the score for the hit was, which is Quantitative - Magnitude.</li>
            <li>This is a good mapping because we see a clear relationship between the most saturated points and homeruns.</li>
        </ul>
    </ul>`;
    let buttonDiv = document.getElementById("req3");
    buttonDiv.innerHTML = newText; 
}

function buttonClicked4() {
    let newText = `<h3>Colormap(s)</h3>
    <ul>
        <li>LWTS Scores</li>
        <ul>
            <li>This colormap represents the LWTS score as compared to the average, which is Categorical.</li>
            <li>This is a particularly good mapping because the color difference shows the status of the hit as above or below average. </li>
        </ul>
    </ul>`;
    let buttonDiv = document.getElementById("req4");
    buttonDiv.innerHTML = newText; 
}