import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css'

function HomePageItem({ data }) {
    let navigate = useNavigate();
    return (
        <div id="team" className="">
            <h5 className='section-title'>Select one of the categories to get started</h5>
            <Container >
                <Row>
                    {
                        (!data) ? "Not Found" : data.map((item,index) => {

                            return (
                                <>
                                    <Col xs={12} sm={6} md={4} className="div-center">
                                        <div className="image-flip">
                                            <div className='mainflip flip-0'>
                                                <div className='frontside'>
                                                    <div className='card' key={index} >
                                                        <div className='card-body text-center'>
                                                            <img className="home-page-img img-fluid" src={item.imgUrl} alt="" />
                                                            <h4 className='card-title'>{item.name}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='backside'>
                                                    <div className='card'>
                                                        <div className='card-body text-center d-flex flex-column justify-content-around'>
                                                            <h4 className='card-title'>{item.name}</h4>
                                                            <button onClick={()=>{navigate(`/${item.id}`)}} className='btn btn-outline-light btn-lg text-light'>Start</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                </>
                            )

                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default HomePageItem;