import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const QualityInfo = () => {
    const dateFormat = 'DD/MM/YYYY';

    const [startDate, setstartDate] = useState(null);

    // startDate = new Date();
    const handleChange = date => {
        setstartDate(date)
    };

    return (
        <div>
            <div className="page-header">
                <h3 className="mb-0 font-weight-semibold"> Quality Info </h3>
            </div>

            <div className="row col-md-7">



                <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">input</label>
                        <div className="col-sm-9">
                            <Form.Control type="text" />
                        </div>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">input</label>
                        <div className="col-sm-9">
                            <Form.Control type="text" />
                        </div>
                    </Form.Group>
                </div>
            </div>

            <div className="row col-md-7">
                <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">dropdown</label>
                        <div className="col-sm-9">
                            <select className="form-control">
                                <option>America</option>
                                <option>Italy</option>
                                <option>Russia</option>
                                <option>Britain</option>
                            </select>
                        </div>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">input</label>
                        <div className="col-sm-9">
                            <Form.Control type="text" />
                        </div>
                    </Form.Group>
                </div>

            </div>


            <div className="row col-md-7">
                <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">dropdown</label>
                        <div className="col-sm-9">
                            <select className="form-control">
                                <option>America</option>
                                <option>Italy</option>
                                <option>Russia</option>
                                <option>Britain</option>
                            </select>
                        </div>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">input</label>
                        <div className="col-sm-9">
                            <Form.Control type="text" />
                        </div>
                    </Form.Group>
                </div>

            </div>
            <div className="col-md-7">
                <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                    <DatePicker className="form-control w-100"
                        placeholderText="Please select a date"
                        Placeholder="DD/MM/YYYY"
                        selected={startDate}
                        onChange={handleChange}
                    />


                    <div className='col-sm-3'>
                        <button type="button" className=" btn btn-outline-primary ">Submit</button>
                    </div>

                </Form.Group>

            </div>


            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Basic Table</h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Profile</th>
                                        <th>VatNo.</th>
                                        <th>Created</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>53275531</td>
                                        <td>12 May 2017</td>
                                        <td><label className="badge badge-danger">Pending</label></td>
                                    </tr>
                                    <tr>
                                        <td>Messsy</td>
                                        <td>53275532</td>
                                        <td>15 May 2017</td>
                                        <td><label className="badge badge-warning">In progress</label></td>
                                    </tr>
                                    <tr>
                                        <td>John</td>
                                        <td>53275533</td>
                                        <td>14 May 2017</td>
                                        <td><label className="badge badge-info">Fixed</label></td>
                                    </tr>
                                    <tr>
                                        <td>Peter</td>
                                        <td>53275534</td>
                                        <td>16 May 2017</td>
                                        <td><label className="badge badge-success">Completed</label></td>
                                    </tr>
                                    <tr>
                                        <td>Dave</td>
                                        <td>53275535</td>
                                        <td>20 May 2017</td>
                                        <td><label className="badge badge-warning">In progress</label></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default QualityInfo;