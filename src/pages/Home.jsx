import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Home = () => {
  const cardStyle = {
    fontWeight: 'bold',
    fontSize: '50px',
    backgroundColor: 'rgb(166, 166, 166)',
    color: 'white',
  };
  return (
    <>
      <Card style={cardStyle}>
        <Card.Body className='me-auto mx-auto'>
          <Button variant='outline-success'>
            Get Our Latest Item
          </Button>
          <br />
          <Button variant='outline-success' style={{ borderRadius: '100%', marginLeft: 50, marginTop: -60}}>
            ▶
          </Button>
        </Card.Body>
      </Card>
      <Card style={{display: 'flex', alignItems: 'center'}}>
        <h1>Tours</h1>
        <div style={{wordSpacing: '10px'}}>
          <span>JUL16</span>
          <span>DETROIT, MI</span>
          <span>DTE ENERGY MUSIC THEATRE</span>
          <button style={{border: 'none', borderRadius: '20%', color: 'white', backgroundColor: 'aqua'}}>Buy Ticktes</button>
        </div>
        <hr size="2" width="50%" color="blue" />
        <div style={{wordSpacing: '10px'}}>
          <span>JUL19</span>
          <span>TORONTO,ON</span>
          <span>BUDWEISER STAGE</span>
          <button style={{border: 'none', borderRadius: '20%', color: 'white', backgroundColor: 'aqua'}}>Buy Ticktes</button>
        </div>
        <hr size="2" width="50%" color="blue" />
        <div style={{wordSpacing: '10px'}}>
          <span>JUL22</span>
          <span>BRISTOW, VA</span>
          <span>JIGGY LUBE LIVE</span>
          <button style={{border: 'none', borderRadius: '20%', color: 'white', backgroundColor: 'aqua'}}>Buy Ticktes</button>
        </div>
        <hr size="2" width="50%" color="blue" />
        <div style={{wordSpacing: '10px'}}>
          <span>JUL28</span>
          <span>PHOENIX, AZ</span>
          <span>AK-CHIN PAVILION</span>
          <button style={{border: 'none', borderRadius: '20%', color: 'white', backgroundColor: 'aqua'}}>Buy Ticktes</button>
        </div>
        <hr size="2" width="50%" color="blue" />
        <div style={{wordSpacing: '10px'}}>
          <span>JU29</span>
          <span>LAS VEGAS, NV</span>
          <span>T-MOBILE ARENA</span>
          <button style={{border: 'none', borderRadius: '20%', color: 'white', backgroundColor: 'aqua'}}>Buy Ticktes</button>
        </div>
        <hr size="2" width="50%" color="blue" />
        <div style={{wordSpacing: '10px'}}>
          <span>AUG2</span>
          <span>CONCORD, CA</span>
          <span>CONCORD PAVILION</span>
          <button style={{border: 'none', borderRadius: '20%', color: 'white', backgroundColor: 'aqua'}}>Buy Ticktes</button>
        </div>
        <hr size="2" width="50%" color="blue" />
      </Card>
    </>
  );
};

export default Home;
