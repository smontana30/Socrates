import React, {useEffect, useRef} from 'react';
import { Row } from 'react-bootstrap';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';
import { ArrowLeftSquareFill, ChatLeftDotsFill, PeopleFill, } from 'react-bootstrap-icons';
import * as d3 from "d3";

// import ForceGraph2D from 'react-force-graph-2d';

function ConvNetwork(props) {
    const {
        numberOfUsers,
        numberOfTweets,
    } = props.data

    const fgRef = useRef();

    useEffect(() => {
		fgRef.current.d3Force('link', d3.forceLink().id(function(d, i) { return i; }).distance(150).strength(.1));
		// fgRef.current.d3Force("center", d3.forceCenter(width / 2, height / 2));
	})

    return (
        <div style = {{ display: "scroll" }}>
            <div style = {{display: "flex", position: "relative", zIndex: 2}}>
                <div onClick = {() => props.onPress(null)}>
                    <div style= {{display: "flex", textAlign: "left", paddingLeft:15, paddingTop: 10}}>
                        <ArrowLeftSquareFill size= {35}/>
                    </div>
                </div>
                
                <div style= {{flex: 1, paddingTop: 10, fontSize: 30, textAlign:"right"}}>
                    Join the conversation on Twitter!
                </div>
                <div style= {{flex:0.2, paddingTop: 10, fontSize: 30, display: "flex", justifyContent: "space-around"}}>
                    {numberOfTweets}
                    <ChatLeftDotsFill size = {35}/>
                    {numberOfUsers}
                    <PeopleFill size = {35}/>
                </div>
            </div>
            <div style = {{position: "absolute"}}>
            <ForceGraph2D
            ref={fgRef}
            enableZoomPanInteraction = {false}
                graphData={{ nodes: [ 
                    { 
                    "id": "id1",
                    "name": "SocratesBot",
                    "tweet": "What's been your happiest memory this past year?",
                    "val": 1,
                    "fx": 0,
                    "fy": 0
                    },
                    { 
                    "id": "id2",
                    "tweet": "saudhiafgiagwfiugwfiygaiwyfguyagfiwyfgffaw",
                    "name": "@csepulveda3211",
                    "val": 10 
                    },
                    { 
                    "id": "id3",
                    "tweet": "saudhiafgiagwfiugwfiygaiwyfguyagfiwyfgffaw",
                    "name": "@whitneystuckey",
                    "val": 1 
                    },
                    { 
                    "id": "id4",
                        "tweet": "saudhiafgiagwfiugwfiygaiwyfguyagfiwyfgffaw",
                        "name": "@smontana30",
                        "val": 10 
                    },
                    { 
                    "id": "id5",
                    "tweet": "saudhiafgiagwfiugwfiygaiwyfguyagfiwyfgffaw",
                    "name": "@StevenP737",
                    "val": 1 
                    }
                ],
                links: [
                    {
                        source: "id2",
                        target: "id1"
                    },
                    {
                        source: "id3",
                        target: "id1"
                    },
                    {
                        source: "id4",
                        target: "id1"
                    },
                    {
                        source: "id5",
                        target: "id1"
                    }
                ] }}
                    linkVisibility = {false}
                nodeAutoColorBy="group"
                nodeCanvasObject={(node, ctx, globalScale) => {
                    // console.log(ctx)

                    
                    function wrapText(context, text, x, y, maxWidth, lineHeight) {
                        var words = text.split(' ');
                        var line = '';
                
                        for(var n = 0; n < words.length; n++) {
                        var testLine = line + words[n] + ' ';
                        var metrics = context.measureText(testLine);
                        var testWidth = metrics.width;
                        if (testWidth > maxWidth && n > 0) {
                            context.fillText(line, x, y);
                            line = words[n] + ' ';
                            y += lineHeight;
                        }
                        else {
                            line = testLine;
                        }
                        }
                        context.fillText(line, x, y);
                    }
                    
                    const fontSize = 12/globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = 100;
                    const bckgDimensions = [textWidth + 10, 10 * fontSize].map(n => n + fontSize * 0.2); // some padding

                    ctx.fillStyle = '#EFEFEF';
                    ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

                    ctx.fillStyle = "black";
                    // ctx.fillText(label, node.x, node.y);

                    let img = document.createElement("img")

                    img.src = "https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png"
                    // ctx.drawImage(img, node.x / 2, node.y , 10, 10);
                    
                    ctx.fillText(node.name, node.x - bckgDimensions[0] / 2.2, node.y - bckgDimensions[1] / 3)


                    wrapText(ctx, node.tweet, node.x - bckgDimensions[0] / 2.2, node.y - bckgDimensions[1] / 15, textWidth, 5)
                }}
                />
            </div>
            </div>
    )
}

export default ConvNetwork