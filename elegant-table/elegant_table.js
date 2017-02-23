var headers = ["Aircraft", "Description", "Seats"];
var data = [
    ["A300", "2 engines, twin aisle", "228–254"],
    ["A310", "2 engines, twin aisle, modified A300", "187"],
    ["A318", "2 engines, single aisle, shortened 6.17 m from A320", "107"],
    ["A319", "2 engines, single aisle, shortened 3.77 m from A320", "124"],
    ["A320","2 engines, single aisle", "150"],
    ["A321", "2 engines, single aisle, lengthened 6.94 m from A320", "185"],
    ["A330", "2 engines, twin aisle", "246-300"],
    ["A340", "4 engines, twin aisle", "239–380"],
    ["A350", "2 engines, twin aisle", "270–350"],
    ["A380", "4 engines, double deck, twin aisle", "555"]
];

var AirBusPlanes = React.createClass({
    displayName: "AirBusPlanes",
    render:function(){
        return(
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx){
                            return React.DOM.th({key:idx},title)
                        })
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(AirBusPlanes,{
        headers: headers,
        initialData: data
    }),
    document.getElementById("eleganttable")
);
