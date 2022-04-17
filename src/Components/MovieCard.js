import React from 'react'
import { Button, Card } from 'react-bootstrap'


function MovieCard({movie}) {
  return (
    <div>
        <Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Card.Text style={{color:"red"}}>
      Rate : {movie.rate}
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

    </div>
  )
}

export default MovieCard