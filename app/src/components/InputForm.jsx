import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';
import './InputForm.css';
import CalendarBlank from './Asessts/Forms/CalendarBlank.svg';
import Envelope from './Asessts/Forms/Envelope.svg';
import CaretDown from './Asessts/Forms/CaretDown.svg';
import Result from './Result';

function InputForm(){
  const [result, setResult] = useState("");
  const [showR,setshowR]=useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [Input_form,setInput_form]=useState({
    firstName:"",
    lastName:"",
    email:"",
    birthday:"",
    gender:"",
    race_ethnicity: "",
    parental_level_of_education: "",
    lunch: "",
    test_preparation_course: "",
    math_score: "",
    reading_score: "",
  })
  const handleChange = (e) =>{
    const {name,value}=e.target
    setInput_form((prevState)=>({...prevState,[name]:value}))
}
  const handleChangeInt = (e) =>{
    const {name,value}=e.target
    setInput_form((prevState)=>({...prevState,[name]:value}))
  }
const handlePredictClick = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const url = "https://student-performance-analysis-backflask.onrender.com/predict";
    const formData = JSON.stringify(Input_form);
    console.log(formData)
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setResult(`Predicted Score: ${data.prediction}`);
        setshowR(true);
        setresShow(true)
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult("Error fetching prediction");
    } finally {
      setIsloading(false);
    }
  };
  const [resShow, setresShow] =useState(false);
  return (
    <div className="form-container container-fluid" >
      <Container fluid className="input-form" >
        <Row className='d-flex justify-content-center' style={{margin:"0"}}>
          <Col xs={12} md={10} lg={8} style={{padding:"0"}}>
            <Navbar bg="primary" variant="dark" expand="lg" className="nav-bar p-4" style={{borderRadius:"10px"}}>
              <Navbar.Brand href="#home">Student Performance Analysis</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#about">About Analysis</Nav.Link>
                  <Nav.Link href="#test">Test Your Score</Nav.Link>
                  <Nav.Link href="#history">History</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="register">
            <div className="title text-center">
              <h1 className="text-wrapper-4">Student Performance Analysis</h1>
              
            </div>
            <Form className="form" action='/predict' onSubmit={handlePredictClick} >
              <Row className="spaced">
                <Col sm={6}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>First name <span className="text-wrapper-5">*</span></Form.Label>
                   
                    <Form.Control type="text" placeholder="Your Firstname" required name='firstName' value={Input_form.firstName} onChange={handleChange}/>

                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Last name <span className="text-wrapper-5">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Your last name" required  name='lastName' value={Input_form.lastName} onChange={handleChange}/>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>E-mail <span className="text-wrapper-5">*</span></Form.Label>
                    <Form.Control type="email" placeholder="yourmail@gmail.com" required  name='email' value={Input_form.email} onChange={handleChange}/>
                    <div className="input-right-section">
                      <img className="icon-duotone" alt="Icon duotone" src={Envelope} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" required name='gender' value={Input_form.gender} onChange={handleChange}>
                      <option value={" "}>Select Your Gender</option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                    </Form.Control>
                    <div className="input-right-section">
                      <img className="icon-duotone" alt="Icon duotone" src={CaretDown} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="spaced">
              <Col sm={12}>
              <Form.Group className="form-group-custom" controlId="formBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" placeholder="DD / MM / YYYY"  name='birthday' value={Input_form.birthday} onChange={handleChange}/>
              <div className="input-right-section">
                <img className="icon-duotone" alt="Icon duotone" src={CalendarBlank} />
              </div>
            </Form.Group>
            </Col>
            </Row>
              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Field No 1 <span className="text-wrapper-5">*</span></Form.Label>
                    <Form.Control as="select" required name='race_ethnicity' value={Input_form.race_ethnicity} onChange={handleChange}>
                      <option>Select Race/Ethnicity</option>
                      <option value={"group A"}>Group A</option>
                      <option value={"group B"}>Group B</option>
                      <option value={"group C"}>Group C</option>
                      <option value={"group D"}>Group D</option>
                      <option value={"group E"}>Group E</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    <Form.Label style={{}}>Field No 2 <span className="text-wrapper-5">*</span></Form.Label>
                    <Form.Control as="select" required name='parental_level_of_education' value={Input_form.parental_level_of_education} onChange={handleChange}>
                    <option value={""}>Select Parental Level of Education</option>
                    <option value={"some high school"}>Some High School</option>
                    <option value={"high school"}>High School</option>
                    <option value={"some college"}>Some College</option>
                    <option value={"associate's degree"}>Associate's Degree</option>
                    <option value={"bachelor's degree"}>Bachelor's Degree</option>
                    <option value={"master's degree"}>Master's Degree</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    {/* <Form.Label>Field No 3 <span className="text-wrapper-5">*</span></Form.Label> */}
                    <Form.Control as="select" required name='lunch' value={Input_form.lunch} onChange={handleChange}>
                    <option value={""}>Select Lunch Type</option>
                    <option value={"standard"}>Standard</option>
                    <option value={"free/reduced"}>Free/Reduced</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Field No 4 <span className="text-wrapper-5">*</span></Form.Label>
                    <Form.Control as="select" required name='test_preparation_course' value={Input_form.test_preparation_course} onChange={handleChange}>
                    <option value={""}>Select Test Preparation Course</option>
                    <option value={"none"}>None</option>
                    <option value={"completed"}>Completed</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="spaced">
                <Col sm={12}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Field No 5 <span className="text-wrapper-5">*</span></Form.Label>
                    
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Math Score <span className="text-wrapper-5">*</span></Form.Label>
                    <Form.Control type="number" placeholder="Math Score" required name='math_score' value={Input_form.math_score} onChange={handleChangeInt}/>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Reading Score <span className="text-wrapper-5">*</span></Form.Label>           
                    <Form.Control type="number" placeholder="Reading Score" required name='reading_score' value={Input_form.reading_score} onChange={handleChangeInt}/>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit" className="w-100" >
                {isLoading?"Loading":"Enter"}
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4">
            <div className="text-wrapper-6">Student Performance Analysis Form</div>
            <div>{showR?<Result show={resShow} onHide={() => setresShow(false)} res={result}/>:""}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputForm;
