import React, { Component } from 'react';
const $ = require("jquery");
$.DataTable = require("datatables.net");
import 'datatables.net'
import 'datatables.net-bs5';
import 'datatables.net-responsive';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';

class Datatables extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let prop = this.props
        $('#dataTable').DataTable({
            data: prop.data,
            columns: [
                ...prop.columns,
                { title: "action" }
            ],
            "columnDefs": [{
                "targets": -1,
                "data": '_id',
                "render": function (data, type, row, meta) {
                    return '<a id="editRow" href="#" data-id="' + data + '">edit</a> | <a id="delRow" href="#" data-id="' + data + '">delete</a>';
                }
            },],
            responsive: true,
            paging: false,
            searching: false,
            info: false
        })
        $('#dataTable').on('click', '#editRow', function () {
            prop.editRow($(this).data('id'))
        })
        $('#dataTable').on('click', '#delRow', function () {
            const value = prop.data.find(v => v._id == $(this).data('id'))
            const y = confirm(`Are you sure you want to delete this item \n${value.name}`)
            if (y) prop.deleteRow(value._id)
        })
    }

    componentWillUnmount() {
        $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    render() {
        return (
            <div className='table-responsive'>
                <table
                    id="dataTable"
                    className="table table-hover display nowrap table-sm"
                    cellSpacing={0}
                    width="100%"></table>
            </div>
        );
    }
}

export default Datatables;