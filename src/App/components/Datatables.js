import React, { Component } from 'react';
import ReactDOM from "react-dom"
const $ = require("jquery");
$.DataTable = require("datatables.net");
import 'datatables.net-bs5';
import 'datatables.net-responsive';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJiNmI3YTA5YWJmMzhiMDM5NWI0YSIsIm5hbWUiOiJUaGUgRW5kIiwiZXhwIjoxNjQ1NzE0MDE1LCJpYXQiOjE2NDA1MzAwMTV9.MF58moi058XhbU74ZBj3tn5DVwwLs7ma8sSyKAi6IEU'
class Datatables extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                ...this.props.columns,
                {
                    title: "action",
                    data: null,
                    createdCell: (td, cellData, rowData) =>
                        ReactDOM.render(
                            <>
                                <button
                                    className='btn btn-outline-info btn-sm mb-0 py-1'
                                    onClick={() =>
                                        this.props.editRow(rowData._id)
                                    }>
                                    edit
                                </button>
                                <button
                                    className='btn btn-outline-danger btn-sm mb-0 py-1'
                                    onClick={() =>
                                        this.props.deleteRow(rowData._id)
                                    }>
                                    remove
                                </button>
                            </>, td
                        )
                }
            ],
            responsive: true,
            /*  processing:true,
             serverSide:true,
             ordering:false,
              */
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
                    width="100%"
                    ref={el => this.el = el}></table>
            </div>
        );
    }
}

export default Datatables;