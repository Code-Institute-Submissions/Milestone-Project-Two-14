<h1>Manual Testing</h1>

<h2>Testing each of the five game choices.</h2>

<p>While playing the game, every time the User presses Rock, Paper, Scissors, Lizard or Spock it should result in one of five outcomes, two should be User wins, two should be Computer wins and one should result in a draw.</p>

<ul>
    <li>
        <h3>User picks Rock</h3>
        <p>The following rules should apply in the User picks Rock scenario.</p>
        <ol>
            <li>User picks Rock, Computer picks Rock - <span style="color:red">Results</span> = Draw <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Rock, Computer picks Paper - Rock covered by Paper - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li> 
            <li>User picks Rock, Computer picks Scissors - Rock smashes Scissors - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Rock, Computer picks Lizard - Rock crushes Lizard - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Rock, Computer picks Spock - Rock vaporized by Spock - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
        </ol>
    </li>
    <li><h3>User picks Paper</h3>
        <p>The following rules should apply in the User picks Paper scenario.</p>
        <ol>
            <li>User picks Paper, Computer picks Rock - Paper covers Rock -  <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Paper, Computer picks Paper - <span style="color:red">Results</span> = Draw <span style="color:green"> Confirmed &#9989</span>
            </li> 
            <li>User picks Paper, Computer picks Scissors - Paper cut by Scissors - <span style="color:red">Results</span> = Computer  wins<span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Paper, Computer picks Lizard - Paper eaten by Lizard - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Paper, Computer picks Spock - Paper disproves Spock - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
        </ol></li>
    <li><h3>User picks Scissors</h3>
        <p>The following rules should apply in the User picks Scissors scenario.</p>
        <ol>
            <li>User picks Scissors, Computer picks Rock - Scissors smashed by Rock - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Scissors, Computer picks Paper - Scissors cuts Paper - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li> 
            <li>User picks Scissors, Computer picks Scissors - <span style="color:red">Results</span> = Draw <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Scissors, Computer picks Lizard - Scissors decapitates Lizard - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Scissors, Computer picks Spock - Scissors smashed by Spock - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
        </ol></li>
    <li><h3>User picks Lizard</h3>
        <p>The following rules should apply in the User picks Lizard scenario.</p>
        <ol>
            <li>User picks Lizard, Computer picks Rock - Lizard crushed by Rock <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Lizard, Computer picks Paper - Lizard eats Paper - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li> 
            <li>User picks Lizard, Computer picks Scissors - Lizard decapitates by Scissors - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Lizard, Computer picks Lizard - <span style="color:red">Results</span> = Draw <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Lizard, Computer picks Spock - Lizard poisons Spock - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
        </ol></li>
    <li><h3>User picks Spock</h3>
        <p>The following rules should apply in the User picks Spock scenario.</p>
        <ol>
            <li>User picks Spock, Computer picks Rock - Spock vaporizes Rock <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Spock, Computer picks Paper - Spock disproved by Paper - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li> 
            <li>User picks Spock, Computer picks Scissors - Spock smashes Scissors - <span style="color:red">Results</span> = User wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Spock, Computer picks Lizard - Spock poised by Lizard - <span style="color:red">Results</span> = Computer wins <span style="color:green"> Confirmed &#9989</span>
            </li>
            <li>User picks Spock, Computer picks Spock - <span style="color:red">Results</span> = Draw <span style="color:green"> Confirmed &#9989</span>
            </li>
        </ol></li>
</ul>
 
<h2>Testing score keeping</h2>

<p>While playing the game every time a win, lose or draw condition is met the scoreboard should be updated.</p>

<ul>
    <li>
    <h3>User wins.</h3>
    <p>When the User wins, var win in game.js should be updated. <span style="color:green"> Confirmed &#9989</span></p>
    <p>Element with the ID win-score in index.html should be updated. <span style="color:green"> Confirmed &#9989</span></p>
    <p>The element with the ID message-area in index.html should be updated with one of the following messages.</p>
        <ol>
            <li>You Won! Hal9000 chose Scissors. Rock smashes Scissors! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Lizard. Rock crushes Lizard! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Rock. Rock covered by Paper! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Spock. Paper disproves Spock! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Paper. Scissors cuts Paper! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Lizard. Scissors decapitates Lizard! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Paper. Lizard eats Paper! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Spock. Lizard poisons Spock! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Rock. Spock vaporizes Rock! <span style="color:green"> Confirmed &#9989</span></li>
            <li>You Won! Hal9000 chose Scissors. Spock smashes Scissors! <span style="color:green"> Confirmed &#9989</span></li>
        </ol>
    </li>
</ul>

<ul>
    <li>
    <h3>User loses.</h3>
    <p>When the User loses, var lose in game.js should be updated. <span style="color:green"> Confirmed &#9989</span></p>
    <p>Element with the ID lose-score in index.html should be updated. <span style="color:green"> Confirmed &#9989</span></p>
    <p>The element with the ID message-area in index.html should be updated with one of the following messages.</p>
        <ol>
            <li>You Lost! Hal9000 chose Paper. Rock covered by Paper!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Spock. Rock vaporized by Spock!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Scissors. Paper cut by Scissors!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Lizard. Paper eaten by Lizard!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Rock. Scissors smashed by Rock!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Spock. Scissors smashed by Spock!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Rock. Lizard crushed by Rock!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Scissors. Lizard decapitated by Scissors!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Paper. pock disproved by Paper!<span style="color:green"> Confirmed &#9989</span></li>
            <li>You Lost! Hal9000 chose Lizard. Spock poised by Lizard!<span style="color:green"> Confirmed &#9989</span></li>
        </ol>
    </li>
