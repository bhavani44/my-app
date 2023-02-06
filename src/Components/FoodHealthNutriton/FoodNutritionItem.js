import React from 'react';
// import './foodHealthNutrition.css';
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function FoodHealthNutritionItem({ data }) {
    let navigate = useNavigate();
    return (
        <>
        <Container>
        <Row>
            {
                
                (!data) ? "Not Found" : data.map(item => {
                    return (
                        <Container key={item.id} >
                            <h3 className="food-health-nutrion-item-heading">{item.fname}</h3>
                            <img className="food-health-nutrion-item-img image-fluid" src={item.fimgUrl} alt="" />
                            <div className='instruction-container'>
                                <h2 className='instruction-heading'>Instructions To Play</h2>
                                <p className='instruction-content'>{item.finstructions}</p>
                            </div>
                            <button className="food-health-nutrion-item-button" onClick={() => { navigate(`/${item.component}`) }}>Play</button>
                        </Container>
                    )
                })
                
            }
            </Row>
            </Container>
            
        </>
    )
}

export default FoodHealthNutritionItem