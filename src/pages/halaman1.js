import React, { Component } from 'react';
import { Table, Button, Row, Col, Label, Container } from 'reactstrap';
import Endpoint from '../pages/endpoint';
import { Link } from 'react-router-dom';

const url = new Endpoint();

class Halaman extends Component {
  constructor(props) {
    super(props);
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

    this.state = {
      dataListPokemon: [],
      alertKoneksi: false,
    };
  };

  componentDidMount() {
    this.getDataPokemon();
  }

  getDataPokemon() {
    url.get_list_pokemon()
      .then((res) => {
        const { data } = res;
        // console.log(data);
        this.setState({
          dataListPokemon: data.results
        })
      }).catch((err) => {
        this.setState({
          alertKoneksi: true
        })
      });
  }



  render() {
    return (
      <Row>

        <Container className="align-content-center">
          <Row>
            <Col sm={6}>
              <Label>Go to My Pokemon List</Label>
            </Col>
            <Col sm={6}>
              <Link to={{ pathname: "/mypokemon" }}>
                <Button style={{ align: 'center' }} className="button-detil" size="md">
                  My Pokemon
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>



        <div>
          <Table className="mb-0" striped responsive>
            <thead>
              <tr>
                <th style={{ width: "10%", textAlign: 'center' }}>No</th>
                <th style={{ width: "65%", textAlign: 'center' }}>Nama Pokemon</th>
                <th style={{ width: "25%", textAlign: 'left' }}>Detil Pokemon</th>

              </tr>
            </thead>
            <tbody>

              {
                this.state.dataListPokemon.map((record, index) => {
                  return (
                    <tr key={index}>
                      <th style={{ textAlign: 'center' }}>{index + 1}</th>
                      <td style={{ textAlign: "center" }}>{record.name}</td>
                      <td>
                        <Link to={{ pathname: "/detilpokemon/" + record.name }}>
                          <Button style={{ align: 'center' }} className="button-detil" color="outline-dark" size="md" id='tooltipbtndetil'>
                            Lihat Detil
                                        </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Row>


    )
  }

}

export default Halaman;
