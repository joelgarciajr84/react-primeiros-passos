var headers = ["Aircraft", "Description", "Seats"];
var data = [
    ["A300", "2 engines, twin aisle", "228–254"],
    ["A310", "2 engines, twin aisle, modified A300", "187"],
    ["A318", "2 engines, single aisle, shortened 6.17 m from A320", "107"],
    ["A319", "2 engines, single aisle, shortened 3.77 m from A320", "124"],
    ["A320", "2 engines, single aisle", "150"],
    ["A321", "2 engines, single aisle, lengthened 6.94 m from A320", "185"],
    ["A330", "2 engines, twin aisle", "246-300"],
    ["A340", "4 engines, twin aisle", "239–380"],
    ["A350", "2 engines, twin aisle", "270–350"],
    ["A380", "4 engines, double deck, twin aisle", "555"]
];

var AirBusPlanes = React.createClass({
    displayName: "AirBusPlanes",
    propTypes: {
        headers: React.PropTypes.arrayOf(
            React.PropTypes.string
        ),
        initialData: React.PropTypes.arrayOf(
            React.PropTypes.any
        )
    },
    getInitialState: function() {
        return {
            data: this.props.initialData,
            sortby:null,
            desceding:false
        };
    },
    _sort:function(ev){
        var column = ev.target.cellIndex;
        var desceding = this.state.sortby === column && !this.state.desceding;
        var data = this.state.data.slice();
        data.sort(function(a, b){
            return desceding
            ? (a[column] < b[column] ? 1 : -1)
            : (a[column] > b[column] ? 1 : -1);
        });


        this.setState({
            data:data,
            sortby:column,
            desceding:desceding
        });

    },


    render:function(){
        return(
            React.DOM.table({className:"table table-striped table-inverse"},
                React.DOM.thead({
                    className: "thead-inverse",
                    onClick: this._sort
                },
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx){
                            if(this.state.sortby === idx){
                                title += this.state.desceding ? ' \u2191 ' : ' \u2193 '
                            }
                            return React.DOM.th({key:idx},title);
                        },this)
                    )
                ),
                React.DOM.tbody(null,
                    this.state.data.map(function(row,idx){
                        return(
                            React.DOM.tr({key:idx},
                                row.map(function(cell, idx){
                                    return React.DOM.td({key:idx}, cell);
                                })
                            )
                        )
                    })
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
