<>
      <Container className="mt-5">
        <h2>Signup</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name = "name"
              value={formdata.name}
              onChange={handelinputchange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name = "email"     
              value={formdata.email} 
              onChange={handelinputchange}          
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name = "password"
              value={formdata.password}
              onChange={handelinputchange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Signup
          </Button>
        </Form>
      </Container>
    </>