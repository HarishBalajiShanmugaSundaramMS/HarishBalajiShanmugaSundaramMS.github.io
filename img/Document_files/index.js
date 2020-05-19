var nodes = null;
var edges = null;
var network = null;

const nodeFilterSelector = document.getElementById("nodeFilterSelect");
const edgeFilters = document.getElementsByName("edgesFilter");

// Called when the Visualization API is loaded.
function draw() {
    // create people.
    // value corresponds with the age of the person
    var DIR = "../img/";
    nodes = new vis.DataSet([
        {
            id: 1,
            shape: "image",
            image: DIR + "Speech.png",
            size: 30,
            label: "Speech",
            font: { face: "sans", background: "#a71d00" },
        },
        {
            id: 2,
            shape: "image",
            image: DIR + "Auditory.png",
            size: 30,
            label: "Auditory",
            font: { color: "black", face: "sans", background: "#fdb516" },
        },
        {
            id: 3,
            shape: "image",
            image: DIR + "Visual.png",
            size: 30,
            label: "Visual",
            font: { background: "#3aa693" },
            font: { color: "black", face: "sans", background: "#3aa693" },
        },
        {
            id: 4,
            shape: "image",
            image: DIR + "Motor.png",
            label: "Motor",
            size: 30,
            font: { face: "sans", background: "#7f1b45" },
        },
        {
            id: 5,
            shape: "image",
            image: DIR + "Cognitive.png",
            label: "Cognitive",
            size: 30,
            font: { face: "sans", background: "#4a7abe" },
        },
        {
            id: 6,
            shape: "image",
            size: 40,
            image: DIR + "Accessibilities.png",
            label: "Accessibilites",
            font: { background: "#000000" },
            fixed: false,
        },
        {
            id: 7,
            group: 3,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#3aa693", border: "black" },
            label: "Color Blindness",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#3aa693",
            },
        },
        {
            id: 8,
            group: 3,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#3aa693", border: "black" },
            label: "Complete Blindness",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#3aa693",
            },
        },
        {
            id: 9,
            group: 3,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#3aa693", border: "black" },
            label: "Partial Blindness",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#3aa693",
            },
        },
        {
            id: 10,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#FFDCED", border: "black" },
            label: "Complete Mutism",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#FFDCED",
            },
        },
        {
            id: 11,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#FFDCED", border: "black" },
            label: "Selective Mutism",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#FFDCED",
            },
        },
        {
            id: 12,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#FFDCED", border: "black" },
            label: "Stammering",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#FFDCED",
            },
        },
        {
            id: 13,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#fdb516", border: "black" },
            label: "Complete Deafness",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#fdb516",
            },
        },
        {
            id: 14,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#fdb516", border: "black" },
            label: "Partial Deafness",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#fdb516",
            },
        },
        {
            id: 15,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#fdb516", border: "black" },
            label: "Low Tone Hearing Loss",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#fdb516",
            },
        },
        {
            id: 16,
            shape: "dot",
            size: 15,
            borderWidth: 1,
            color: { background: "#fdb516", border: "black" },
            label: "High Tone Hearing Loss",
            font: {
                size: 10,
                color: "black",
                face: "sans",
                background: "#fdb516",
            },
        },
        {
            id: 17,
            shape: "image",
            size: 40,
            image: DIR + "Guidelines.jpg",
            label: "Guidelines",
            font: { background: "#000000" },
            fixed: false,
        },
        {
            id: 18,
            shape: "image",
            size: 40,
            image: DIR + "Personas.png",
            label: "Personas",
            font: { background: "#000000" },
            fixed: false,
        },
        {
            id: 19,
            shape: "image",
            size: 50,
            image: DIR + "Personify.png",
            label: "Personify",
            font: { background: "#000000" },
            fixed: false,
        },
        {
            id: 20,
            shape: "image",
            size: 30,
            image: DIR + "Lisa.png",
            label: "Lisa",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 21,
            shape: "image",
            size: 30,
            image: DIR + "George.png",
            label: "George",
            font: { background: "#000000" },
            gender: "male",
        },
        {
            id: 22,
            shape: "image",
            size: 30,
            image: DIR + "Emma.png",
            label: "Emma",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 23,
            shape: "image",
            size: 30,
            image: DIR + "Rachel.png",
            label: "Rachel",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 24,
            shape: "image",
            size: 30,
            image: DIR + "Rebecca.png",
            label: "Rebecca",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 25,
            shape: "image",
            size: 30,
            image: DIR + "Adriana.png",
            label: "Adriana",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 26,
            shape: "image",
            size: 30,
            image: DIR + "Ivan.png",
            label: "Ivan",
            font: { background: "#000000" },
            gender: "male",
        },
        {
            id: 27,
            shape: "image",
            size: 30,
            image: DIR + "Oleksandra.png",
            label: "Oleksandra",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 28,
            shape: "image",
            size: 30,
            image: DIR + "Ainu.png",
            label: "Ainu",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 29,
            shape: "image",
            size: 30,
            image: DIR + "Zhang.png",
            label: "Zhang",
            font: { background: "#000000" },
            gender: "male",
        },
        {
            id: 30,
            shape: "image",
            size: 30,
            image: DIR + "Samantha.png",
            label: "Samantha",
            font: { background: "#000000" },
            gender: "female",
        },
        {
            id: 31,
            shape: "image",
            size: 30,
            image: DIR + "Alexander.png",
            label: "Alexander",
            font: { background: "#000000" },
            gender: "male",
        },
        {
            id: 32,
            shape: "image",
            size: 30,
            image: DIR + "Daniel.png",
            label: "Daniel",
            font: { background: "#000000" },
            gender: "male",
        },
        {
            id: 33,
            shape: "image",
            size: 30,
            image: DIR + "Mary.png",
            label: "Mary",
            font: { background: "#000000" },
            gender: "female",
            accessibility: "visual",
            disability: "monochromacy",
            country: "zimbabwe",
            age: 68,
            occupation: "cartoonist",
        },
    ]);

    // create connections between people
    // value corresponds with the amount of contact between two people
    edges = new vis.DataSet([
        { from: 1, to: 6, arrows: "from", color: { color: "black" } },
        { from: 2, to: 6, arrows: "from", color: { color: "black" } },
        { from: 3, to: 6, arrows: "from", color: { color: "black" } },
        { from: 4, to: 6, arrows: "from", color: { color: "black" } },
        { from: 5, to: 6, arrows: "from", color: { color: "black" } },

        { from: 3, to: 7, arrows: "to", color: { color: "black" } },
        { from: 3, to: 8, arrows: "to", color: { color: "black" } },
        { from: 3, to: 9, arrows: "to", color: { color: "black" } },

        { from: 1, to: 10, arrows: "to", color: { color: "black" } },
        { from: 1, to: 11, arrows: "to", color: { color: "black" } },
        { from: 1, to: 12, arrows: "to", color: { color: "black" } },

        { from: 2, to: 13, arrows: "to", color: { color: "black" } },
        { from: 2, to: 14, arrows: "to", color: { color: "black" } },
        { from: 2, to: 15, arrows: "to", color: { color: "black" } },
        { from: 2, to: 16, arrows: "to", color: { color: "black" } },

        { from: 19, to: 6, arrows: "to", color: { color: "black" } },
        { from: 19, to: 17, arrows: "to", color: { color: "black" } },
        { from: 19, to: 18, arrows: "to", color: { color: "black" } },

        {
            from: 18,
            to: 20,
            id: 1,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
            dashes: false,
        }, // Edge : Persona --> Lisa
        {
            from: 18,
            to: 21,
            id: 2,
            arrows: "to",
            color: { color: "black" },
            relation: "male",
        }, // Edge : Persona --> George
        {
            from: 18,
            to: 22,
            id: 3,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Emma
        {
            from: 18,
            to: 23,
            id: 4,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Rachel
        {
            from: 18,
            to: 24,
            id: 5,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Rebecca
        {
            from: 18,
            to: 25,
            id: 6,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Adriana
        {
            from: 18,
            to: 26,
            id: 7,
            arrows: "to",
            color: { color: "black" },
            relation: "male",
        }, // Edge : Persona --> Ivan
        {
            from: 18,
            to: 27,
            id: 8,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Oleksandra
        {
            from: 18,
            to: 28,
            id: 9,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Ainu
        {
            from: 18,
            to: 29,
            id: 10,
            arrows: "to",
            color: { color: "black" },
            relation: "male",
        }, // Edge : Persona --> Zhang
        {
            from: 18,
            to: 30,
            id: 11,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Samantha
        {
            from: 18,
            to: 31,
            id: 12,
            arrows: "to",
            color: { color: "black" },
            relation: "male",
        }, // Edge : Persona --> Alexander
        {
            from: 18,
            to: 32,
            arrows: "to",
            color: { color: "black" },
            relation: "male",
        }, // Edge : Persona --> Daniel
        {
            from: 18,
            to: 33,
            arrows: "to",
            color: { color: "black" },
            relation: "female",
        }, // Edge : Persona --> Mary
        {
            from: 33,
            to: 7,
            arrows: "to",
            color: { color: "black" },
            relation: "has_visual_accessibility",
        },
    ]);

    /**
       * filter values are updated in the outer scope.
       * in order to apply filters to new values, DataView.refresh() should be called
       */
    let nodeFilterValue = "";
    const edgesFilterValues = {
        male: true,
        female: true,
    };

    /*
filter function should return true or false
based on whether item in DataView satisfies a given condition.
*/
    const nodesFilter = (node) => {
        if (nodeFilterValue === "") {
            return true;
        }
        switch (nodeFilterValue) {
            case "male":
                return node.gender === "male";
            case "female":
                return node.gender === "female";
            default:
                return true;
        }
    };

    const edgesFilter = (edge) => {
        return edgesFilterValues[edge.relation];
    };

    const nodesView = new vis.DataView(nodes, { filter: nodesFilter });
    const edgesView = new vis.DataView(edges, { filter: edgesFilter });

    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        autoResize: true,
        interaction: {
            navigationButtons: true,
            keyboard: true
          },
        nodes: {
            borderWidth: 4,
            size: 30,
            color: {
                border: "#406897",
                background: "#6AAFFF",
            },
        },
        clickToUse: true,
        improvedLayout: true,
        hierarchical: {
            blockShifting: true,
            edgeMinimization: true,
            parentCentralization: true,
        },
        nodes: {
            borderWidth: 4,
            size: 30,
            color: {
                border: "#222222",
                background: "#666666",
            },
            font: { color: "#eeeeee" },
            shadow: true,
        },
        edges: {
            color: "lightgray",
            smooth: true,
        },
        physics: { enabled: true, wind: { x: 0, y: 0 } },
    };
    network = new vis.Network(container, data, options);
    /*
          network.on("select", function (params) {
            document.getElementById("selection").innerHTML =
              "Selection: " + params.nodes;
            console.log(params.nodes[0]);
            console.log(params.nodes[1]);
          });
  */
    network.on("click", function (params) {
        // NOT RECOMMENDED
        if (params.nodes.length > 0) {
            var nodeId = params.nodes[0];
            console.log("Clicked on a NODE with id = " + nodeId + ", label = ");
            network.fit();
        }
    });
}

function searchNodesFunction() {
    var searchNodeString = document.getElementById("search01").value;
    network.selectNodes([searchNodeString]);
    console.log(searchNodeString);
    //network.selectNodes([1,2,3]);
}

function searchEdgesFunction() {
    var searchEdgesString = document.getElementById("search02").value;
    network.selectEdges([searchEdgesString]);
    console.log(searchEdgesString);
    network.selectEdges(1);
}

window.addEventListener("load", () => {
    draw();
});