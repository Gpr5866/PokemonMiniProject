import React, { Component } from 'react';
import { Row, Col, Media, Card, CardBody, Label, Form, FormGroup, Table, Button, Container } from 'reactstrap';
import Endpoint from '../pages/endpoint';
import { Link } from 'react-router-dom';

const url = new Endpoint();

class Detil extends Component {
    constructor(props) {
        super(props);
        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            dataPokemonAbility: [],
            dataPokemonName: '',
            dataPokemonBaseExp: '',
            spritesPokemon: '',
            dataStatsPokemon: [],
            loadDetilPokemon: false,
            alertKoneksi: false,
        };
    };

    componentDidMount() {
        this.getDetilPokemon();

    };


    getDetilPokemon() {
        // this.setState({
        //     loadDetilPokemon: true
        // })
        url.get_detail_pokemon(this.props.match.params.nama_pokemon)
            .then((res) => {
                const { data } = res;
                console.log(data);
                var abilityPokemon = data.abilities;
                var pokemonName = data.name;
                var pokemonExp = data.base_experience;
                var pokemonPicture = data.sprites.front_default;
                var pokemonStats = data.stats;

                this.setState({
                    dataPokemonAbility: abilityPokemon,
                    dataPokemonName: pokemonName,
                    dataPokemonBaseExp: pokemonExp,
                    spritesPokemon: pokemonPicture,
                    dataStatsPokemon: pokemonStats

                });
                console.log(this.state.dataStatsPokemon);


            }).catch((err) => {
                this.setState({
                    alertKoneksi: true
                })
            })
    };

    catchPokemon() {
        console.log(`masuk sini`);
        const dataPokemon = {
            "namaPokemon": this.state.dataPokemonName,
            "expPokemon": this.state.dataPokemonBaseExp,
            "statsPokemon": this.state.dataStatsPokemon,
            "editPokemon" : 0
        };
        // console.log(`isi data : ${JSON.stringify(dataPokemon, null, 2)}`);
        url.catch_pokemon_baru(dataPokemon)
            .then((res) => {
                const { data } = res;
                console.log(data);
                if (data !== 'coba lagi') {
                    // console.log(`isi data : ${JSON.stringify(data, null, 2)}`);
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 300)
                }

            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Row>
                            <img style={{ alignItems: 'center', height: '200px', width: '200px' }} src={this.state.spritesPokemon} alt="new" class="center" />
                        </Row>

                        <Row>
                            <Button onClick={() => this.catchPokemon()}>Catch Pokemon</Button>
                        </Row>

                    </Col>

                    <Col md={6}>
                        <Row>
                            <Col md={3}>
                                <Label>Nama Pokemon</Label>
                            </Col>
                            <Col md={1}>
                                <Label>:</Label>
                            </Col>
                            <Col md={8}>
                                <Label>{this.state.dataPokemonName}</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <Label>Pokemon Exp</Label>
                            </Col>
                            <Col md={1}>
                                <Label>:</Label>
                            </Col>
                            <Col md={8}>
                                <Label>{this.state.dataPokemonBaseExp}</Label>
                            </Col>
                        </Row>

                        <Row>
                            <div>
                                <Table className="mb-0" striped responsive bordered class="p-1">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "15%", textAlign: 'center' }}>No</th>
                                            <th style={{ width: "15%", textAlign: 'center' }}>pokemon abilities</th>
                                            {/* <th style={{ width: "25%" }}>Detil Pokemon</th> */}

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.dataPokemonAbility.map((record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th style={{ textAlign: 'center' }}>{index + 1}</th>
                                                        <td style={{ textAlign: "center" }}>{record.ability.name}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </Table>
                            </div>
                        </Row>

                        <Row>
                            <div>
                                <Table className="mb-0" striped responsive bordered>
                                    <thead>
                                        <tr>
                                            {/* <th style={{ width: "10%", textAlign: 'center' }}>No</th> */}
                                            <th style={{ width: "15%", textAlign: 'center' }}>Stats</th>
                                            <th style={{ width: "15%", textAlign: 'center' }}>Value</th>

                                            {/* <th style={{ width: "25%" }}>Detil Pokemon</th> */}

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.dataStatsPokemon.map((record, index) => {
                                                return (
                                                    <tr>
                                                        {/* <th style={{ textAlign: 'center' }}>{index + 1}</th> */}
                                                        <td style={{ textAlign: "center" }}>{record.stat.name}</td>
                                                        <td style={{ textAlign: "center" }}>{record.base_stat}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </Table>
                            </div>
                        </Row>

                        <Row style={{ marginTop: '1em' }}>
                            <Col md={12}>
                                <Button style={{ float: 'right', marginRight: '10px' }} size='md' onClick={() => { window.history.back() }}>Kembali</Button>
                            </Col>
                        </Row>




                    </Col>
                </Row>



            </Container>




        )
    }


}

export default Detil;