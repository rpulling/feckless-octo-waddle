import React from 'react';

const Table = React.createClass({

    render: function render() {

        var data = {
                displayNames: ["First Name", "Last Name"],
                cols: ["fname", "lname"],
                rows: [
                    {
                        "fname": "Hasan",
                        "lname": "Brinson"
                    },
                    {
                        "fname": "Doug",
                        "lname": "Peters"
                    },
                    {
                        "fname": "Constantine",
                        "lname": "Martens"
                    },
                    {
                        "fname": "Arzak",
                        "lname": "Wimmer"
                    },
                    {
                        "fname": "Denise",
                        "lname": "Prezzavento"
                    },
                    {
                        "fname": "Matthew",
                        "lname": "Rich"
                    },
                    {
                        "fname": "Minhajuddin",
                        "lname": "Kels"
                    },
                    {
                        "fname": "Janelle",
                        "lname": "Rodenberger"
                    },
                    {
                        "fname": "Kevin",
                        "lname": "Haaf"
                    },
                    {
                        "fname": "Jeri",
                        "lname": "Glover"
                    }
                ]
            }

        var thead = React.DOM.thead({},
            React.DOM.tr({},
                data.displayNames.map(function (col) {
                    return (<th key={col}> {col} </th>);
            })));

        var tbody = React.DOM.thead({},
            data.rows.map(function (row) {
                return React.DOM.tr({}, data.cols.map(function (col) {
                    return (<td key={row[col]}> {row[col]} </td>);
                }));
            }));

        return React.DOM.table({}, [thead, tbody]);
    }

});


module.exports = Table;