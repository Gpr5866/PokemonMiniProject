import React, { Component } from 'react';
import { Table, Button, Row, Col, Label, Container, Modal, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import Endpoint from '../pages/endpoint';
import { Link } from 'react-router-dom';

const url = new Endpoint();

class MyPokemon extends Component {

    constructor(props) {
        super(props);
        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            dataListMyPokemon: [],
            idReleasePokemon: '',

            modalEditPokemon: false,
            detilPokemon: [],
            idPokemon: '',
            editNamaPokemon: '',
            jumlahEditPokemon: 0,

            alertKoneksi: false,
        };
    };

    componentDidMount() {
        this.getDataMyPokemon();
    };

    bukaModalEditPokemon(record) {
        this.setState({
            modalEditPokemon: true,
            idPokemon: record.idPokemon,
            jumlahEditPokemon: record.editPokemon + 1
        });
        this.getDetailMyPokemon(record.idPokemon);
    }

    tutupModalEditPokemon() {
        this.setState({
            modalEditPokemon: false,
            modalEditPokemon: false,
            detilPokemon: [],
            idPokemon: '',
            editNamaPokemon: '',
        })
    }

    getDataMyPokemon() {
        url.get_list_mypokemon()
            .then((res) => {
                const { data } = res;
                console.log(data);
                this.setState({
                    dataListMyPokemon: data
                })
            }).catch((err) => {
                this.setState({
                    alertKoneksi: true
                })
            });
    };

    getDetailMyPokemon(idMyPokemon) {
        url.get_detil_pokemon(idMyPokemon)
            .then((res) => {
                const { data } = res;
                console.log(data);
                this.setState({
                    detilPokemon: data
                });
            }).catch((err) => {
                this.setState({
                    alertKoneksi: true
                })
            })
    };

    updatePokemon(idPokemon) {
        // var i = 0;
        // var fib = [];
        // fib[0] = 0;
        // fib[1] = 1;
        // for (i = 2; i <= 10; i++) {
        //     // Next fibonacci number = previous + one before previous
        //     // Translated to JavaScript:
        //     fib[i] = fib[i - 2] + fib[i - 1];
        //     console.log(fib[i]);
        // }


        console.log('masuk sini');
        const formdata = {
            "namaPokemon": this.state.editNamaPokemon,
            "editPokemon": this.state.jumlahEditPokemon
        };
        console.log(`isi data = ${formdata}`);
        url.update_pokemon(this.state.idPokemon, formdata)
            .then((res) => {
                const { data } = res;
                console.log(`isi data : ${JSON.stringify(data, null, 2)}`);
                setTimeout(() => {
                    this.tutupModalEditPokemon();
                    window.location.href = '/mypokemon';
                }, 300)
            })

    }


    releasePokemon(record) {
        console.log(record.idPokemon);

        url.delete_pokemon_baru(record.idPokemon)
            .then((res) => {
                setTimeout(() => {
                    window.location.href = '/mypokemon'
                }, 300)
            })
    }

    render() {
        return (
            <Row>
                <div>
                    <Table className="mb-0" striped responsive>
                        <thead>
                            <tr>
                                <th style={{ width: "10%", textAlign: 'center' }}>No</th>
                                <th style={{ width: "50%", textAlign: 'center' }}>Nama Pokemon</th>
                                <th style={{ width: "20%", textAlign: 'left' }}>Release Pokemon</th>
                                <th style={{ width: "20%", textAlign: 'left' }}>Edit Pokemon</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.dataListMyPokemon.map((record, index) => {
                                    return (
                                        <tr key={index}>
                                            <th style={{ textAlign: 'center' }}>{index + 1}</th>
                                            <td style={{ textAlign: "center" }}>{record.namaPokemon}</td>
                                            <td>
                                                <Button style={{ align: 'center' }} className="button-detil" color="outline-dark" size="md" onClick={() => this.releasePokemon(record)}>
                                                    Release Pokemon
                                                </Button>
                                            </td>
                                            <td>
                                                <Button style={{ align: 'center' }} className="button-detil" color="outline-dark" size="md" onClick={() => this.bukaModalEditPokemon(record)} >
                                                    Edit Pokemon
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </div>

                <Row style={{ marginTop: '1em' }}>
                    <Col md={12}>
                        <Button style={{ float: 'right', marginRight: '10px' }} className="button_detil" size='md' onClick={() => { window.history.back() }}>Kembali</Button>
                    </Col>
                </Row>

                <Modal isOpen={this.state.modalEditPokemon} size='xl'>
                    <div style={{ width: '100%', padding: '1em' }}>
                        <div style={{ float: 'right', cursor: 'pointer', fontWeight: 700, border: '0px solid #cccccc' }}
                            onClick={() => this.tutupModalEditPokemon()}>X</div>
                        <span style={{ fontSize: '18px', fontWeight: 700 }}>Edit Nama Pokemon</span>
                    </div>
                    <ModalBody>
                        <Row>
                            <FormGroup>
                                <Label>ID Pokemon</Label>
                                <Input type='text' name='text' value={this.state.detilPokemon.idPokemon} disabled />
                            </FormGroup>
                        </Row>

                        <Row>
                            <FormGroup>
                                <Label>Nama Pokemon</Label>
                                <Input
                                    type='text'
                                    name='text'
                                    placeholder='nama pokemon baru'
                                    value={this.state.editNamaPokemon}
                                    onChange={(e) => {
                                        this.setState({ editNamaPokemon: e.target.value });
                                    }}
                                />
                            </FormGroup>
                        </Row>

                        <Row style={{ marginTop: '1em' }}>
                            <Col md={12}>
                                <Button style={{ float: 'right' }} size='md' onClick={() => this.updatePokemon()}>Simpan</Button>
                                <Button style={{ float: 'right', marginRight: '10px' }} size='md' onClick={() => this.tutupModalEditPokemon()}>Kembali</Button>
                            </Col>
                        </Row>

                    </ModalBody>
                </Modal>
            </Row>


        )
    }
}

export default MyPokemon;