import React, {Component} from 'react';
import {Table,UncontrolledTooltip, Button} from 'reactstrap';
import Endpoint from '../pages/endpoint';
import {Link} from 'react-router-dom';

const url = new Endpoint();

class Halaman extends Component {
    constructor (props) {
        super(props);
        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            dataListPokemon : [],
            alertKoneksi: false,
            alertKesalahan: false,
            messageKesalahan: "",
        };
    };

    componentDidMount() {
        this.getDataPokemon();
    }

    getDataPokemon() {
        url.get_list_pokemon()
            .then((res) => {
                const {data} = res;
                console.log(data);
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
                <div>
                    <Table className="mb-0" striped responsive>
                      <thead>
                        <tr>
                          <th style={{ width: "25%" }}>No</th>
                          <th style={{ width: "50%" }}>Nama Pokemon</th>
                          <th style={{ width: "25%" }}>Detil Pokemon</th>
                          
                        </tr>
                      </thead>
                      <tbody>

                        {
                            this.state.dataListPokemon.map((record, index) => {
                                return (
                                  <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td style={{ textAlign:"center"}}>{record.name}</td>
                                    <td>
                                      <Link to={{pathname: "/" + record.name}}>
                                        <Button className="button-detil" color="outline-dark" size="md" id='tooltipbtndetil'>
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
        )
    }

}

export default Halaman;