</ul>

<ul>
    <li>
    <h3>User and Computer Draws.</h3>
    <p>When a Draw condition is met var draw in game.js should be updated. <span style="color:green"> Confirmed &#9989</span></p>
    <p>Element with the ID draw-score in index.html should be updated. <span style="color:green"> Confirmed &#9989</span></p>
    <p>The element with the ID message-area in index.html should be updated with one of the following messages.</p>
        <ol>
            <li>Draw! Hal9000 chose Rock too! <span style="color:green"> Confirmed &#9989</span></li>
            <li>Draw! Hal9000 chose paper too! <span style="color:green"> Confirmed &#9989</span></li>
            <li>Draw! Hal9000 chose Scissors too! <span style="color:green"> Confirmed &#9989</span></li>
            <li>Draw! Hal9000 chose Lizard too! <span style="color:green"> Confirmed &#9989</span></li>
            <li>Draw! Hal9000 chose Spock too! <span style="color:green"> Confirmed &#9989</span></li>
        </ol>
    </li>
</ul>

<h2>Validating index.html with <a href="https://jigsaw.w3.org/css-validator/" rel="nofollow">W3C Markup Validation Service</a></h2>

<P>Results</P>


<ol>
    <li>
        <p>
            <strong>Error</strong>: <span>A <code>meta</code> element with an <code>http-equiv</code> attribute whose value is <code>X-UA-Compatible</code> must have a <code>content</code> attribute with the value <code>IE=edge</code>.</span>
        </p>
        <p>
            <a href="#l6c57">From line <span class="first-line">6</span>, column <span class="first-col">5</span>; to line <span class="last-line">6</span>, column <span class="last-col">57</span></a>
        </p>
        <p>
            <code>ort"&gt;<span class="lf" title="Line break">↩</span>    <b>&lt;meta content="ie-edge" http-equiv="X-UA-Compatible"&gt;</b><span class="lf" title="Line break">↩</span><span class="lf" title="Line break">↩</span>   </code>
        </p>
    </li>
</ol>

<p>Solution unknown: "content="ie-edge" already in meta element and changing "content="ie-edge" to "content="IE-edge" has the same results.</p>


<h2>Validating sytle.css with <a href="https://jigsaw.w3.org/css-validator/" rel="nofollow"> W3C CSS Validation Service</a></h2>

<p>Results</p>

<div id="errors">
    <h3>Sorry! We found the following errors (4)</h3>
    <div class="error-section-all">
        <div class="error-section">
	        <h4>URI : TextArea</h4>
		    <table>
                <tbody>
                    <tr class="error">
                        <td class="linenumber" title="Line 32">32</td>
                        <td class="codeContext"> #score-container </td>
                        <td class="parse-error">Value Error : padding only <code>0</code> can be a <code>unit</code>. You must put a unit after your number : <span class="exp">10</span></td>
                    </tr>
                    <tr class="error">
                        <td class="linenumber" title="Line 52">52</td>
                        <td class="codeContext"> ul </td>
                        <td class="parse-error">Property <code>padding-inline-start</code> doesn't exist : <span class="exp">0</span></td>
                    </tr>
                    <tr class="error">
                        <td class="linenumber" title="Line 107">107</td>
                        <td class="codeContext"> .score-board-area-result </td>
                        <td class="parse-error">Value Error : padding <code>auto</code> is not a <code>padding</code> value : <span class="exp">auto</span></td>
                    </tr>
                    <tr class="error">
                        <td class="linenumber" title="Line 122">122</td>
                        <td class="codeContext"> #game-button-group </td>
                        <td class="parse-error">Property <code>padding-inline-start</code> doesn't exist : <span class="exp">0</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<h3>Solutions</h3>

<ol>
<li><p>Changed "padding : 10" in "#score-container" to "padding : 10px"</p></li>
<li><p>Changed "padding-inline-start" in "style.css : ul" with "padding"</p></li>
<li><p>Removed "padding: auto;" from ".score-board-area-result" in "style.css"</p></li>
<li><p>Removed "padding-inline-start: 0px;" from "#game-button-group" in "style.css"</p></li>
</ol>

<h2>Validating game.js with <a href="https://jshint.com/" rel="nofollow">jshint</a></h2>

<p>Results</p>

<table data-type="errors" class="report">
    <tr>
        <td class="header" colspan="2">Two warnings</td>
    </tr>
    <tr>
        <td class="lineno">285</td>
        <td>'template literal syntax' is only available in ES6 (use 'esversion: 6').</td>
    </tr>
    <tr>
        <td class="lineno">291</td>
        <td>'template literal syntax' is only available in ES6 (use 'esversion: 6').</td>
    </tr>
</table>